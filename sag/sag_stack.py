from aws_cdk import (
    Duration,
    App, Stack,
    RemovalPolicy,
    aws_s3 as s3,
    aws_s3_deployment as s3deployment,
    aws_route53 as route53,
    aws_certificatemanager as certificatemgr,
    aws_cloudfront as cloudfront,
    aws_iam as iam,
    aws_cloudwatch as cloudwatch,
    aws_route53_targets as targets,
    Environment,
    # aws_sqs as sqs,
)
from constructs import Construct


class SagStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        user = "jabreal"
        org = "website"
        domain_name = "jabrealjohnson.com"
        region = self.region

        bucket = s3.Bucket(self, f"{user}-{org}-s3bucket",
                           removal_policy=RemovalPolicy.DESTROY,
                           versioned=True,
                           auto_delete_objects=True,
                           bucket_name=f"{user}-{org}-bucket",
                           website_index_document="index.html")

        s3deployment.BucketDeployment(self, f"{user}-{org}-deployment",
                                      sources=[
                                          s3deployment.Source.asset("./jabrealjohnson.com/dist/jabrealjohnson.com/")],
                                      destination_bucket=bucket)
        #
        # # Route 53 Hosted Zone
        coaching_zone = route53.HostedZone.from_lookup(self, f"{user}-{org}-zone", domain_name=domain_name)
        #
        # # Certificate Manager
        certificate = certificatemgr.DnsValidatedCertificate(self, f"{user}-{org}-arn", domain_name=domain_name,
                                                             hosted_zone=coaching_zone, region="us-east-1")
        certificate_arn = certificate.certificate_arn
        #
        # # CloudFront Origin Access Identity
        identity = cloudfront.OriginAccessIdentity(self, f"{user}-{org}-identity")

        bucket.add_to_resource_policy(iam.PolicyStatement(
            actions=["s3:Get*"],
            resources=[bucket.arn_for_objects("*")],
            principals=[iam.CanonicalUserPrincipal(identity.cloud_front_origin_access_identity_s3_canonical_user_id)]
        ))
        #
        # # CloudFront Viewer Certificate
        viewer_certificate = cloudfront.ViewerCertificate.from_acm_certificate(
            certificate,
            aliases=[domain_name],
            security_policy=cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            ssl_method=cloudfront.SSLMethod.SNI
        )
        #
        # # CloudFront Distribution
        distribution = cloudfront.CloudFrontWebDistribution(self, f"{user}-{org}-distribution",
                                                            origin_configs=[
                                                                cloudfront.SourceConfiguration(
                                                                    s3_origin_source=cloudfront.S3OriginConfig(
                                                                        s3_bucket_source=bucket,
                                                                        origin_access_identity=identity
                                                                    ),
                                                                    behaviors=[
                                                                        cloudfront.Behavior(
                                                                            is_default_behavior=True,
                                                                            viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
                                                                        )
                                                                    ]
                                                                )
                                                            ],
                                                            viewer_certificate=viewer_certificate,
                                                            default_root_object="index.html",
                                                            error_configurations=[
                                                                cloudfront.CfnDistribution.CustomErrorResponseProperty(
                                                                    error_code=403,
                                                                    response_code=200,
                                                                    response_page_path="/index.html"
                                                                )
                                                            ])

        # # Route 53 ARecord
        route53.ARecord(self, f"{user}-{org}-arecord",
                        record_name=domain_name,
                        zone=coaching_zone,
                        target=route53.RecordTarget.from_alias(targets.CloudFrontTarget(distribution)))

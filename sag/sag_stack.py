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

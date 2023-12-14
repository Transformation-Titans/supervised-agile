#!/usr/bin/env python3
import os

import aws_cdk as cdk
import os
from sag.sag_stack import SagStack

app = cdk.App()
SagStack(app, "SagStack", env=cdk.Environment(
    account=os.environ["CDK_DEFAULT_ACCOUNT"],
    region=os.environ["CDK_DEFAULT_REGION"]
))
app.synth()
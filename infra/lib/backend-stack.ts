import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";

/**
 * Stack do backend. Recursos entram nas proximas etapas:
 * DynamoDB, Cognito, Lambdas das tools, AgentCore Runtime, Lambda do chat
 * e API Gateway com autorizador Cognito.
 */
export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}

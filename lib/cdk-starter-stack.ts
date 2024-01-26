import * as lambda from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';

export class MyCdkStack extends cdk.Stack {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 get access to the secret object
    const dbPasswordSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'db-pwd-id',
      'databasePassword',
    );

    const myFunction = new NodejsFunction(this, 'my-function', {
      // 👇 set secret value as ENV variable
      environment: {
        SECRET_NAME: dbPasswordSecret.secretName,
        SECRET_VALUE: dbPasswordSecret.secretValue.toString(),
      },
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: 'main',
      entry: path.join(__dirname, `/../src/my-lambda/index.js`),
    });
  }
}

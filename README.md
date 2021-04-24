# How to get Secrets Manager Values in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/get-secrets-manager-values-aws-cdk)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create a Secretsmanager Secret and the Stack

```bash
aws secretsmanager create-secret --name databasePassword \
  --description "The password for a database" \
  --secret-string "dogsandcats123"

npx cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup - Delete the Secret and the Stack

```bash
aws secretsmanager delete-secret \
  --secret-id databasePassword \
  --recovery-window-in-days 7

npx cdk destroy
```

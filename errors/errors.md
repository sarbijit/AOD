												unable to put item
unable to delete item												{
{												  "message": "Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1",
  "message": "Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1",												  "code": "CredentialsError",
  "code": "CredentialsError",												  "time": "2023-04-09T08:30:29.939Z",
  "time": "2023-04-06T16:29:31.591Z",												  "requestId": "18c0227f-bf71-4caa-b0b4-2c52456c8962",
  "requestId": "29a48da7-fb1c-4ce6-ab5a-2e5f9503a496",												  "statusCode": 400,
  "statusCode": 400,												  "retryable": false,
  "retryable": false,												  "retryDelay": 42.243956899626056,
  "retryDelay": 38.73211177407334,												  "originalError": {
  "originalError": {												    "message": "Could not load credentials from constructor",
    "message": "Could not load credentials from constructor",												    "code": "CredentialsError",
    "code": "CredentialsError",												    "time": "2023-04-09T08:30:29.939Z",
    "time": "2023-04-06T16:29:31.591Z",												    "requestId": "18c0227f-bf71-4caa-b0b4-2c52456c8962",
    "requestId": "29a48da7-fb1c-4ce6-ab5a-2e5f9503a496",												    "statusCode": 400,
    "statusCode": 400,												    "retryable": false,
    "retryable": false,												    "retryDelay": 42.243956899626056,
    "retryDelay": 38.73211177407334,												    "originalError": {
    "originalError": {												      "message": "Invalid identity pool configuration. Check assigned IAM roles for this pool.",
      "message": "Unauthenticated access is not supported for this identity pool.",												      "code": "InvalidIdentityPoolConfigurationException",
      "code": "NotAuthorizedException",												      "time": "2023-04-09T08:30:29.938Z",
      "time": "2023-04-06T16:29:31.591Z",												      "requestId": "18c0227f-bf71-4caa-b0b4-2c52456c8962",
      "requestId": "29a48da7-fb1c-4ce6-ab5a-2e5f9503a496",												      "statusCode": 400,
      "statusCode": 400,												      "retryable": false,
      "retryable": false,												      "retryDelay": 42.243956899626056
      "retryDelay": 38.73211177407334												    }
    }												  }
  }												}
}												
												
												
just changed the 												need to get IAM right with correct put get item dynamo db 
Logins: {												
"cognito-idp.us-east-1.amazonaws.com/us-east-1_TqmbQywDM": idToken												
												
unable to delete item												
{												
  "message": "User: arn:aws:sts::626238822062:assumed-role/cognitodynamo/CognitoIdentityCredentials is not authorized to perform: dynamodb:DeleteItem on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:DeleteItem action",												
  "code": "AccessDeniedException",												
  "time": "2023-04-09T08:41:00.560Z",												
  "requestId": "QUNTQ06IOF73PPDND03Q5A9CKRVV4KQNSO5AEMVJF66Q9ASUAAJG",												
  "statusCode": 400,												
  "retryable": false,												
  "retryDelay": 43.203548893122544												
}												
												
												
mismatch of role in user/group level or identitiy level, check autheticated role defined in "federated identitiy "												
												
												
												
												
why the # still comes 												
												
												
												
Response												
{												
  "errorType": "AccessDeniedException",												
  "errorMessage": "User: arn:aws:sts::626238822062:assumed-role/bijit-outbound-role-penguin/bijit-outbound-callback-penguin is not authorized to perform: dynamodb:Scan on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:Scan action",												
  "trace": [												
    "AccessDeniedException: User: arn:aws:sts::626238822062:assumed-role/bijit-outbound-role-penguin/bijit-outbound-callback-penguin is not authorized to perform: dynamodb:Scan on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:Scan action",												
    "    at Request.extractError (/var/runtime/node_modules/aws-sdk/lib/protocol/json.js:52:27)",												
    "    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:106:20)",												
    "    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:78:10)",												
    "    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/request.js:686:14)",												
    "    at Request.transition (/var/runtime/node_modules/aws-sdk/lib/request.js:22:10)",												
    "    at AcceptorStateMachine.runTo (/var/runtime/node_modules/aws-sdk/lib/state_machine.js:14:12)",												
    "    at /var/runtime/node_modules/aws-sdk/lib/state_machine.js:26:10",												
    "    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:38:9)",												
    "    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:688:12)",												
    "    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:116:18)"												
  ]												
}												
												
Function Logs												
START RequestId: 4e8cfa2f-d871-49cb-b49b-3b023add146f Version: $LATEST												
2023-04-14T09:23:16.008Z	4e8cfa2f-d871-49cb-b49b-3b023add146f	ERROR	Invoke Error 	{"errorType":"AccessDeniedException","errorMessage":"User: arn:aws:sts::626238822062:assumed-role/bijit-outbound-role-penguin/bijit-outbound-callback-penguin is not authorized to perform: dynamodb:Scan on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:Scan action","code":"AccessDeniedException","message":"User: arn:aws:sts::626238822062:assumed-role/bijit-outbound-role-penguin/bijit-outbound-callback-penguin is not authorized to perform: dynamodb:Scan on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:Scan action","time":"2023-04-14T09:23:16.008Z","requestId":"JUO0OUFQ4K6A7MFJQH695MI063VV4KQNSO5AEMVJF66Q9ASUAAJG","statusCode":400,"retryable":false,"retryDelay":0.785578594509273,"stack":["AccessDeniedException: User: arn:aws:sts::626238822062:assumed-role/bijit-outbound-role-penguin/bijit-outbound-callback-penguin is not authorized to perform: dynamodb:Scan on resource: arn:aws:dynamodb:us-east-1:626238822062:table/Employee because no identity-based policy allows the dynamodb:Scan action","    at Request.extractError (/var/runtime/node_modules/aws-sdk/lib/protocol/json.js:52:27)","    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:106:20)","    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:78:10)","    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/request.js:686:14)","    at Request.transition (/var/runtime/node_modules/aws-sdk/lib/request.js:22:10)","    at AcceptorStateMachine.runTo (/var/runtime/node_modules/aws-sdk/lib/state_machine.js:14:12)","    at /var/runtime/node_modules/aws-sdk/lib/state_machine.js:26:10","    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:38:9)","    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:688:12)","    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:116:18)"]}								
END RequestId: 4e8cfa2f-d871-49cb-b49b-3b023add146f												
REPORT RequestId: 4e8cfa2f-d871-49cb-b49b-3b023add146f	Duration: 85.43 ms	Billed Duration: 86 ms	Memory Size: 128 MB	Max Memory Used: 80 MB								
												
Request ID												
4e8cfa2f-d871-49cb-b49b-3b023add146f												
												
												
												
IAM role has missing dynamod db permission 												
												![image](https://user-images.githubusercontent.com/127091823/232527917-ba26425c-32b3-4e10-b944-ad7a6f7db0fc.png)

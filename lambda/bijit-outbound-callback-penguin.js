{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red18\green19\blue24;\red239\green240\blue240;}
{\*\expandedcolortbl;;\cssrgb\c8627\c9804\c12157;\cssrgb\c94902\c95294\c95294;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs56 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const AWS = require('aws-sdk');\
AWS.config.update(\{ region: 'us-east-1' \});\
const dynamodb = new AWS.DynamoDB();\
const ddb = new AWS.DynamoDB.DocumentClient(\{region: 'us-east-1'\}); \
exports.handler = async (event, context, callback) => \{\
 function readMessage() \{\
    const params = \{\
        TableName: 'Employee',\
        Limit: 10\
    \};\
    return ddb.scan(params).promise();\
    \
    \
\}\
\
 await readMessage().then(data => \{\
       \
        data.Items.forEach(function(item) \{\
            \
            console.log(item.Employee);\
        \});\
    \
     callback(null, \{\
            // If success return 200, and items\
            \
            statusCode: '200',\
            \
           'cvz' : data.Items\
            \
            \
        \});\
 \
\
    \
      let connect = new AWS.Connect();\
    const customerName = event.name;\
    const customerPhoneNumber = data.Items[1]["EmployeeName"];\
    const dayOfWeek = event.day;\
    \
    let params = \{\
        "InstanceId" : '91fb4a5a-1999-4f40-a3ab-70f6966945ae',\
        "ContactFlowId" : '95b16cf8-747f-4e83-a0d4-230cd7389d77',\
        "SourcePhoneNumber" : '+441618021370',\
        "DestinationPhoneNumber" : customerPhoneNumber,\
        \
        "Attributes" : \{\
            'name' :data.Items[1]["EmailAddress"],\
            'day' : data.Items[1]["EmployeePIN"]\
            \
        \}\
        \
    \};\
    \
   let abc = data.Items[1]["EmailAddress1"]\
   \
   if (abc=="present")\
   \{\
     connect.startOutboundVoiceContact(\
        params, function (error, response)\{\
            \
            if(error) \{\
                console.log(error);\
                callback("Error", null);\
            \} else\
            \{\
                console.log('Initiated an outbound call with Contact Id ' + JSON.stringify(response.ContactId));\
                callback(null, \{\
            // If success return 200, and items\
            statusCode: 'bijit',\
           \
            \
            \
        \});\
            \}\
        \}\
        );  \
   \}\
   \
   \
   \
\
 \});   \
\};\
\
}
{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red18\green19\blue24;}
{\*\expandedcolortbl;;\cssrgb\c8627\c9804\c12157;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Loads in the AWS SDK\
const AWS = require('aws-sdk'); \
\
// Creates the document client specifing the region \
// The tutorial's table is 'in us-east-1'\
const ddb = new AWS.DynamoDB.DocumentClient(\{region: 'us-east-1'\}); \
\
exports.handler = async (event, context, callback) => \{\
    // Handle promise fulfilled/rejected states\
    await readMessage().then(data => \{\
        data.Items.forEach(function(item) \{\
            console.log(item.Employee)\
        \});\
        \
//         let abc=\{"employee":"102"\};\
// let xyz=abc["employee"]\
        let bijit = data.Items;\
        // const xyz=bijit[2]["EmployeeID"];\
       \
        \
        callback(null, \{\
            // If success return 200, and items\
            statusCode: 200,\
            body1: bijit[0]["EmployeeID"],\
            body2: bijit[1]["EmployeeID"]\
           \
            \
            \
        \})\
    \}).catch((err) => \{\
        // If an error occurs write to the console\
        console.error(err);\
    \})\
\};\
\
// Function readMessage\
// Reads 10 messages from the DynamoDb table Message\
// Returns promise\
function readMessage() \{\
    const params = \{\
        TableName: 'Employee',\
        Limit: 10\
    \}\
    return ddb.scan(params).promise();\
    \
    \
\}}
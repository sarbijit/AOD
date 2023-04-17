
var idToken = null;


function checklogin(){
    const bijit= document.getElementById("visible")
 
 
 const form= document.getElementById('form')
 
 
 form.style.visibility= 'hidden'
var url_string = window.location.href
var url = new URL(url_string);
url.href=url.href.replace('#', '?')
idToken= url.searchParams.get("id_token");
console.log(idToken)
if (idToken != null) {

    console.log(idToken)
    document.getElementById("welcommsg").innerHTML= "signedin";
    document.getElementById('textarea').innerHTML= " I am signed in to cognito now, and the penguin is safe and secure"
    auth();
}
else {

    console.log('id not coming')
   
}

}

function  auth(){
AWS.config.update({
region: "us-east-1",

});


// var cognitoUser = userPool.getCurrentUser();

// if (cognitoUser != null) {
// 	cognitoUser.getSession(function(err, result) {
// 		if (result) {
// 			console.log('You are now logged in.');

// 			// Add the User's Id Token to the Cognito credentials login map.
// 			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
// 				IdentityPoolId: 'YOUR_IDENTITY_POOL_ID',
// 				Logins: {
// 					'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result.getIdToken().getJwtToken()
// 				}
// 			});
// 		}
// 	});
// }
AWS.config.credentials= new AWS.CognitoIdentityCredentials({
 IdentityPoolId: 'us-east-1:341b56e1-b9d8-4bf3-9629-541552a07bbf',
 Logins: {
    "cognito-idp.us-east-1.amazonaws.com/us-east-1_TqmbQywDM": idToken
 }
});


//             AWS.config.credentials= new AWS.CognitoIdentityCredentials({

//                 IdentityPoolId: 'us-east-1:341b56e1-b9d8-4bf3-9629-541552a07bbf',
                
//                 Logins: {
//     "https://bijit-penguin.auth.us-east-1.amazoncognito.com":userpool.getCurrentUser().getSignInUserSession().getIdToken().getJWTToken()
//  }
                
//             } )

//             var pooldata={

//                 UserpoolId:'us-east-1_TqmbQywDM',
//                 ClientId:'6u992jvuhbautphorbb4vue56n'

//             }
//             var userpool = new AmazonCognitoIdentity.CognitoUserpool(pooldata)
// if (userpool.getCurrentUser() != null) {

//     console.log("authenticated")

// }
// else {
//     console.log("not authentcate")
// }

}
function deleteitem(){
   

//load the asws sdk



//set the region for the sdk
// AWS.config.update({
// region: "us-east-1"

// });
var docClient = new AWS.DynamoDB.DocumentClient();   //isko jab neeche lagaya to chalna start ho gaya


// DEfine the table name 

var tableName= 'Employee';

//Define the checkpoints to store 

var EmployeeID= "104";


//Define the parameters for the put item method 

var params ={
 TableName:tableName,
 Key:{
     'EmployeeID': EmployeeID,
     
 }

};


 //uses the put item method to store the data in dynamo db 
 docClient.delete(params, function(err,data){

     if (err){

        document.getElementById('textarea').innerHTML=("unable to delete item" + "\n" + JSON.stringify(err, undefined, 2))

     } else {

        document.getElementById('textarea').innerHTML= "business off hours is successfully selected" + "\n" +"\n"+ "to revert back to business working hours please click on" + "\n"+"\n" + "'press to select business hours'"
        var docClient = new AWS.DynamoDB.DocumentClient(); 
        var params ={
            TableName:"Employee",

            Key:{
                'EmployeeID': "105",
                
            },
            UpdateExpression: 'REMOVE EmailAddress1',
            ReturnValues: 'ALL_NEW'
        };
                  var docClient = new AWS.DynamoDB.DocumentClient(); 
                  docClient.update(params).promise();
                  
                    
 
    const form= document.getElementById('form')
    const container= document.getElementById('container')
 document.getElementById('fullname').value = ""
document.getElementById('phonenumber').value=""
document.getElementById('day').value=""
    form.style.visibility = 'visible'
    }
 }); 
}

function sampleFunction(){
    

//load the asws sdk



//set the region for the sdk

// AWS.config.credentials= new AWS.CognitoIdentityCredentials({
//  IdentityPoolId: 'us-east-1:341b56e1-b9d8-4bf3-9629-541552a07bbf',
//  Logins: {
//     "cognito-idp:us-east-1.amazonaws.com/us-east-1_TqmbQywDM": idToken
//  }
//  })
var docClient = new AWS.DynamoDB.DocumentClient();   //isko jab neeche lagaya to chalna start ho gaya


// DEfine the table name 

var tableName= 'Employee';

//Define the checkpoints to store 

var EmployeeID= "104";


//Define the parameters for the put item method 

var params ={
 TableName:tableName,
 Item:{
     'EmployeeID': EmployeeID
     
 }
};
 //uses the put item method to store the data in dynamo db 
 docClient.put(params, function(err,data){

     if (err){

         document.getElementById('textarea').innerHTML=("unable to put item" + "\n" + JSON.stringify(err, undefined, 2))

        
     } else {

         document.getElementById('textarea').innerHTML= "business hours is successfully selected" + "\n"+ "\n"+ "to revert back to non working hours hours please click on" + "\n"+"\n"+ "'press to select non business hours'"

         const bijit= document.getElementById("bvisible")
 
 
         const form= document.getElementById('form')
         
         
             form.style.visibility= 'hidden'

     }
 }); 
}

function addform(){

    const submit= document.getElementById('form')
const container= document.getElementById('container')
const firstname= document.getElementById('fullname').value
const phonenumber= document.getElementById('phonenumber').value
const day= document.getElementById('day').value
 console.log(firstname, phonenumber, day)
     
 const form= document.getElementById('form')
    
   
 form.style.visibility= 'hidden'
    
 var docClient = new AWS.DynamoDB.DocumentClient();   //isko jab neeche lagaya to chalna start ho gaya


 // DEfine the table name 
 
 var tableName= 'Employee';
 
 //Define the checkpoints to store 
 
 var EmployeeID= "105";
 var EmailAddress=firstname;
 var EmployeeName=phonenumber;
 var EmployeePIN=day;
//  var PhoneNumber= present;
 
 //Define the parameters for the put item method 
 
 var params ={
  TableName:tableName,
  Item:{
      'EmployeeID': EmployeeID,
       'EmailAddress': EmailAddress,
'EmployeeName':EmployeeName,
'EmployeePIN':day,
'EmailAddress1':"present"

      
  }
 };
  //uses the put item method to store the data in dynamo db 
  docClient.put(params, function(err,data){
 
      if (err){
 
          document.getElementById('textarea').innerHTML=("unable to put item" + "\n" + JSON.stringify(err, undefined, 2))
 
         
      } else {
 
          document.getElementById('textarea').innerHTML= "thankyou for filling up the form, you will recieve a call shortly"
 
          const bijit= document.getElementById("bvisible")
  
  
          const form= document.getElementById('form')
          
          
              form.style.visibility= 'hidden'
 
      }
  }); 
 


     } 


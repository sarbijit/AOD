Setting Up an S3 Static Website Using AWS CLI
Introduction
In this hands-on lab, we'll be setting up an S3 bucket website. We'll also verify the website is accessible and working as expected. S3 bucket websites are excellent for hosting single-page, customer-facing content, as they are easy to set up and offer the same high availability and scalability as S3.

Solution
Open a terminal session and log in to the provided EC2 instance via SSH using the credentials provided on the lab page:

ssh cloud_user@<PUBLIC IP>
Create an S3 Bucket from AWS CLI
Create an S3 bucket in the us-east-1 region, replacing <UNIQUE_BUCKET_NAME> with a unique bucket name, and using the S3 API:

aws s3api create-bucket --bucket <UNIQUE_BUCKET_NAME> --acl public-read
Modify the Newly Created Bucket to Be an S3 Website Bucket
Issue the AWS S3 API CLI command to enable the "Static website hosting" property of your bucket. In this same command, you'll also provide the index.html page, which is what your bucket URL will serve:

aws s3 website s3://<UNIQUE_BUCKET_NAME> --index-document index.html
Modify Provided S3 Policy File and Use It to Modify the Bucket Policy
Open the policy_s3.json file:

vim policy_s3.json
In the Resource line, enter your bucket name.

Save and exit the file.

Use the S3 policy file to modify the bucket policy so your objects are publicly accessible, which is a requirement for S3 static websites:

cd
aws s3api put-bucket-policy --bucket <UNIQUE_BUCKET_NAME> --policy file://policy_s3.json
Create a Basic index.html Page and Upload File to S3 Website Bucket
Create a basic HTML page:

echo "<html><center><h1>My Static Website on S3</h1></center></html>" > index.html
Upload the index.html file to your S3 website bucket:

aws s3 cp index.html s3://<UNIQUE_BUCKET_NAME>
Verify Your S3 Static Website Is Working
Enter the S3 website URL for your bucket in the browser to ensure it's working.

You can also test from the terminal using the curl command:

curl http://<UNIQUE_BUCKET_NAME>.s3-website.us-east-1.amazonaws.com
Conclusion


policy.json


        "Version": "2012-10-17",
        "Statement": [
                {
                        "Effect": "Allow",
                        "Action": "s3:GetObject",
                        "Principal": "*",
                        "Resource": "arn:aws:s3:::bijitwebpage1/*"
                }
        ]
}
p




Amazon S3 website endpoints do not support HTTPS. If you want to use HTTPS, you can use Amazon CloudFront to serve a static website hosted on Amazon S3. For more information, see How do I use CloudFront to serve HTTPS requests for my Amazon S3 bucket? To use HTTPS with a custom domain, see Configuring a static website using a custom domain registered with Route 53.![image](https://user-images.githubusercontent.com/127091823/232506025-08b8ba24-d167-4d1d-99ce-5d47f256f6bc.png)

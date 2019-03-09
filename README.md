# azure-fd-slack-api
A repo for http://adfpractice-fedor.blogspot.com/2019/03/serverless-api-with-azure-functions.html blog post

Install Node.js packages in root folder:

 npm install azure-storage
 npm install durable-functions
 npm install sync-request


Configure AccountName and AccountKey in local.settings.json, GetTaskId.js/index.js, SaveTask/index.js

Start ngrok:
  ngrok http 7071
  
Update ngrokUrl in PostToSlack/index.js
Update webHookUrl in PostToSlack/index.js
Update fd_url in ApproveTask/index.js and RejectTask/index.js
  
Open folder in VS Code and start the application

Test with a request:

curl -X POST --data '{"taskid":"17511","description":"DiPocket v.1.0.0.1 is about to be deployed to PROD"}'  -H "Content-type: application/json" http://localhost:7071/api/orchestrators/NotifyOnTask

const request = require('sync-request');

module.exports = async function (context, req) {    
   var message =  
   {
        "text": req.description,  
        "attachments": [
          {
            "fallback": "You are unable to approve/reject the task",
            "actions": [
              {
                "type": "button",
                "text": "Approve",
                "url": "http://dc5b4caa.ngrok.io"+"/api/orchestrators/ActionOnToken/approve/"+req.token,
                "style": "primary"
              },
              {
                "type": "button",
                "text": "Reject",
                "url": "http://dc5b4caa.ngrok.io"+"/api/orchestrators/ActionOnToken/reject/"+req.token,
                "style": "danger"
              }
            ]
          }
        ]
      }

    var res = request('POST',  "https://hooks.slack.com/services/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",{        
      json: message
    });
     

};
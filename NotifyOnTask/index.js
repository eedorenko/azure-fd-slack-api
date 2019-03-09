const df = require("durable-functions");

module.exports = df.orchestrator(function*(context){    
    var task = context.df.getInput()
    var token = yield context.df.callActivity("SaveTask",  task.taskid)
    return yield context.df.callActivity("PostToSlack",  {"token": token, "description": task.description} );
}); 
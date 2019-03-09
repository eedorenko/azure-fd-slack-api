const df = require("durable-functions");

module.exports = df.orchestrator(function*(context){    
    var input = context.df.getInput()
    var taskId = yield context.df.callActivity("GetTaskId",  input.token)
    if (input.action == 'approve') {
        yield context.df.callActivity("ApproveTask",  taskId)
    } else if (input.action == 'reject') {
        yield context.df.callActivity("RejectTask",  taskId)
    }
    
});
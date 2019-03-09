const azure = require('azure-storage');
const uuidv1 = require('uuid/v1');

module.exports = async function (context, taskid) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var tableSvc = azure.createTableService('flexdeployappro8396', 'uZwh58nNYeVFmv4uhLELOP6nCi/CZnD6Kzkee7Sv/Azpu1LMPhDg7O9pDdwoInjix7xsVJut1ZbZHfauWzoisQ==');
    var entGen = azure.TableUtilities.entityGenerator;
    var token = uuidv1();
    var tokenEntity = {
        PartitionKey: entGen.String('tokens'),
        RowKey: entGen.String(token),
        TaskId: entGen.String(taskid),
        dueDate: entGen.DateTime(new Date(Date.now() + 24 * 60 * 60 * 1000))
      };
      
      tableSvc.insertEntity('tokens',tokenEntity, function (error, result, response) {
      }); 
    return token;  
};
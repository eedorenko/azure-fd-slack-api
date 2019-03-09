const azure = require('azure-storage');

module.exports = async function (context, token) {
    var tableSvc = azure.createTableService('flexdeployappro8396', 'uZwh58nNYeVFmv4uhLELOP6nCi/CZnD6Kzkee7Sv/Azpu1LMPhDg7O9pDdwoInjix7xsVJut1ZbZHfauWzoisQ==');

    function queryTaskID(token) {
        return new Promise(function (resolve, reject) {
            tableSvc.retrieveEntity('tokens', 'tokens', token, function (error, result, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result)
                }
            });

        });
    }
    var tokenEntity = await queryTaskID(token);
    if (tokenEntity) {
        var dueDate = tokenEntity.dueDate._;
        if (dueDate > Date.now()) {
            return tokenEntity.TaskId._;

        }
    }

};
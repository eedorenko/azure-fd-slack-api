const request = require('sync-request');
const fd_url = 'http://dkrlp01.flexagon:8000';

module.exports = async function (context, taskid) {
    var taskid = taskid;
    var res = request('PUT', fd_url+'/flexdeploy/rest/v1/tasks/approval/reject/'+taskid,{        
         headers: {
      authorization: 'Basic ' + new Buffer('fdadmin' + ':' + 'welcome1', 'ascii').toString('base64')
    }
});

 return res.getBody('utf8')
};

var con = require('./dbConnection.js');
const fs = require('fs');

function invokeQuery(queryStmt, val) {
    // var e = new EventEmitter();
    var queryStmtWithVal = queryStmt;
    var retRows;
    var res1;

    if (!(val instanceof (Object))) {
        // var queryStmtWithVal = queryStmt + '' + val;
        var queryStmtWithVal = '';
        for (var i = 0; i < arguments.length; i++) {
            queryStmtWithVal += arguments[i];
        }
    }
    con.query(queryStmtWithVal, val, function (err, result) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("success");
        }
    });
}

function invokeQueryCallBack(queryStmt, res, callback) {

    con.query(queryStmt, function (err, result) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("success");
            // res.write(result);
            callback(res,result );
            // fs.createReadStream(result).pipe(res);
            // callback(res);
        }
    });
}


module.exports = {
    'invokeQuery': invokeQuery,
    'invokeQueryCallBack': invokeQueryCallBack
}
var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var _ = require('lodash');

var queryBuilder = (function () {


    function getUserValid(callback, user, pass) {
        con.then((db) => {
            db.collection('users').findOne({ 'email': user, 'pass': pass }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    return {

        getUserValid,

    }


}
)();
module.exports = queryBuilder;

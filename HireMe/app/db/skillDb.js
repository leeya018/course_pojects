var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var _ = require('lodash');

var queryBuilder = (function () {

    function getAllSkills(callback) {
        con.then((db) => {
            db.collection('skills').find().toArray(function (err, result) {
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
        getAllSkills



    }


}
)();
module.exports = queryBuilder;

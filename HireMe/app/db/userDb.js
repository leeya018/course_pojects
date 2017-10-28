var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var _ = require('lodash');

var queryBuilder = (function () {
    function getUserDetailsQuery(callback, userId) {
        con.then((db) => {
            db.collection('users').findOne({ '_id': ObjectId(userId) }, function (err, result) {
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

    //update the user by user Id
    function updateUserDetailsQuery(callback, userData) {
        con.then((db) => {
            db.collection('users').update({ '_id': ObjectId(userData['_id']) }, { 'firstName': userData.firstName, 'email': userData.email, 'description': userData.description, 'locationName': userData.locationName, 'lon': userData.lon, 'lat': userData.lat, 'userName': userData.userName, 'pass': userData.pass, 'skills': userData.skills }, function (err, result) {
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

    function registerQuery(callback, userData) {
        con.then((db) => {
            db.collection('users').find({ $or: [{ 'email': userData.email }, { 'userName': userData.userName }] }).toArray(function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    if (result.length > 0) {
                        callback('this user is allready exists')
                    } else {
                        registerUer(db, userData, callback)

                    }
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    function getUserApplicantQuery(callback, userIds) {
        userIds = convertUserIds(userIds)
        con.then((db) => {
            db.collection('users').find({ '_id': { $in: userIds } }).toArray(function (err, result) {
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
    function registerUer(db, userData, callback) {
        db.collection('users').insert({ 'firstName': userData.firstName, 'email': userData.email, 'description': userData.description, 'locationName': userData.locationName, 'lon': userData.lon, 'lat': userData.lat, 'userName': userData.userName, 'pass': userData.pass, 'skills': userData.skills, agent: [] }, function (err, result) {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        }).catch((err) => {
            console.log(err)
        })
    }




















    function getAllLocations() {
        //googe API

    }

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








    function convertUserIds(userIds) {
        var temp = []
        for (let userId of userIds) {
            temp.push(ObjectId(userId))
        }
        return temp;
    }





    return {
        getUserDetailsQuery,
        updateUserDetailsQuery,
        registerQuery,
        getAllLocations,
        getAllSkills,
        getUserApplicantQuery,





    }


}
)();
module.exports = queryBuilder;

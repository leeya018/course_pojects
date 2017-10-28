var con = require('../db/dbConnection.js');
var userDb = require('../db/userDb.js');
var modelHelper = require('./modelHelper.js');


var userModel = (function (con) {


    function getUserDetails(callback, userId) {
        userDb.getUserDetailsQuery(callback, userId);
    }


    function updateDetails(callback, userData) {
        userDb.updateUserDetailsQuery(callback, userData);
    }

    function register(callback, userData) {
        userDb.registerQuery(callback, userData);
    }


    function getUserApplicant(callback, userIds) {
        // userIds  = convertUserIds(userIds)//objectId
        userDb.getUserApplicantQuery(callback, userIds);
    }





    return {
        getUserDetails,
        updateDetails,
        register,
        getUserApplicant
    }
})(con);


module.exports = userModel;
var con = require('../db/dbConnection.js');
var loginDb = require('../db/loginDb.js');
var modelHelper = require('./modelHelper.js');


var loginModel = (function (con) {


    function checkUserValid(callback,user, pass) {

      loginDb.getUserValid(callback,user, pass)
     
    }


    return {
        checkUserValid
    }
})(con);


module.exports = loginModel;
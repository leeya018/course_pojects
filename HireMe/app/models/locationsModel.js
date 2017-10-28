var con = require('../db/dbConnection.js');
var locationDb = require('../db/locationDb.js');
var modelHelper = require('./modelHelper.js');


var locationModel = (function (con) {

    function getLocations(user, pass) {



    }

    return {
        getLocations
    }
})(con);


module.exports = locationModel;
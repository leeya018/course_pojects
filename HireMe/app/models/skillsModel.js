var con = require('../db/dbConnection.js');
var skillDb = require('../db/skillDb.js');
var modelHelper = require('./modelHelper.js');


var skillsModel = (function (con) {


    function getskills(callback) {
        skillDb.getAllSkills(callback);
    }


    




    return {
        getskills
        
    }
})(con);


module.exports = skillsModel;
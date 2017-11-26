var express = require('express');
var router = express.Router();

// var createSecretToken = require('./controllers/createToken.controller.js')
var myRecords = require('./controllers/controller.myRecords.js');
var worldRecords = require('./controllers/controller.worldRecords.js');


router.post('/myRecords', myRecords.addMyRecord);
router.get('/myRecords/:name', myRecords.getMyRecord);
router.get('/myRecords/', myRecords.getAllRecords);
router.delete('/myRecords/', myRecords.deleteAllRecords);
router.get('/worldRecords/', worldRecords.getWorldRecords);
router.delete('/worldRecords/', worldRecords.deleteAllRecords);





module.exports = router;

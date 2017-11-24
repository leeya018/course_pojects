var express = require('express');
var router = express.Router();

// var createSecretToken = require('./controllers/createToken.controller.js')
var records = require('./controllers/controller.records.js');

router.post('/myRecords', records.addMyRecord);
router.get('/myRecords/:name', records.getMyRecord);
router.get('/myRecords/', records.getAllRecords);
router.delete('/myRecords/', records.deleteAllRecords);




module.exports = router;

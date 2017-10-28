const path = require('path');
var jobModel = require('../models/jobModel.js');
var userModel = require('../models/userModel.js');

var authMiddleware = require('./authMiddleware.js');
var _ = require('lodash');

var express = require('express');
var router = express.Router();



router.get('/jobs', authMiddleware, function (req, res) {
var callback = function (result) {
    res.json(result);
  }
  const userId = req.decoded.userId
  var jobs = jobModel.getJobs(userId, 'jobs',callback);
});


////////////////
router.get('/appliedJobs', authMiddleware, function (req, res) {
  var callback   = function callback(result){
    res.json(result)
  }
  const userId = req.decoded.userId;
  var jobs = jobModel.getApplyJobs(userId,callback)

});

router.post('/jobs/addApplicant', authMiddleware, function (req, res) {
  var callback = function (result) {
    res.json(result)
  }
  const jobId = req.body.jobId
  const userId = req.decoded.userId
  jobModel.applyJob(callback, userId, jobId)

});



router.get('/jobsBySkills', authMiddleware, function (req, res) {
  const chosenSkills = req.query.chosenSkills
  const userId = req.decoded.userId

  var chosenSkillsArr = JSON.parse(chosenSkills)
  // var chosenSkillsArr = [1]
  var callback = function (result) {
    res.json(result);
  }
  jobModel.getJobsByChosenSkills(callback, chosenSkillsArr, userId)

})


// authMiddleware
router.get('/jobs/myJobs', authMiddleware, function (req, res) {
var callback = function (result) {
    res.json(result)
  }
  const userId = req.decoded.userId

  var jobs = jobModel.getJobs(userId, 'myJobs',callback);
 
});


//agent with timer 

function findMejob() {

  var callback = function (result) {
    res.json(result)
  }
  var jobs = jobModel.findMejob(callback);
}


setInterval(function () {
  findMejob();
}, 100000);
// 86400000


router.get('/jobs/agent', authMiddleware, function (req, res) {
  var callback = function (result) {
    res.json(result)
  }
  var firstTime = req.query.firstTime
  const userId = req.decoded.userId
  var jobs = jobModel.findMejob(callback)


})


router.get('/jobs/showAgentJobs', authMiddleware, function (req, res) {
  const userId = req.decoded.userId
    var callback = function (result) {
    res.json(result)
  }
  jobModel.showAgentJobs(userId,callback);


})


function getJopApplicants(callback, myJobs) {
  userModel.getUserDetails(callback, userId)

}


router.post('/jobs/publishJob', authMiddleware, function (req, res) {
  var callback = function (result) {
    res.json(result.result)
  }
  var pubJob = req.body
  pubJob['pub_id'] = req.decoded.userId
  jobModel.publishJob(callback, pubJob)
})


module.exports = router;



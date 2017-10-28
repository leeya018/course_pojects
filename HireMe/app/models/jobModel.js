var con = require('../db/dbConnection.js');
var jobDb = require('../db/jobDb.js');
var modelHelper = require('./modelHelper.js');




var jobModel = (function (con) {

    function getSkills(callback) {
        jobDb.getSkills(callback)
    }


    function applyJob(callback, userId, jobId) {
        jobDb.updateApplyJobQuery(callback, userId, jobId);
    }


    function getUserJobs(callback, userId) {
        jobDb.getUserJobsQuery(callback, userId)

    }

    function publishJob(callback, pubJob) {
        jobDb.addPubJobQuery(callback, pubJob)
    }

    function getJobId(pubJob) {
        jobDb.getJobIdQuery(callback, pubJob)
    }

    /////





    //this is where i need t change
    function getJobs(userId, type, callback) {
        var querySkills = jobDb.getSkills();
        var queryJobs;
        if (type == 'jobs') {
            queryJobs = jobDb.getJobsQuery(userId);
        } else {
            queryJobs = jobDb.getUserJobsQuery(userId);//this is for myJobs
        }
        Promise.all([querySkills, queryJobs]).
            then(resArr => {
                modelHelper.jobsHlerper(resArr, callback)
            })
    }


    function findMejob(callback) {
        jobDb.findMejob(callback);

    }


    function getJobsByChosenSkills(callback, chosenSkills, userId) {
        jobDb.getJobsByChosenSkillsQuery(callback, chosenSkills, userId);
    }


    function showAgentJobs(userId, callback) {
        var querySkills = jobDb.getSkills();
        var queryJobs = jobDb.showAgentJobsQuery(userId);
        Promise.all([querySkills, queryJobs]).then((resArr) => {
            modelHelper.jobsHlerper(resArr, callback)

        }).catch((err) => {
            console.log(err)
        })


    }



    function getApplyJobs(userId, callback) {
        var querySkills = jobDb.getSkills();
        var queryJobs = jobDb.getApplyJobsQuery(userId);
        Promise.all([querySkills, queryJobs]).then((resArr) => {
            modelHelper.jobsHlerper(resArr, callback)
        }).catch((err) => {
            console.log(err)
        })

    }





    return {
        getJobs,
        applyJob,
        getUserJobs,
        publishJob,
        getSkills,
        findMejob,
        getJobsByChosenSkills,
        showAgentJobs,
        getApplyJobs
    }
})(con);


module.exports = jobModel;
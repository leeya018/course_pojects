var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var _ = require('lodash');

var queryBuilder = (function () {
    //here
    function getJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                if (userId) {
                    db.collection('jobs').find({ 'jobApplicants': { $nin: [ObjectId(userId)] }, 'pub_id': { $ne: ObjectId(userId) } })
                        .toArray(function (err, result) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(result)
                            }
                        })
                } else {
                    getLimJobs(db, reject, resolve)
                }

            })
        })
    }

    function getLimJobs(db, reject, resolve) {
        // db.collection('jobs').find({}).limit(20)

        db.collection('jobs').find({})
            .toArray(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
    }


    function updateApplyJobQuery(callback, userId, jobId) {
        con.then((db) => {
            db.collection('jobs').find({ '_id': ObjectId(jobId), 'jobApplicants': ObjectId(userId) }).toArray(function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    enterApplier(db, callback, result, userId, jobId)
                }
            })
        })
    }

    function enterApplier(db, callback, result1, userId, jobId) {
        if (result1.length === 0) {
            db.collection('jobs').update({ _id: ObjectId(jobId) }, { $push: { jobApplicants: ObjectId(userId) } }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        }
    }

    function getUserJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({ 'pub_id': userId }).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })

        })
    }

    //publish new job 
    function addPubJobQuery(callback, job) {
        // .substring(0, 10)
        var today = new Date().toISOString();
        con.then((db) => {
            db.collection('jobs').insert({ 'jobName': job.jobName, 'pub_date': today, 'pub_id': job.pub_id, 'description': job.description, locationName: job.locationName, 'lon': job.lon, 'lat': job.lat, 'skills': job.skills, 'jobApplicants': [] }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }





    function getJobIdQuery(callback, job) {
        con.then((db) => {
            db.collection('jobs').find({ 'jobName': job.jobName, pub_id: job.pub_id }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }

    function getSkills() {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('skills').find({}).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        })

    }

    function findMejob(callback) {
        con.then((db) => {

            db.collection('users').find({}).toArray(function (err, res) {
                if (err) {
                    return err

                } else {

                    res.forEach(function (user) {
                        console.log(user);

                        findJobForUser(user, db, callback)
                    }, this);
                }
            })
        })

    }
    //userId1 is the one which connct
    function findJobForUser(user, db, callback) {

        var userSkills = user.skills;

        db.collection('users').update({ '_id': user['_id'] }, { $set: { 'agent': [] } }, function (err, res) {
            if (err) {
                return err

            } else {
                findJobFirstTime(userSkills, user['_id'], db, callback)//check all jobs no matter date
            }
        })


    }


    function createNormalArr(userSkills) {
        var temp = []
        for (let userSkill of userSkills) {
            temp.push(userSkill)
        }
        return temp;
    }


    //36

    function contain(job, userSkills, arr) {

        var inter = _.intersection(job.skills, userSkills);
        var flag = _.isEqual(inter, job.skills);
        if (flag) {
            arr.push(job)
        }
    }

    function findJobFirstTime(userSkills, userId, db, callback) {
        userSkills = createNormalArr(userSkills)
        //userSkills is include in 'skills' prop
        db.collection('jobs').find().toArray(function (err, res) {
            if (err) {
                return err
            } else {
                var arr = [];
                var jobs = res
                for (let job of jobs) {
                    contain(job, userSkills, arr)//push to arr
                }
                var idArr = [];
                for (let a of arr) {
                    idArr.push(a['_id'])

                }
                // console.log(idArr)
                db.collection('users').update({ '_id': userId }, { $push: { 'agent': { $each: idArr } } }, function (err, result) {
                    if (err) {
                        callback(err)
                    }
                    else {
                        console.log(result)
                        //     // db.collection('users').find({'_id':userId})                
                    }
                }
                )
            }
        })
    }




    function getJobsByChosenSkillsQuery(callback, chosenSkills, userId) {
        con.then((db) => {
            db.collection('jobs').find({ 'jobApplicants': { $nin: [ObjectId(userId)] }, 'pub_id': { $ne: ObjectId(userId) } })
                .toArray(function (err, result) {
                    if (err) {
                        callback(err)
                    } else {
                        getJobsByChosenSkills(callback, result, chosenSkills)

                    }
                })
        }).catch((err) => {
            console.log(err)
        })
    }


    function getJobsByChosenSkills(callback, jobs, chosenSkills) {
        var tempJobs = []
        for (let job of jobs) {
            if (_.isEqual(_.intersection(job.skills, chosenSkills), chosenSkills)) {
                tempJobs.push(job)
            }

        }
        callback(tempJobs)
    }







    function showAgentJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('users').findOne({ '_id': ObjectId(userId) }, { 'agent': 1 }, function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        //FDSFJDSLJFDSJLK
                        // getJobsByIds(db, callback, result)
                        var jobIds = result.agent
                        // var jobIds = createIdsArr(result.agent)
                        var query = new Promise((resolve, reject) => {
                            db.collection('jobs').find({ '_id': { $in: jobIds } }).toArray(function (err, result) {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(result)
                                }
                            })
                        })
                        query.then((res) => {
                            resolve(res)
                        }).catch((err) => {
                            reject(err)
                        })

                    }
                })
            })

        }).catch((err) => {
            console.log(err)
        })
    }



    function getApplyJobsQuery(userId) {
        return con.then((db) => {
            return new Promise((resolve, reject) => {
                db.collection('jobs').find({ 'jobApplicants': ObjectId(userId) }).toArray(function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })

        }).catch((err) => {
            console.log(err)
        })
    }




    return {
        getSkills,
        findMejob,
        getJobsQuery,
        getUserJobsQuery,
        addPubJobQuery,
        getJobIdQuery,
        updateApplyJobQuery,
        getJobsByChosenSkillsQuery,
        showAgentJobsQuery,
        getApplyJobsQuery


    }


}
)();
module.exports = queryBuilder;

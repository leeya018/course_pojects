var con = require('./dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var _ = require('lodash');

var queryBuilder = (function () {
    //when apply a job I need to rmove it from the agent

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
        // if (user.agent.length === 0) {

        // } else {
        // findJob(userSkills, user['_id'], db, callback)
        // }



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



    // //just look for jobs which is relevan from yesterday
    // function findJob(userSkills, userId, db, callback) {
    //     var yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString();//yesterday
    //     // db.jobs.find({ 'pub_date': { $gte: '2017-09-12T16:47:48.763Z' } })
    //     // db.collection('jobs').find({ 'pub_date': { $gte: yesterday } , 'skills': { $in: userSkills } }, { _id: 1 }).toArray(
    //     userSkills = createNormalArr(userSkills)
    //     db.collection('jobs').find({ 'pub_date': { $gte: yesterday }, 'skills': userSkills }).toArray(
    //         function (err, res) {
    //             if (err) {
    //                 return err
    //             } else {
    //                 // console.log(res)//ids


    //                 //add code to get all jobs id from user Agent===========
    //                 var idArr = [];
    //                 for (let item of res) {
    //                     idArr.push(item['_id'])


    //                 }
    //                 // console.log(idArr)
    //                 db.collection('users').update({ '_id': userId }, { $push: { 'agent': { $each: idArr } } }, function (err, result) {
    //                     if (err) {
    //                         callback(err)
    //                     }
    //                     else {
    //                         console.log(result)
    //                         // db.collection('users').find({'_id':userId})                
    //                     }
    //                 }
    //                 )
    //             }
    //         })
    // }




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




    function getUserValid(callback, user, pass) {
        con.then((db) => {
            db.collection('users').findOne({ 'email': user, 'pass': pass }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
        })
    }

    function getUserDetailsQuery(callback, userId) {
        con.then((db) => {
            db.collection('users').findOne({ '_id': ObjectId(userId) }, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(result)
                }
            })
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
        })
    }

    function registerUer(db, userData, callback) {
        db.collection('users').insert({ 'firstName': userData.firstName, 'email': userData.email, 'description': userData.description, 'locationName': userData.locationName, 'lon': userData.lon, 'lat': userData.lat, 'userName': userData.userName, 'pass': userData.pass, 'skills': userData.skills, agent: [] }, function (err, result) {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        })
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





    function convertUserIds(userIds) {
        var temp = []
        for (let userId of userIds) {
            temp.push(ObjectId(userId))
        }
        return temp;
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
        })


        function getJobsByChosenSkills(callback, jobs, chosenSkills) {
            var tempJobs = []
            for (let job of jobs) {
                if (_.isEqual(_.intersection(job.skills, chosenSkills), chosenSkills)) {
                    tempJobs.push(job)
                }

            }
            callback(tempJobs)
        }


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

        })
    }
    function getAll() {
        return con
            .then(function (db) {
                return Promise.all([getJobs(db), getCompanies(db)]);
            })
            .then(function(result){

            });
    }

    function AddCompaniesToJob(db) {
        return Promise.all([getJobs(db), getCompanies(db)])
            .then(function (data) {

            });
    }


    // function createIdsArr(result.agent){

    // }

    return {
        getSkills,
        findMejob,
        getJobsQuery,
        getUserValid,
        getUserDetailsQuery,
        updateUserDetailsQuery,
        getUserJobsQuery,
        addPubJobQuery,
        getJobIdQuery,
        registerQuery,
        getAllLocations,
        getAllSkills,
        updateApplyJobQuery,
        getUserApplicantQuery,
        getJobsByChosenSkillsQuery,
        showAgentJobsQuery,
        getApplyJobsQuery


    }


}
)();
module.exports = queryBuilder;

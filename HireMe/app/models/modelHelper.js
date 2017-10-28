var modelHelper = (function () {
    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }

    function convertDates(data) {
        for (let d of data) {
            var newDate = convertDate(d['pub_date'])
            d['pub_date'] = newDate;
        }
    }





    function createSkillsObj(skills) {
        var skillsTemp = []
        for (let skill of skills) {
            skillsTemp[`${skill['_id']}`] = skill.skillName;

        }
        return skillsTemp;
    }



    function addSkillName(job, skillsObj) {
        job['skillNames'] = []
        for (let skillId of job.skills) {
            job['skillNames'].push(skillsObj[`${skillId}`])


        }
    }

    function createJobs(skills, jobs) {
        var skillsObj = createSkillsObj(skills)
        for (let job of jobs) {
            console.log(job.jobName)
            // var skillIdsPerJob = _.intersection(job.skills, skillIds)
            addSkillName(job, skillsObj)

        }
        return jobs
    }
    function jobsHlerper(resArr, callback) {
        console.log(resArr[0])
        console.log(resArr[1])
        var dataJobs = createJobs(resArr[0], resArr[1]);
        convertDates(dataJobs);
        callback(dataJobs)
    }
    return {
        jobsHlerper
    }





}
)();
module.exports = modelHelper;
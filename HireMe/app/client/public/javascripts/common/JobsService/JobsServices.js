
(function () {
    'use strict';

    angular
        .module('jobsModule')
        .factory('JobsService', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {};

        service.GetJobs = function (jobPart) {
            var token = localStorage.getItem('token')

            if (jobPart === 'jobs') {
                return $http.get(`/api/jobs?token=${token}`)
            } else {
                return $http.get(`/api/jobs/myJobs?token=${token}`)

            }
        }

        service.applyJob = function (jobId) {

            var token = localStorage.getItem('token')
            var data = { 'jobId': jobId }
            return $http.post(`/api/jobs/addApplicant?token=${token}`, data)


        }


        service.getJobsByChosenSkills = (function (chosenSkills) {
            var token = localStorage.getItem('token')

            return $http.get(`/api/jobsBySkills?token=${token}&chosenSkills=${JSON.stringify(chosenSkills)}`)

        })

        service.findMejob = function () {
            var token = localStorage.getItem('token')
            return $http.get(`api/jobs/agent?token=${token}`)
        }


        service.publishJob = function (job) {
            var token = localStorage.getItem('token')

            return $http.post(`api/jobs/publishJob?token=${token}`, job)
        }

        service.showAgentJobs = function (userId) {
            var token = localStorage.getItem('token')
            return $http.get(`api/jobs/showAgentJobs?token=${token}`)
        }

        service.getApplyJobs = function () {
            var token = localStorage.getItem('token')            
            return $http.get(`api/appliedJobs?token=${token}`)
        }


        return service;


    }
})();
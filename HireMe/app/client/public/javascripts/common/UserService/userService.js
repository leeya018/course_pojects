(function () {
    'use strict';

    angular
        .module('jobsModule')
        .service('userService', Service);

    Service.$inject = ['$http'];
    function Service($http) {

        var service = {};




        service.getApplicant = function (applicantsIds) {
            var token = localStorage.getItem('token')

            return $http.get(`api/users?token=${token}&userIds=${JSON.stringify(applicantsIds)}`)
        };

        service.getUserDetails = function () {
            
            var token = localStorage.getItem('token')
            
            return $http.get(`api/user?token=${token}`)
        };
        service.updateDetails = function (userDetails) {
            var token = localStorage.getItem('token')
            
            //need to pass some how userDetails
            return $http.put(`api/user?${token}`, userDetails)
        }
        service.register = function (userDetails) {
            return $http.post(`api/user`, userDetails)
        }



        return service;

    }
})();
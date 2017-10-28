(function () {
    'use strict';

    angular
        .module('jobsModule')
        .service('skillsService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};

        service.getSkills = (function () {

            return $http.get('/api/skills')

        })



        return service;
    }
})();

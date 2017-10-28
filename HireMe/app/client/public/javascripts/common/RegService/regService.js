(function() {
    'use strict';

    angular
        .module('jobsModule')
        .service('regService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};
        
        service.register = function(firstName,email,description,userName,pass,locations,skills) {

            var data = { firstName,email,description,userName,pass,locations,skills};
            return $http.post('/api/user/register', data).then(
                function(res) {
                    console.log(res);
                    return res
                }).cathch((err)=>{
                    console.log(err)
                    
                })

        }
        return service;

        ////////////////
        function exposedFn() {}
    }
})();
(function () {
    'use strict';

    angular
        .module('jobsModule')
        .factory('loginService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var service = {};

        service.login = function (user, pass) {

            var data = {user,pass};
            return $http.post('/api/login',data)
            

}
        return service;

        ////////////////
        function exposedFn() { }
    }
})();

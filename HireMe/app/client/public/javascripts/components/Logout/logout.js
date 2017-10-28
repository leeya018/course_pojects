(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('logout', {
            // template:'htmlTemplate',
            //templateUrl: 'templateUrl',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$rootScope', '$location'];
    function ControllerController($rootScope, $location) {
        var vm = this;


        localStorage.clear();
        $rootScope.$broadcast('changeLogStatus', '');
        $location.path('/')



    }
})();
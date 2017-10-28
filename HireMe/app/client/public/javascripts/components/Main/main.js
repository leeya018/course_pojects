(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('main', {
            templateUrl: 'javascripts/components/Main/main.html',
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



    }
})();
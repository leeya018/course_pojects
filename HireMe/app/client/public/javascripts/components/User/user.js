(function () {
    'use strict';

    angular
        .module('jobsModule')
        .component('user', {
            templateUrl: 'javascripts/components/User/user.html',
            //templateUrl: 'templateUrl',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                userData: '<',
            },
        });

    ControllerController.$inject = ['$scope'];
    function ControllerController($scope) {
        var vm = this;
        // console.log(vm.userData)


    }
})();
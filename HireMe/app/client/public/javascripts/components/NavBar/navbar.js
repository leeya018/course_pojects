(function () {
    'use strict';

    angular
        .module('jobsModule')
        .component('navBar', {
            // template:'htmlTemplate',
            templateUrl: 'javascripts/components/NavBar/navbar.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$rootScope', '$scope'];
    function ControllerController($rootScope, $scope) {
        var vm = this;

        $scope.showLogin = true
        $scope.showRegister = true
        $scope.showLogout = false

        if (localStorage['userName']) {
            $scope.userName = localStorage['userName'];
            $scope.showLogout = true;
            $scope.showLogin = false
        }






        vm.closeJobs = function () {
            $rootScope.$broadcast('showJobs', false);

        }


        $rootScope.$on('showLoginBtn', (event, data) => {
            $scope.showLogin = data
        })


        $rootScope.$on('saveUser', (event, user) => {
            $scope.userName = user.userName;
            $scope.showLogout = true;
            $scope.showLogin = false

        })


        $rootScope.$on('changeLogStatus', (event, nada) => {

            $scope.showLogout = false;
            $scope.showLogin = true
             $scope.userName = localStorage['userName'];

        })

    }
})();
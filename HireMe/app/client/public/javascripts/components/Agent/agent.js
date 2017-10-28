(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('agent', {
            templateUrl: 'javascripts/components/Agent/agent.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                userId: '<',
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', '$routeParams', 'JobsService','locationService'];
    function ControllerController($scope, $rootScope, $routeParams, JobsService,locationService) {
        var vm = this;

          $rootScope.screen = "agent";

        $rootScope.map = undefined;
        $scope.jobDetailsShow = false

        $scope.$on('jobDetails', (e, data) => {
            vm.jobDetails = data;
            $scope.jobDetailsShow = true
            vm.placeLocation(vm.jobDetails)
        })

        vm.placeLocation = function (jobDetails) {
            var locationData = [jobDetails.locationName, jobDetails.lon, jobDetails.lat]

            locationService.placeLocation(...locationData);
        }
        //this is for all the user need to run once a day
        vm.findMejob = function () {
            var firstTime = localStorage.getItem('firstTime')
            JobsService.findMejob(firstTime)
            localStorage.setItem('firstTime', false)

        }

//how do I do it from the server  - it is not run  for me
        // setTimeout(function () {
        //     vm.findMejob()
        // }, 86400000);

        //get data fro specipic user
        vm.showAgentJobs = function () {
            JobsService.showAgentJobs().then((res) => {
                console.log(res.data)
                $scope.agentJobs = res.data
            }).catch((err) => {
                console.log(err)
            })
        }

    }
})();
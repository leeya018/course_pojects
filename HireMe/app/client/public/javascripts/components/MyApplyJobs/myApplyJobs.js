(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('myApplyJobs', {
            templateUrl: 'javascripts/components/MyApplyJobs/myApplyJobs.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', '$filter', 'JobsService', 'locationService', 'skillsService'];
    function ControllerController($scope, $rootScope, $filter, JobsService, locationService, skillsService) {
        var vm = this;

        $rootScope.screen = "myApplyJobs";


        $rootScope.map = undefined;

        vm.getApplyJobs = function () {
            JobsService.getApplyJobs().then((res) => {
                $scope.jobs = res.data
            }).catch((err) => {
                console.log(err)
            })
        }

        vm.getApplyJobs()

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

    }
})();
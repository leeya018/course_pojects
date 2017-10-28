(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('myJobs', {
            templateUrl: 'javascripts/components/MyJobs/myJobs.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                userId: '<',
            },
        });

    ControllerController.$inject = ['$scope', '$rootScope', '$routeParams', 'JobsService', 'locationService'];
    function ControllerController($scope, $rootScope, $routeParams, JobsService, locationService) {
        var vm = this;

        $rootScope.screen = "myJobs";

        $rootScope.map = undefined;
        $scope.jobDetailsShow = false

        $scope.$on('jobApplicants', (e, data) => {
            $scope.jobApplicants = data;
        })

        $scope.hideBtn = false;

        vm.invokeGetApplicant = function () {
            $scope.hideBtn = true;
            $scope.$broadcast('invokeGetApplicant', true)
        }
        vm.toggleHideBtn = function () {
            $scope.hideBtn = !$scope.hideBtn
        }

        $scope.$on('jobDetails', (e, data) => {
            vm.jobDetails = data;
            $scope.jobDetailsShow = true
            vm.placeLocation(vm.jobDetails)
        })

        vm.placeLocation = function (jobDetails) {
            var locationData = [jobDetails.locationName, jobDetails.lon, jobDetails.lat]

            locationService.placeLocation(...locationData);
        }
        $rootScope.$emit('showApplyBtn1', false);


        JobsService.GetJobs().then((res) => {
            $rootScope.$broadcast('showJobs', false);
            $scope.myJobs = res.data
        }).catch((err) => {
            $scope.updateMsg = err || "something is wrong"
        });







    }
})();
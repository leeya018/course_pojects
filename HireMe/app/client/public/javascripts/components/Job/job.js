(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('job', {

            templateUrl: 'javascripts/components/Job/job.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                job: '<'


            },
        });

    ControllerController.$inject = ['$rootScope', '$scope', 'JobsService', 'userService', 'locationService'];
    function ControllerController($rootScope, $scope, JobsService, userService, locationService) {
        var vm = this;
        vm.skillsShow = false;
        $scope.showJobs = true;
        $scope.showMap = false
        $scope.showApplyBtn = true;
        $scope.logedIn = false
        vm.toggleSkillsShow = function () {
            vm.hideOtherData()
            vm.skillsShow = !vm.skillsShow;
        }


        $scope.appliedSuccess = false

        vm.applyJob = function () {
            vm.hideOtherData()
            JobsService.applyJob(vm.job['_id']).then(
                (res) => {
                    if (res.data.ok === 1) {
                        console.log(res)
                        $scope.showApplyBtn = false;
                        $scope.toggleApplyMsg = true
                        $scope.appliedSuccess = true;
                    }
                }).catch((err)=>{
                    console.log(err)
                    
                })
        }

        $scope.$on('invokeGetApplicant', (e, data) => {
            vm.getApplicant();
        })

        // $scope.$on('invokeApplyJob', (e,data)=>{
        //     vm.applyJob();
        // });



        vm.getApplicant = function () {
            vm.hideOtherData()
            var jobApplicantsIds = vm.job.jobApplicants;//why sometime is undefine??
            if (jobApplicantsIds !== undefined && jobApplicantsIds.length !== 0) {
                userService.getApplicant(jobApplicantsIds).then(
                    (res) => {
                        if (res.data) {
                            console.log(res.data)
                            // $scope.jobApplicants = res.data
                            $scope.$emit('jobApplicants', res.data)

                        }
                    }).catch((err)=>{
                        console.log(err)
                    })

            } else {
                $scope.msgApplicants = "no applicants yet"
            }
            $scope.showApplicantUsers = true

        }


        vm.changeAppStatusToggle = function () {
            $scope.showApplicantUsers = !$scope.showApplicantUsers
        }


        $rootScope.$on('showApplyBtn1', (e, data) => {
            $scope.showApplyBtn2 = data;

        });


        $rootScope.$on('saveUser', (e, user) => {
            $scope.userId = user.id;
            $scope.userName = user.name;
        });


        $scope.checkLogin = function () {
            return localStorage.getItem('token') !== null

        }

        vm.showLocation = function () {
            console.log(vm.job.lon)
            locationService.showLocation(vm.job.locationName, vm.job.lon, vm.job.lat)
        }

        vm.showMap = function () {
            vm.hideOtherData()
            $scope.showMap = !$scope.showMap

        }

        vm.hideOtherData = function () {

            $scope.showMap = false;
            vm.skillsShow = false;
            $scope.toggleApplyMsg = false;
            $scope.showApplicantUsers = false;

        }
        $scope.jobDetailsShow = false

        vm.showDetails = function () {
            $scope.jobDetailsShow = true
        }


        vm.sendData = function () {
            $scope.$emit('jobDetails', vm.job)
        }


        $scope.$on('sendLocation', (e, locationData) => {
            vm.showLocation(locationData)
        })
        vm.checkJobsScreen = function(){
            return $rootScope.screen == 'jobs';
        }

    }
})();
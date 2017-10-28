(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('jobsModule')
        .component('publishJob', {
            templateUrl: 'javascripts/components/PublishJob/publishJob.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$scope', 'JobsService', 'skillsService', 'locationService'];
    function ControllerController($scope, JobsService, skillsService, locationService) {
        var vm = this;
        // $scope.job = { jobName: 'angular developer', description: 'full time job with angular promise tech', pub_id: '', skills: [2, 4], locationName: 'Moldova', lon: 32.321312, lat: 32.432432 }
        vm.publishJob = function () {

            var locationIn = document.getElementById('address')
            $scope.job.locationName = locationIn.value
            vm.convertLocationNameToCords($scope.job.locationName)
                .then((res) => {
                    var locObj = res.data[0]
                    $scope.job.lon = locObj.longitude
                    $scope.job.lat = locObj.latitude
                    $scope.job.skills = $scope.skillsIds || []
                    JobsService.publishJob($scope.job).then((res) => {
                        if (res.data.ok == 1) {
                            $scope.msg = "success"
                        } else {
                            $scope.msg = "there were an error with job publish"
                        }
                    }).catch((err) => {
                        $scope.updateMsg = err || "something is wrong"
                    });
                }).catch((err) => {
                    console.log(err)
                })




        }



        vm.addSkillsToTextArea = function (skills) {
            var areaSkills = document.getElementById('areaSkills')
            areaSkills.value = '';
            $scope.skillsIds = []
            for (let skill of skills) {
                areaSkills.value += skill.skillName + '\n'
                $scope.skillsIds.push(skill['_id'])
            }
        }

        function addSkillIds() {
            var skillIds = [];
            for (let skill of vm.skills) {
                skillIds.push(skill['_id']);
            }
            return skillIds
        }




        vm.getSkills = function () {
            skillsService.getSkills().then((res) => {
                console.log(res.data);
                vm.skills = res.data


            }).catch((err) => {
                console.log(err)
            })
        }


        vm.convertLocationNameToCords = function (locationName) {

            return locationService.convertLocationNameToCords(locationName)

        }

        vm.$onInit = function () {
            locationService.autoComplete();

        };


    }
})();




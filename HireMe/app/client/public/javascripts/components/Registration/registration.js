(function () {
    'use strict';



    angular
        .module('jobsModule')
        .component('registration', {
            templateUrl: 'javascripts/components/Registration/registration.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['$scope', '$location', 'skillsService', 'userService', 'locationService'];
    function ControllerController($scope, $location, skillsService, userService, locationService) {
        // console.log($scope);
        var vm = this;




        vm.checkAllInputs = function () {
            var regINputs = $('#registration input');
            for (let regIn of regINputs) {
                if (regIn.value === '') {
                    return false
                }

            }
            return true
        }


        $scope.user = {}
        $scope.skillsIds = []
        vm.register = function () {
            var inputValid = vm.checkAllInputs()
            if (!inputValid) {
                $scope.registerMsg = 'all inputs must be filed'
                return;//so it will not continue
            }
            var userData = $scope.user

            userData.skills = $scope.skillsIds


            var locationIn = document.getElementById('address')
            $scope.user.locationName = locationIn.value
            var userData = $scope.user
            userData.location = vm.convertLocationNameToCords(userData.locationName)
                .then((res) => {
                    var locObj = res.data[0]
                    userData.lon = locObj.longitude
                    userData.lat = locObj.latitude


                    userService.register(userData).then((res) => {
                        if (typeof res.data === 'string') {
                            $scope.registerMsg = 'user or email are allready exist'
                        } else {
                            if (res.data.ok == 1) {
                                $location.path('/login')
                                // $scope.updateMsg = "data udpated!!!"

                            }
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
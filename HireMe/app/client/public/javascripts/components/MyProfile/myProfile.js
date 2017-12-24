(function() {
  'use strict';

  angular.module('jobsModule').component('myProfile', {
    templateUrl: 'javascripts/components/MyProfile/myProfile.html',
    controller: ControllerController,
    controllerAs: 'vm',
    bindings: {
      userId: '<'
    }
  });

  ControllerController.$inject = ['$scope', '$rootScope', 'userService', 'skillsService', 'locationService'];
  function ControllerController($scope, $rootScope, userService, skillsService, locationService) {
    var vm = this;
    vm.skills = [];

    $scope.updateMsg = '';
    $rootScope.$broadcast('showJobs', false);
    userService
      .getUserDetails()
      .then(res => {
        $scope.user = res.data;
      })
      .catch(err => {
        return err;
      });

    vm.updateDetails = function() {
      var locationIn = document.getElementById('address');
      $scope.user.locationName = locationIn.value;
      var userData = $scope.user;
      userData.location = vm
        .convertLocationNameToCords(userData.locationName)
        .then(res => {
          var locObj = res.data[0];
          userData.lon = locObj.longitude;
          userData.lat = locObj.latitude;

          // userData.userId = userId
          userData.skills = $scope.skillsIds;
          userService
            .updateDetails(userData)
            .then(res => {
              if (res.data.ok == 1) {
                $scope.updateMsg = 'data udpated!!!';
              }
            })
            .catch(err => {
              $scope.updateMsg = err || 'something is wrong';
            });
        })
        .catch(err => {
          console.log(err);
        });
    };

    function addSkillIds() {
      var skillIds = [];
      for (let skill of vm.skills) {
        skillIds.push(skill['_id']);
      }
      return skillIds;
    }

    vm.getSkills = function() {
      skillsService
        .getSkills()
        .then(res => {
          console.log(res.data);
          vm.skills = res.data;
          //fds
          var userSkillsTemp = findUserSkills(vm.skills, $scope.user.skills);
          vm.addSkillsToTextArea(userSkillsTemp);
        })
        .catch(err => {
          console.log(err);
        });
    };

    function findUserSkills(skills, userSkillsIds) {
      var userSkillsTemp = [];
      for (let skill of skills) {
        for (let userSkillsId of userSkillsIds) {
          if (skill['_id'] === userSkillsId) {
            userSkillsTemp.push(skill);
          }
        }
      }
      return userSkillsTemp;
    }

    vm.addSkillsToTextArea = function(skills) {
      var areaSkills = document.getElementById('areaSkills');
      areaSkills.value = '';
      $scope.skillsIds = [];
      for (let skill of skills) {
        areaSkills.value += skill.skillName + '\n';
        $scope.skillsIds.push(skill['_id']);
      }
    };

    vm.convertLocationNameToCords = function(locationName) {
      return locationService.convertLocationNameToCords(locationName);
    };

    vm.$onInit = function() {
      locationService.autoComplete();
    };
  }
})();

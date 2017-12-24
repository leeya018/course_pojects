(function() {
  'use strict';

  angular.module('jobsModule').component('jobs', {
    templateUrl: 'javascripts/components/Jobs/jobs.html',
    controller: ControllerController,
    controllerAs: 'vm',
    bindings: {}
  });

  ControllerController.$inject = [
    '$scope',
    '$rootScope',
    '$filter',
    'userService',
    'JobsService',
    'locationService',
    'skillsService'
  ];
  function ControllerController($scope, $rootScope, $filter, userService, JobsService, locationService, skillsService) {
    var vm = this;

    $rootScope.screen = 'jobs';

    vm.start = 0;
    $scope.limJobs = 0;
    $scope.prevOption = false;
    $scope.nextOption = false;
    $scope.showJobs = true;

    $rootScope.map = undefined;

    $rootScope.$emit('showApplyBtn1', true);

    vm.prevJobs = function() {
      if (vm.start - 4 >= 0) {
        vm.start -= 4;
        $scope.prevOption = false;
        $scope.nextOption = false;
      } else {
        $scope.prevOption = true;
      }
      vm.initFiveJobs();
    };

    vm.nextJobs = function() {
      if (vm.start + 4 < $scope.limJobs) {
        vm.start += 4;
        $scope.nextOption = false;
        $scope.prevOption = false;
      } else {
        $scope.nextOption = true;
      }
      vm.initFiveJobs();
    };

    vm.GetJobs = function() {
      JobsService.GetJobs('jobs')
        .then(response => {
          $scope.jobs = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    vm.GetJobs();

    vm.getJobsByChosenSkills = function(skills) {
      var chosenSkills = $scope.skillsIds || [];
      if (skills) {
        chosenSkills = [];
      }
      JobsService.getJobsByChosenSkills(chosenSkills)
        .then(res => {
          console.log(res);
          $scope.jobs = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    };
    vm.initFiveJobs = function() {
      var stop = vm.start + 4;
      var i = vm.start;
      $scope.fiveJobs = [];
      while (i < stop) {
        $scope.fiveJobs.push($scope.jobs[i++]);
      }
    };

    vm.getSkills = function() {
      skillsService
        .getSkills()
        .then(res => {
          console.log(res.data);
          vm.skills = res.data;
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

    $rootScope.$on('showJobs', (e, data) => {
      $scope.showJobs = data;
    });

    $scope.jobDetailsShow = false;

    $scope.$on('jobDetails', (e, data) => {
      vm.jobDetails = data;
      $scope.jobDetailsShow = true;
      vm.placeLocation(vm.jobDetails);
    });
    vm.resetFilters = function() {
      vm.getJobsByChosenSkills(true); ///reset skills filter results
      if ($scope.searchText !== undefined) {
        $scope.searchText.jobName = '';
        $scope.searchText.locationName = '';
        $scope.limDist = undefined;
      }
    };

    vm.placeLocation = function(jobDetails) {
      var locationData = [jobDetails.locationName, jobDetails.lon, jobDetails.lat];

      locationService.placeLocation(...locationData);
    };

    vm.getUserDetails = function() {
      return userService
        .getUserDetails()
        .then(res => {
          var user = res.data;
          $scope.userLoction = { lat: user.lat, lng: user.lon };
        })
        .catch(err => {
          console.log(err);
        });
    };

    $scope.distFilter = function(limDist) {
      var userCord = { lat: 34.6655101, lng: 31.89183969999998 };

      return function(job) {
        if (!limDist) {
          return true;
        }
        var jobCord = { lat: job.lat, lng: job.lon };
        var d = locationService.getDistance(userCord, jobCord);
        if (d < limDist) {
          return true;
        }
        return false;
      };
    };

    vm.nameFilterClick = function() {
      $scope.filterName = 'nameFilter';
      document.getElementById('jobsData').style.top = '15em';
    };

    vm.closeFilter = function() {
      $scope.filterName = 'closeFilter';
      document.getElementById('jobsData').style.top = '10em';
    };
    vm.locationFilterClick = function() {
      $scope.filterName = 'locationFilter';
      document.getElementById('jobsData').style.top = '15em';
    };

    vm.skillFilterClick = function() {
      $scope.filterName = 'skillsFilter';
      document.getElementById('jobsData').style.top = '24em';
    };

    vm.distanceFilterClick = function() {
      $scope.filterName = 'distanceFilter';
      document.getElementById('jobsData').style.top = '15em';
    };
  }
})();

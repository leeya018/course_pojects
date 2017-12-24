(function() {
  'use strict';

  angular.module('jobsModule').component('map', {
    templateUrl: 'javascripts/components/Map/map.html',
    controller: ControllerController,
    controllerAs: 'vm',
    bindings: {
      jobs: '<'
    }
  });

  ControllerController.$inject = ['$rootScope', '$scope'];
  function ControllerController($rootScope, $scope) {
    var vm = this;
  }
})();

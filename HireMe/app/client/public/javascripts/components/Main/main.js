(function() {
  'use strict';

  angular.module('jobsModule').component('main', {
    templateUrl: 'javascripts/components/Main/main.html',
    controller: ControllerController,
    controllerAs: 'vm',
    bindings: {
      Binding: '='
    }
  });

  ControllerController.$inject = ['$rootScope', '$location'];
  function ControllerController($rootScope, $location) {
    var vm = this;
  }
})();

(function() {
  'use strict';

  angular.module('jobsModule').component('login', {
    templateUrl: 'javascripts/components/Login/login.html',
    controller: ControllerController,
    controllerAs: 'vm',
    bindings: {
      Binding: '='
    }
  });

  ControllerController.$inject = ['loginService', '$location', '$rootScope', '$scope'];
  function ControllerController(loginService, $location, $rootScope, $scope) {
    var vm = this;

    vm.logedIn = false;

    vm.login = function(user, pass) {
      $scope.errMsg = '';
      loginService
        .login(user, pass)
        .then(function(res) {
          if (res.data.success == true) {
            vm.logedIn = true;
            $rootScope.$broadcast('showJobs', true);
            $rootScope.$emit('showLoginBtn', false);
            $rootScope.$broadcast('saveUser', res.data.user);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id);
            localStorage.setItem('userName', res.data.user.userName);

            console.log(localStorage);
            $location.path('/');
          } else {
            $scope.errMsg = 'user or pass are wrong';
          }
        })
        .catch(err => {
          $scope.errMsg = 'there is a server error';
          console.log(err);
        });
    };
  }
})();

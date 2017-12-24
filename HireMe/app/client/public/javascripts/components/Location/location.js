(function () {
    'use strict';


    angular
        .module('jobsModule')
        .component('location', {
            templateUrl: 'javascripts/components/Location/location.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = [];
    function ControllerController() {
        var vm = this;
      


    }
})();
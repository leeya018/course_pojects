(function() {
    'use strict';


    angular
        .module('jobsModule')
        .component('skills', {
            templateUrl:'javascripts/components/skills/skills.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                skills: '<',
            },
        });

    ControllerController.$inject = [];
    function ControllerController() {
        var vm = this;
        

    }
})();


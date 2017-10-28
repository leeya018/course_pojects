(function () {
    'use strict';

    angular
        .module('jobsModule')
        .component('map', {
            templateUrl: 'javascripts/components/Map/map.html',
            controller: ControllerController,
            controllerAs: 'vm',
            bindings: {
                jobs: '<'
            },
        });

    ControllerController.$inject = ['$rootScope', '$scope'];
    function ControllerController($rootScope, $scope) {
        var vm = this;
    


    }




}


)();


    // var loc;
            // var locations = []
            // for (let job of jobs) {
            //     loc = {
            //         title: job.locationName,
            //         lon: job.lon,
            //         lat: job.lat
            //     }
            //     locations.push(loc)

            // }


            // var markers = [];
            // var marker;
            // for (let location of locations) {
            //     marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(location.lon, location.lat),
            //         map: map,
            //         title: location.locationName
            //     });
            //     markers.push(marker);



(function () {
    'use strict';

    angular
        .module('jobsModule')
        .service('locationService', Service);

    Service.$inject = ['$rootScope', '$http'];
    function Service($rootScope, $http) {
        var service = {};
        service.marker = null
        service.geocoder = null;

        // service.getLocation = function () {

        //     return $http.get('/api/locations').then((response) => {
        //         service.locations = response.data;
        //         // return response;

        //     }).catch((err) => {
        //         console.log('error with req');

        //     })
        // }


        service.placeLocation = function (locationName, lon, lat) {
            if (!$rootScope.map) {
                service.initMap()
            }
            var map = $rootScope.map;
            if (service.marker !== null) {
                service.marker.setMap(null)
            }



            service.marker = new google.maps.Marker({
                position: new google.maps.LatLng(lon, lat),
                map: map,
                title: locationName
            });


            console.log($rootScope.map)
            $rootScope.map.setZoom(10);
            $rootScope.map.setCenter({ lat: lon, lng: lat });

        }




        service.convertLocationNameToCords = function (locationName) {

            var token = localStorage.getItem('token')
            return $http.get(`api/locations?locationName=${locationName}&token=${token}`)




        }




        service.initMap = function () {

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: new google.maps.LatLng(31.771959, 34.217018)
            });

            google.maps.event.trigger(map, 'resize');


            // }
            $rootScope.map = map

        }

        function rad(x) {
            return x * Math.PI / 180;
        };

        service.getDistance = function (p1, p2) {
            var R = 6378137; // Earth’s mean radius in meter
            var dLat = rad(p2.lat - p1.lat);
            var dLong = rad(p2.lng - p1.lng);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return (d / 1000); //devide 1000 - so its in KM
        };

        service.autoComplete = function () {

            let autocompleteFormField = document.getElementById('address');
            console.log(autocompleteFormField);
            let autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
                types: ['(cities)'],
            });
            google.maps.event.addListener(autocomplete, 'place_changed', () => {

            })

        }

        return service;
    }





})();

















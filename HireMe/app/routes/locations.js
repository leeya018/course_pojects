const path = require('path');
var locationsModel = require('../models/locationsModel.js');
var express = require('express');
var router = express.Router();
var NodeGeocoder = require('node-geocoder');


// router.get('/locations', function (req, res) {
//     const { user, pass } = req.body
//     locationsModel.getLocations(user, pass)
//         .then((result) => {
//             console.log(result)
//             res.json(result);
//         },
//         (err) => {
//             console.log(err);
//             return err;
//         })
// })
function initConverterCityCords(locationName, callback) {
    var options = {
        provider: 'google',
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyAglnzFHZqT89vG8DFUiLodvQ5PvUM7lOY', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
    };

    geocoder = NodeGeocoder(options);
    geocoder.geocode(locationName)
        .then(function (res) {
            callback(res)
        })
        .catch(function (err) {
           callback(err)
        });
}


router.get('/locations', function (req, res) {
    var locationName = req.query.locationName;
    var callback = function (result) {
        console.log(result);
        res.json(result)
    }
    initConverterCityCords(locationName, callback)

})








module.exports = router;

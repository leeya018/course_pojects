let mongoose = require('mongoose');
var db = require('../dbConnection.js');

let foodSchema = new mongoose.Schema({
  name: String,
  calories:Number
});

let Food = mongoose.model('Food', foodSchema);

module.exports = Food;

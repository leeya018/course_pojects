let mongoose = require('mongoose');
var db = require('../dbConnection.js');

let animalSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "animal",
    require:true
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Food' 
  },
  legs: Number,
  speed: Number
});

let Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;

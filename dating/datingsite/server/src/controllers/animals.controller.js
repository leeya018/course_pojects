var db = require('../db/dbConnection.js');
let mongoose = require('mongoose');
var Food = require('../db/models/food.model.js');
var Animal = require('../db/models/animal.model.js');
var { Story, Person, Sex } = require('../db/models/person.story.model.js');
let { Schema } = mongoose;
let { ObjectId } = Schema.Types;

let getStories = async (req, res, next) => {
  Story.find({})
    .populate('_creator', 'name')
    .populate('fans')
    .exec((err, story) => {
      if (err) throw err;
      res.json(story);
    });
};

let getSex = async (req, res, next) => {
  Sex.find({})
    .populate('story')
    .exec((err, sex) => {
      if (err) throw err;
      res.json(sex);
    });
};

//this example for 3 levels deep populate from sex collection to stroy to person collection
let getSexById = async (req, res, next) => {
  let _id = req.params.id;
  Sex.findOne({ _id })
    .populate({
      model: 'Story',
      path: 'story',
      populate: [
        {
          model: 'Person',
          path:'_creator',
        },
        {
          model: 'Person',
          path:'fans',
        },
      ]
    })
    .exec((err, sex) => {
      if (err) throw err;

      res.json(sex);
    });
};

let addSex = async (req, res, next) => {
  let newSex = new Sex(req.body);
  newSex.save((err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

let getAnimals = async (req, res, next) => {
  Animal.findOne({ name: 'visvusi' })
    .populate('food')
    .exec((err, animal) => {
      if (err) throw err;
      console.log(animal.food);
      res.json(animal);
    });
};

let animals = { getAnimals, getStories, addSex, getSex, getSexById };

module.exports = animals;

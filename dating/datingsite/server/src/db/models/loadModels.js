let mongoose = require('mongoose');
var db = require('../dbConnection.js');


let { Schema} = mongoose

var PersonSchema = new Schema({
name    : String,
age     : Number,
stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var StorySchema = new Schema({
_creator : { type: Schema.Types.ObjectId, ref: 'Person' },
title    : String,
fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story  = mongoose.model('Story', StorySchema);
var Person = mongoose.model('Person', PersonSchema);


var aaron = new Person({ name: 'Aaron', age: 100 });

aaron.save(function (err) {
  if (err) return handleError(err);
  
  var story1 = new Story({
    title: "Once upon a timex.",
    _creator: aaron._id    // assign an ObjectId
  });
  
  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
    console.log("finish save")
  });
})

// let tiger = new Animal({
//   name:"visvusi",
//   legs: 4,
//   food:"5a53b145e5d51e0a8cf1c6ea"
// })
// let save = tiger.save((err) => {
//   if(err) throw err
//   console.log("TIGER IS SAVED")
// })








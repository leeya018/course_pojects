let mongoose = require('mongoose');
var db = require('../dbConnection.js');
let { Schema } = mongoose;
let { ObjectId } = Schema.Types

var PersonSchema = new Schema({
  name: String,
  age: Number,
  stories: [{ type: ObjectId, ref: 'Story' }]
});

var StorySchema = new Schema({
  _creator: { type: ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: ObjectId, ref: 'Person' }]
});
var SexSchema = new Schema({
  fetish: String,
  story: { type: ObjectId, ref: 'Story' },
  location:Number
});

var Story = mongoose.model('Story', StorySchema);
var Person = mongoose.model('Person', PersonSchema);

var Sex = mongoose.model('Sex', SexSchema);

let PSX = { Sex, Story, Person };

module.exports = PSX;

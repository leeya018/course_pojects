let mongoose = require('mongoose');
var db = require('../dbConnection.js');

var authorSchema1 = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: String
  },
  biography: String,
  twitter: {
    type: String,
    validate: {
      validator: function(text) {
        return text.indexOf('https://twitter.com/') === 0;
      },
      message: 'Twitter handle must start with https://twitter.com/'
    }
  },
  facebook: {
    type: String,
    validate: {
      validator: function(text) {
        return text.indexOf('https://www.facebook.com/') === 0;
      },
      message: 'Facebook must start with https://www.facebook.com/'
    }
  },
  linkedin: {
    type: String,
    validate: {
      validator: function(text) {
        return text.indexOf('https://www.linkedin.com/') === 0;
      },
      message: 'LinkedIn must start with https://www.linkedin.com/'
    }
  },
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
});

var Author1 = mongoose.model('Author1', authorSchema1);

// var jamieAuthor = new Author1({
//   _id: new mongoose.Types.ObjectId(),
//   name: {
//     firstName: 'Jamie',
//     lastName: 'Munro'
//   },
//   biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
//   twitter: 'https://twitter.com/endyourif',
//   facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
// });

// jamieAuthor.save(function(err) {
//   if (err) throw err;

//   console.log('Author successfully saved.');
// });

module.exports = Author1;

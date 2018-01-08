let mongoose = require('mongoose');
var db = require('../dbConnection.js');



var bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  summary: String,
  isbn: String,
  thumbnail: Buffer,
  author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Author'
  },
  ratings: [
      {
          summary: String,
          detail: String,
          numberOfStars: Number,
          created: { 
              type: Date,
              default: Date.now
          }
      }
  ],
  created: { 
      type: Date,
      default: Date.now
  }
});

let Book = mongoose.model('Book', bookSchema)


module.exports = Book
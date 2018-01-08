
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/dating';

var con = (() => {
  return mongoose.connect(url).connection
})();

module.exports = con;



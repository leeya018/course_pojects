var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/books';

var con = (function() {
  return new Promise((resolve, reject) => {
    return MongoClient.connect(url, function(err, db) {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  }).catch(err => {
    console.log(err);
  });
})();

module.exports = con;

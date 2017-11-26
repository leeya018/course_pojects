var con = require('./dbConnection.js');
var exportHomes1 = require('./homesDB.js');
var exportUsers1 = require('./usersDB.js');

let table = (async con => {
  let db = await con;
  let homesData = await db
    .collection('homes')
    .find({})
    .toArray();

  let homes = await homesData;

  if (homes.length === 0) {
    let a = await exportHomes1(db);
    let usersData = await db
      .collection('users')
      .find({})
      .toArray();

    let users = await usersData;

    if (users.length === 0) {
      exportUsers1(db);
    }
  }
})(con);

module.exports = table;

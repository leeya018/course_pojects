var con = require('../db/dbConnection.js');

const compare = (timeA, timeB) => {
  if (timeA.minutes < timeB.minutes) {
    return 1;
  } else if (timeA.minutes > timeB.minutes) {
    return -1;
  } else {
    if (timeA.seconds > timeB.seconds) {
      return 1;
    } else if (timeA.seconds < timeB.seconds) {
      return -1;
    } else {
      return 0;
    }
  }
};



let deleteAllRecords = async (req, res, next) => {
  try {
    let db = await con;
    let response = await db.collection('worldRecords').deleteMany({});
    let allRecords = await response;
    res.json({ status: 'delete data' });
  } catch (e) {
    console.log(e, 'server');
  }
};

let getWorldRecords = async (req, res, next) => {
  try {
    let db = await con;
    let response = await db
      .collection('worldRecords')
      .find()
      .toArray();
    let WorldRecords = await response;
    res.json(WorldRecords);
  } catch (e) {
    console.log(e, 'server');
  }
};


let worldRecords = { getWorldRecords ,deleteAllRecords};
module.exports = worldRecords;

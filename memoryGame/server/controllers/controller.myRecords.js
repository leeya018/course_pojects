var con = require('../db/dbConnection.js');

const myRecordsTab = 'myRecords';
const worldRecordsTab = 'worldRecords';

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

let updateTableRecs = async (db, data, tableName) => {
  let { name, level, category, score, time, countryCode } = data;

  let response;
  if (tableName === worldRecordsTab) {
    response = await db.collection(tableName).findOne({  level: level, countryCode: countryCode });
  } else {
    response = await db.collection(tableName).findOne({ name: name, level: level });
  }
  let similarRec = await response;
  let status = false;
  if (similarRec) {
    if (compare(time, similarRec.time) === -1) {
      let response1 = await db.collection(tableName).deleteOne({ _id: similarRec['_id'] });
      let response = await db.collection(tableName).insert(data);
      let meRecs = await response;
      status = true;
    }
  } else {
    let response2 = await db.collection(tableName).insert(data);
    let meRecs2 = await response2;
    status = true;
  }
  return status;
};

let addMyRecord = async (req, res, next) => {
  try {
    let { name, level, category, score, time } = req.body;

    let db = await con;
    let myStatus = await updateTableRecs(db, req.body, myRecordsTab);
    let worldStatus = await updateTableRecs(db, req.body, worldRecordsTab);
    let data = myStatus ? req.body : {};

    if (worldStatus) {
      data.worldRecord = true;
    }

    res.json(data);
  } catch (e) {
    console.log(e, 'server');
  }
};

let getMyRecord = async (req, res, next) => {
  try {
    let { name } = req.params;
    console.log('getMyRecord', name);
    let db = await con;
    let response = await db
      .collection(myRecordsTab)
      .find({ name: name })
      .toArray();
    let myRecs = await response;
    res.json(myRecs);
  } catch (e) {
    console.log(e, 'server');
  }
};

let getAllRecords = async (req, res, next) => {
  try {
    let db = await con;
    let response = await db
      .collection(myRecordsTab)
      .find()
      .toArray();
    let allRecords = await response;
    res.json(allRecords);
  } catch (e) {
    console.log(e, 'server');
  }
};

let deleteAllRecords = async (req, res, next) => {
  try {
    let db = await con;
    let response = await db.collection(myRecordsTab).deleteMany({});
    let allRecords = await response;
    res.json({ status: 'delete data' });
  } catch (e) {
    console.log(e, 'server');
  }
};
let myRecords = { getMyRecord, addMyRecord, getAllRecords, deleteAllRecords };

module.exports = myRecords;

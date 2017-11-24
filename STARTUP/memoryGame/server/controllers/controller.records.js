var con = require('../db/dbConnection.js');

let addMyRecord1 = async (req, res, next) => {
  try {
    console.log('add my recs');
    let db = await con;
    let response = await db.collection('myRecords').insert(req.body);
    let myRecords = await response;
    res.json(req.body);
  } catch (e) {
    console.log(e, 'server');
  }
};

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

let addMyRecord = async (req, res, next) => {
  try {
    let { name, level, category, score, time } = req.body;

    let db = await con;
    let response = await db.collection('myRecords').findOne({ name: name, level: level });
    let similarRec = await response;
    let status=false
    if (similarRec) {
      if (compare(time, similarRec.time) === -1) {
        let response1 = await db.collection('myRecords').deleteOne({ _id: similarRec['_id'] });
        let response = await db.collection('myRecords').insert(req.body);
        let myRecords = await response;
        status=true
      }
    } else {
      let response2 = await db.collection('myRecords').insert(req.body);
      let myRecords2 = await response2;
      status=true      
    }
    let data = (status)?req.body:{}
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
      .collection('myRecords')
      .find({ name: name })
      .toArray();
    let myRecords = await response;
    res.json(myRecords);
  } catch (e) {
    console.log(e, 'server');
  }
};

let getAllRecords = async (req, res, next) => {
  try {
    let db = await con;
    let response = await db
      .collection('myRecords')
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
    let response = await db
      .collection('myRecords')
      .deleteMany({})
    let allRecords = await response;
    res.json({status:"delete data"});
  } catch (e) {
    console.log(e, 'server');
  }
};



let records = { getMyRecord, addMyRecord, getAllRecords,deleteAllRecords };

module.exports = records;

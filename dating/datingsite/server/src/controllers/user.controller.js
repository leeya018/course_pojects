var db = require('../db/dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
let User = require("../db/models/user.model.js")
let mongoose = require('mongoose');


let getUsers = async (req, res, next) => {
  let con = await db;
  let data = await con.collection('users').find({}).toArray();
  let users = await data;
  res.json(users);
};

let getUsersById = async (req, res, next) => {
  let { id } = req.params;
  let con = await db;
  let data = await con.collection('users').findOne({ '_id': ObjectId(id) });
  let users = await data;
  await 
  res.json(users);
};

let addUser = async (req, res, next) => {
  let user = req.body;
  let con = await db;
  let data = await con.collection('users').insertOne(user);

  User.insert
  res.json(data);
};

let user = { getUsers, addUser,getUsersById };
module.exports = user;

var con = require('../db/dbConnection.js')
var secretConfig = require('./secretConfig.js');
var jwt = require('jsonwebtoken')


var express = require('express');
var router = express.Router();

let createSecretToken = (req, res) => {
    let row = req.user
    console.log('row----', row)
    if (row === null) {
        res.json({ success: 'false', message: 'user or password are wrong' })
    } else {
        var token = jwt.sign({
            auth: 'magic',
            userId: row['_id'],
            username: row.username,//need for email
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
        }, secretConfig.secret);

        res.json({
            success: true,
            message: 'Enjoy your token',
            token: token,
            user: row
        })
    }
}



module.exports = createSecretToken
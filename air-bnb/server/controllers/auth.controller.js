const path = require('path');
var con = require('../db/dbConnection.js')
var jwt = require('jsonwebtoken')
var secretConfig = require('./secretConfig.js');

var authUserToken = (req, res, next)=> {
    console.log('-------------------------------authUserToken-------------------------------')
    var token = req.query.token

    if (token && token!=='null') {
        jwt.verify(token, secretConfig.secret, function (err, decoded) {
            if (err) {
                return res.json({ success: false, massage: 'faild to authenticate token ' })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        req.decoded = {}
        req.decoded.userId = null
          next()
    }
}


module.exports = authUserToken;




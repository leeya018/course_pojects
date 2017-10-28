const path = require('path');
var loginModel = require('../models/loginModel.js');
var secretConfig = require('../models/secretConfig.js');
var jwt = require('jsonwebtoken')
var CryptoJS = require("crypto-js");


var express = require('express');
var router = express.Router();

function createSecretToken(row, res) {
    if (row === null) {
        res.json({ success: 'false', message: 'user or password are wrong' })
    } else {

        //jenerating  a token for the user
        var token = jwt.sign({
            auth: 'magic',
            userId: row['_id'],
            email: row.email,//need for email
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
        }, secretConfig.secret);

        res.json({
            success: true,
            message: 'Enjoy your token',
            token: token,
            user: {
                id: row['_id'],
                userName: row.userName
            }

        })
    }
}



router.post('/login', function (req, res) {
    var callback = function (result) {
        createSecretToken(result, res)

    }
    var { user, pass } = req.body
    // Encrypt 
    // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    // Decrypt 
    // var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    // var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    loginModel.checkUserValid(callback, user, pass)

})



module.exports = router;



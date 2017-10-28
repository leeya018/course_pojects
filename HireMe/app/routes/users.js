var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var userModel = require('../models/userModel.js');
var authMiddleware = require('./authMiddleware.js');

/* GET users listing. */
router.get('/user', authMiddleware, function (req, res, next) {
  var callback = function (result) {
    res.json(result)
  }
  const userId = req.decoded.userId

  userModel.getUserDetails(callback, userId)

});

//for many users that need to connect
router.get('/users', authMiddleware, function (req, res, next) {
  var userIds = req.query.userIds
  userIds = JSON.parse(userIds)
  var callback = function (result) {
    res.json(result)
  }

  userModel.getUserApplicant(callback, userIds)

});
//update
router.put('/user', authMiddleware, function (req, res, next) {
  var userDetails = req.body;
  var callback = function (result) {
    res.json(result.result)
  }
  userModel.updateDetails(callback, userDetails)

});
//register
router.post('/user', authMiddleware, function (req, res, next) {
  var userDetails = req.body;
  var callback = function (result) {

    // if (result.result.ok === 1) {
    //   sendMail(userDetails)
    // }
    if (typeof result === 'string') {
      res.json('user or email are allready exist')
    } else {
      res.json(result.result)
    }
  }
  userModel.register(callback, userDetails)

});

//need to open the option in gmail for unsecure apps
function sendMail(destinationUser) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'leeyahav018@gmail.com',
      pass: '<password to maiil>'
    }
  });

  var mailOptions = {
    from: 'leeyahav018@gmail.com',
    to: destinationUser.email,
    subject: 'Wellcome to HireMe site',
    text: `Thnak you for your registration, your userName is : ${destinationUser.userModel}\n
    youo password is   ${destinationUser.pass}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}









module.exports = router;

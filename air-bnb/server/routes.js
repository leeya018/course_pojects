var express = require('express');
var router = express.Router();


var table = require('./db/dataMongo.js')

var authMiddleware = require('./controllers/auth.controller.js');
var home = require('./controllers/home.controller.js')
var login = require('./controllers/login.controller.js')
var addUser = require('./controllers/user.controller.js')
var createSecretToken = require('./controllers/createToken.controller.js')

router.get('/homes', authMiddleware, home.getHomes)
router.get('/homes/:id',  home.getHome)
router.post('/homes/book/:homeId',  home.bookMe)
router.post('/homes/review/:homeId',  home.addReview)



router.post('/login', login,createSecretToken)

router.post('/users', addUser)

module.exports = router;

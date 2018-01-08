var express = require('express');
var router = express.Router();
var user = require('./controllers/user.controller.js');
var animals = require('./controllers/animals.controller.js');

router.get('/users', user.getUsers);
router.post('/users', user.addUser);
router.get('/users/:id', user.getUsersById);

router.get('/animals', animals.getAnimals);
router.get('/stories', animals.getStories);

router.get('/sex', animals.getSex);
router.post('/sex', animals.addSex);

router.get('/sex/:id', animals.getSexById);







module.exports = router;

var express = require('express');
var router = express.Router();

var books = require('./controllers/books.controller.js')

router.get('/books', books.getBooks)
router.post('/books',  books.addBook)

module.exports = router;

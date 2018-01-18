var con = require('../db/dbConnection.js')
var ObjectId = require('mongodb').ObjectId;



let getBooks = async (req, res, next) => {
    try {
        let db = await con
        let data = await db.collection('books1').find({}).toArray()
        let books = await data
        res.json(books)
    } catch (e) {
        console.log(e, 'ERROR IN book')
    }
}


let addBook = async (req, res, next) => {
    try {
        let {name,publishDate} = req.body
        let db = await con
        let data = await db.collection('books1').insertOne({ name,publishDate })
        let book = await data
        res.json(book)
    } catch (e) {
        console.log(e, 'ERROR IN book')
    }
}



let books = { getBooks, addBook }

module.exports = books  
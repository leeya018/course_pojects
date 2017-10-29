var con = require('../db/dbConnection.js')
var ObjectId = require('mongodb').ObjectId;



let getHomes = async (req, res, next) => {
    try {
        let db = await con
        let data = await db.collection('homes').find({}).toArray()
        let homes = await data
        res.json(homes)
    } catch (e) {
        console.log(e, 'ERROR IN HOMES')
    }
}


let getHome = async (req, res, next) => {
    try {
        let db = await con
        let data = await db.collection('homes').findOne({ '_id': ObjectId(req.params.id) })
        let home = await data
        res.json(home)
    } catch (e) {
        console.log(e, 'ERROR IN HOMES')
    }
}



let bookMe = async (req, res, next) => {
    try {
        console.log('BOOKING SERVER BODY ', req.body)
        let bookingData = req.body
        let db = await con
        let data = await db.collection('homes').update({ '_id': ObjectId(req.params.homeId) }, { $push: { 'occupancy': bookingData } })
        res.json(data)
    } catch (e) {
        console.log(e, 'ERROR SERVER BOOK')
    }
}


let addReview = async (req, res, next) => {
    try {
        let review = req.body
        let db = await con
        let data = await db.collection('homes').update({ '_id': ObjectId(req.params.homeId) }, { $push: { reviews: { $each: [review], $position: 0 } } })
        res.json(data)
    } catch (e) {
        console.log(e, 'ERROR SERVER REVIEW')
    }
}

let home = { getHome, getHomes, bookMe, addReview }

module.exports = home
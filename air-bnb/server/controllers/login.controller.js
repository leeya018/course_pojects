var bcrypt = require('bcrypt');
var con = require('../db/dbConnection.js')
const saltRounds = 10;

let login = async (req, res, next) => {
    try {
        var { username, password } = req.body
        let db = await con;
        let data = await db.collection('users').findOne({ 'username': username })
        let user = await data;
        if (user) {
            console.log('this is user;',user)
            if (bcrypt.compareSync(password, user.password)) {
                req.user = user
            } else {
                req.user = null
            }
        } else {
            req.user = null
        }
      

        next()
    } catch (e) {
        console.log(e, 'LOGIN DB')
    }

}


module.exports = login;

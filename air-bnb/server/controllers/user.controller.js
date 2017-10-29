var con = require('../db/dbConnection.js')
var bcrypt = require('bcrypt');
const saltRounds = 10;

let addUser = async (req, res) => {
    try {
        let user = req.body
        let db = await con;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hashPass = bcrypt.hashSync(user.password, salt);
        db.collection('users').insert({
            'firstName': user.firstName, 'lastName': user.lastName,
            'username': user.userName, 'password': hashPass, 'imageUrl': user.imageUrl
        })
        let { firstName, lastName,imageUrl } = user
        let dataUser = { firstName, lastName,imageUrl }
        res.json(dataUser)
    } catch (e) {
        console.log(e, 'USER ERR')
    }
}

module.exports = addUser
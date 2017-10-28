var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: 'STORE'
});


module.exports = con;
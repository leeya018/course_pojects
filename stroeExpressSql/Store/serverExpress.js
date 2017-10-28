const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
// var CartModel = require('./cartModel.js');
var StoreModel = require('./storeModel');
var con = require('./dbConnection.js');



var products;
var userName = 'lee';
var password = 'yahav';
var isLogin = false;

var checkIfUserExists = function (credientials) {
    return credientials.userName == userName && credientials.password == password;
}

var sendResLogin = function (res) {
    var status, redirect;
    if (isLogin) {
        status = 200;
        redirect = '/cat.html';

    } else {
        status = 401;
        redirect = '/login.html';
    }
    res.send({ status, redirect });
}

app.use(express.static(__dirname + '/public'));

app.use(function ( req, res, next) {
    console.log(req.url);
    // next();
    if (req.url == '/' || req.url == '/loginAuth' && !isLogin) {
        next();
    }
    else {
        if (isLogin) {
            next();
        } else {
            res.redirect('/login.html');
        }
    }
});





var urlEncoderParser = bodyParser.urlencoded({ extended: false });
var r = 1;
// var checkLoginRedirection = function (res, newPath) {
//     if (password == undefined) {
//         res.redirect('/login.html');
//     } else {
//         res.redirect(newPath);
//     }
// }



app.post('/loginAuth', urlEncoderParser, function (req, res) {
    var credientials = {
        userName: req.body.userName,
        password: req.body.password
    }

    isLogin = checkIfUserExists(credientials);
    sendResLogin(res);
    // res.redirect('/cat.html');


});

app.get('/login', function (req, res) {
    res.end('/login.html');
    // res.end('fsfasdfasd')
    // res.send('/login.html');
    // res.sendFile('/login.html');
    // 

});

// app.get('/data', function (req, res) {
//     res.end({ '1': 1 });

// });

// app.get('/cat', function (req, res) {
//     checkLoginRedirection(res, '/');

// });



app.get('/', function (req, res) {
    // checkLoginRedirection(res, '/cat.html');
    res.redirect('/login.html');
    // var categoies = StoreModel.getCategories();
});

app.get('/cat', function (req, res) {
    // res.redirect('/cat.html');
    res.sendFile(__dirname+'/public/cat.html');

});


// app.get('/:catID', function (req, res) {
//     checkLoginRedirection(res, '/catID');
//     var categoryName = req.params.categoryName;
//     products = StoreModel.getProductsByCategory(catID);


// });


app.listen(3000);

console.log('Server running!');


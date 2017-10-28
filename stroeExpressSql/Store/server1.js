const express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var myQueries = require('./myQueries.js');


var fs = require('fs');



var products;


var con = require('./dbConnection.js');

app.use(express.static(__dirname));
// app.use(express.static(__dirname+'/public/categories'));


io.on('connection', function (socket) {
    con.query(myQueries.getCategories, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(socket.id + " id is connected");
            socket.emit("categories", result);
            
        }
    });






    app.get('/:categoryName', function (req, res) {
        var categoryName = req.params.categoryName;
        con.query(myQueries.getProductByCategory(categoryName), function (err, result) {
            if (err) {
                console.log(err);
            } else {
                products = result;

                res.redirect('public/products.html');


            }
        });

    });

    socket.on('getProducts', function () {
        socket.emit("products", products);
    });

    socket.on('deleteFromCart', function (sku) {
        con.query(myQueries.deleteRow(sku), function (err, result) {
            if (err) {
                console.log(err.message);
            } else {
                console.log("row had deleted");
            }
        });
    });

    var cartArr;
    socket.on("deleteCartAndAdd", function (cart) {
        var cartData = cart;


        con.query(myQueries.deleteRowsInCart, function (err, result) {
            function createArrFromCart(cartData) {
                var cartArr = [];

                for (var i = 0; i < cartData.length; i++) {
                    var tempArr = [];
                    tempArr.push(cartData[i].sku);
                    tempArr.push(1);
                    tempArr.push(cartData[i].qty);

                    cartArr.push(tempArr);


                }
                return cartArr;
            }
            if (err) {
                console.log(err);
            } else {

                cartArr = createArrFromCart(cartData);
                // socket.emit("finishDeleteCart");

                con.query(myQueries.addToCart, [cartArr], function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("addTo cart");
                    }
                });


            }
        });


    });



});



// use process.env.P        res.end();ORT and process.env.IP for Cloud9
// or replace with your port and (optionally) IP as necessary
server.listen(3000);

console.log('Server running!');


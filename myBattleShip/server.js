var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var Game = require('./game.js');
var User = require('./user.js');
var userList = require('./userList');
var ConManager = require('./conManager');
var serverHelper = require('./serverHelper');

var cons = [];


server.listen(3004);
console.log('sever is listen');


app.use(express.static(__dirname + '/public'));
app.get('/', function () {

})




io.on('connect', function (socket) {

    socket.on('login', function (userName) {
        serverHelper.makeLogin(userName, socket);


    })

    socket.on('startGame', function (rivalNickName, myName) {
        serverHelper.startGame(rivalNickName, myName, socket, io, cons);

    })

    socket.on('hit', function (cords) {
        serverHelper.hit(cords, cons, socket, io)
        //temp


    })

    socket.on('disconnect', function (data) {
        serverHelper.disconnectS(socket);
    })


    socket.on('resetGame', function (data) {
        serverHelper.resetGame(cons, socket, io);


    })


    socket.on('openChat', function (nada) {
        console.log('openchat in server');
        var con = serverHelper.findCon(cons, socket);
        var rivalSocketId = con.findRivalSocketId(socket.id);
        socket.emit('openchatWindow', '')
        io.to(rivalSocketId).emit('openchatWindow', '');


    })
    socket.on('sendChat', function (txtMsg) {
        console.log('text  :' + txtMsg);
        var con = serverHelper.findCon(cons, socket);
        var rivalSocketId = con.findRivalSocketId(socket.id);
        io.to(rivalSocketId).emit('reciveMsg',txtMsg);


    })



})
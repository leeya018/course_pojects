const http = require('http');
const fs = require('fs');
const Router = require('./router');
// const categoryService = require('./categoryService');
var socketio = require('socket.io');
var StoreModel = require('./storeModel');
var con = require('./dbConnection.js');




var router = Router;
var storeModel = StoreModel();
router.register('/', storeModel.getCatgories);
// router.register('/:', getProdsByCaegory);



var app = http.createServer(function (req, res) {





    router.routing(req, res);

    // var status = rout.getStatus();
    // var content = rout.getContentType();
    // var realPath = rout.getFilePath();
    // res.writeHead(status, { 'Content-Type': content });

    // fs.createReadStream(realPath).pipe(res);



    // res.end('publicarchitecture.js');
});
socketio.listen(app).on('connection', function (socket) {
    socket.on('getCat', function () {

        storeModel.getCategories(res, socket);

    })
    //need to return from callback functions

});
// router.register('/', categoryService(app, socketio).getCatgories);
app.listen(3000);


console.log('server run');  
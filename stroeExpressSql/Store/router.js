const { URL } = require('url');
const fs = require('fs');

var registerUrl = {};

function register(url, func) {
    registerUrl[url] = func;
}

function routing(req, res,io) {
    var url = req.url;
    if (registerUrl[url] !== undefined) {
        registerUrl[url](req, res);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html>404 Ooops not found<html>')
        res.end()
    }
    // res.writeHead(status, { 'Content-Type': content });
    // fs.createReadStream(realPath).pipe(res);

}


module.exports = {
    'register': register,
    'routing': routing
}
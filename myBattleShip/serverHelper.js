var User = require('./user.js');
var userList = require('./userList');
var ConManager = require('./conManager');

function makeLogin(userName, socket) {
    var offlineUsers = getOfflineUsers(userList.getList());
    socket.emit("getUsersList", offlineUsers);
    var existUser = userList.checkExistUser(userName);
    if (!existUser) {
        userList.addUser(new User(userName, socket.id));
        var offlineUsers = getOfflineUsers(userList.getList());
        socket.emit("validUser", true);
        socket.broadcast.emit("getUsersList", offlineUsers);
    } else {
        socket.emit('invalidUser', 'user is not valid');
    }
}


function getOfflineUsers(users) {
    var offlineUsers = [];
    for (let user of users) {
        if (user.isPlaying == false) {
            offlineUsers.push(user);
        }
    }
    return offlineUsers;
}


function findCon(cons, socket) {

    for (let con of cons) {
        var clients = con.clients;
        for (let client of clients) {
            if (client.socketId === socket.id) {
                return con;
            }
        }

    }
    return null;
}


function startGame(rivalNickName, myName, socket, io, cons) {
    var rivalSocketId = userList.findSocketId(rivalNickName);
    var newCon = new ConManager(socket, rivalSocketId, myName, rivalNickName);
    socket.emit('myShips', newCon.game.p1.ships);
    io.to(rivalSocketId).emit('myShips', newCon.game.p2.ships);
    cons.push(newCon);
    newCon.setPlaying(userList);
    var offlineUsers = getOfflineUsers(userList.getList());
    socket.broadcast.emit("getUsersList", offlineUsers);
    //disable loginDiv
    socket.emit('hideLoginDiv', '');
    io.to(rivalSocketId).emit('hideLoginDiv', '');
}
////
function hit(cords, cons, socket, io) {
    var game;
    var con = findCon(cons, socket)
    game = con.getGame();
    if (game.currTurn === socket.id) {
        var isHit = con.checkHit(cords, socket.id);
        socket.emit('hitResponse', isHit);
        var rivalSocketId = con.findRivalSocketId(socket.id);
        if (!isHit) {
            game.setTurn(rivalSocketId);
            io.to(rivalSocketId).emit('yourTurnMsg', 'your turn')

        } else {
            var win = con.checkWin(socket.id);
            // var win = true;//temp
            if (win) {
                io.to(rivalSocketId).emit('endGameMsg', 'you lose');
                socket.emit('endGameMsg', 'you win');
            }
        }
        io.to(rivalSocketId).emit('hitResponseShowHit', isHit, cords);
        socket.emit('cellIsValid', cords);
    }
    else {
        socket.emit('notYourTurnMsg', 'not your turn');
    }
}

function disconnectS(socket) {
    var users = userList.getList();
    for (var i in users) {
        if (users[i].socketId == socket.id) {
            users.splice(i, 1);
        }
    }
    var offlineUsers = getOfflineUsers(users);
    socket.broadcast.emit("getUsersList", offlineUsers);
}

function changePlayerToOffline(cons, socket) {
    var flagOff = false;
    for (var i in cons) {
        if (!flagOff) {
            var clients = cons[i].clients;
            for (let client of clients) {
                if (client.socketId === socket.id) {
                    flagOff = true;
                    makeUserOffline(client);
                    if (bothClientsOffline(cons[i])) {
                        cons.splice(i, 1);
                        return true;
                    }

                }
            }
        }
        return false;
    }
    if (!flagOff) {
        throw new Error('you did not remove a Con');
    }
}

function bothClientsOffline(con) {
    var counterOff = 0;
    var clients = con.clients;
    var users = userList.getList();
    for (let user of users) {
        for (let client of clients) {
            if (client.socketId === user.socketId) {
                if (user.isPlaying == false) {
                    counterOff++;
                }
            }

        }
    }
    return counterOff == 2;
}

function makeUserOffline(client) {
    var users = userList.getList();
    for (let user of users) {
        if (user.socketId === client.socketId) {
            user.setIsPlaying(false);
        }
    }
}


function resetGame(cons, socket,io) {
    console.log('resetGame , now remove con');
    var con = findCon(cons, socket);
    var rivalSocketId = con.findRivalSocketId(socket.id);
    var remCon = changePlayerToOffline(cons, socket);
    if (remCon) {
        var offlineUsers = getOfflineUsers(userList.getList());
        socket.emit("getUsersList", offlineUsers);
        io.to(rivalSocketId).emit("getUsersList", offlineUsers);
    }
    socket.emit('clearCanvas', offlineUsers);
}


module.exports = {
    makeLogin,
    getOfflineUsers,
    findCon,
    startGame,
    hit,
    disconnectS,
    changePlayerToOffline,
    resetGame


};
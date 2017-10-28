var Game = require('./game.js');

var conManager = class ConManager {

    constructor(socket, rivalSocketId, myName, rivalNickName) {
        this.clients = [];
        this.game = null;

        this.clients.push({ 'name': rivalNickName, 'socketId': rivalSocketId });
        this.clients.push({ 'name': myName, 'socketId': socket.id });
        this.game = new Game(this.clients[0].socketId, this.clients[1].socketId, myName, rivalNickName);
        var ships1 = this.game.p1.ships;
        var ships2 = this.game.p2.ships;

    }


    checkHit(cord, socketID) {
        var ships = this.takeRivalShips(socketID);//the other of socketID
        return this.findIfHit(cord, ships);



    }


    takeRivalShips(socketID) {
        if (this.game.p1.id !== socketID) {
            return this.game.p2.ships
        }
        return this.game.p1.ships;
    }

    findIfHit(cord, ships) {
        for (let ship of ships) {
            if (this.findInShip(ship, cord)) {
                return true;
            }
        }
        return false;
    }

    findInShip(ship, shipCord) {
        for (let cord of ship.cordinates) {
            if (this.compareCords(cord, shipCord)) {
                ship.removeLife();
                return true;
            }
        }
        return false;
    }



    compareCords(cord1, cord2) {
        return cord1.x == cord2.x && cord1.y == cord2.y;

    }

    findRivalSocketId(socketId) {
        if (this.game.p1.id == socketId) {
            return this.game.p2.id;
        }
        return this.game.p1.id;
    }

    checkWin(playerId) {
        var rivalShips = this.takeRivalShips(playerId);
        var rivalShipsLife = this.getShipsLife(rivalShips);
        return rivalShipsLife == 0;
    }

    getShipsLife(rivalShips) {
        var sum = 0;
        for (let ship of rivalShips) {
            sum += ship.life;
        }
        return sum;
    }


    getGame() {
        return this.game;
    }


    setPlaying(userList) {
        var users = userList.getList();
        for (let client of this.clients) {
            for (let user of users) {
                if (user.socketId == client.socketId) {
                    user.setIsPlaying(true);
                }
            }

        }
    }

}
module.exports = conManager;
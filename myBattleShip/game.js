
var randomShips = require('./randomShips.js');
var Board = require('./board.js');







class Player {
    constructor(name, socketID, board) {
        this.name = name;
        this.id = socketID;
        this.board = board.board;
        this.ships = randomShips(board );


    }



}
var game = class Game {
    constructor(socketID1, socketID2, myName, rivalNickName) {
        this.currTurn = socketID1;
        this.p1 = new Player(myName, socketID1,  new Board());
        this.p2 = new Player(rivalNickName, socketID2, new Board());

    }
    setTurn(nextTurn) {
        this.currTurn = nextTurn;
    }
}

module.exports = game;


// var g =new game(1,1,1,1);

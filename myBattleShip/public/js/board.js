

class Board {
    constructor() {
        this.board = [];
        for (var i = 0; i < 10; i++) {
            this.board[i] = new Array();
            for (var j = 0; j < 10; j++) {
                this.board[i][j] = false;
            }
        }
    }
    getBoard() {
        return this.board;
    }

    cellIsFree(cord) {
        return this.board[cord.x][cord.y] == false;
    }


    setShip(cord) {
        this.board[cord.x][cord.y] = true;
    }

}
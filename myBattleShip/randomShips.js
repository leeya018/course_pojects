var _ = require('lodash');


class Cordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isValid() {
        return this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10;
    }
}


class BattleShip {
    constructor(name, life, cordinates) {
        this.name = name;
        this.life = life;
        this.cordinates = cordinates;

    }

    removeLife() {
        this.life--;
    }

}


var board;

var createRandomShips = function createRandomShips(board1) {
    board = board1;
    var ships = []
    //4
    var cords = createShipCords(4);
    setShips(cords);
    ships.push(new BattleShip('4', '4', cords));
    //3
    var i = 0;
    while (i < 2) {
        var cords = createMidleShips(3);
        ships.push(new BattleShip('3', '3', cords));
        i++;
    }
    i = 0;
    while (i < 3) {
        var cords = createMidleShips(2);
        ships.push(new BattleShip('2', '2', cords));
        i++;
    }
    i = 0;
    while (i < 4) {
        var cords = createSmallShips();
        ships.push(new BattleShip('1', '1', cords));
        i++;
    }

    return ships;
}


function createSmallShips() {
    var free = false;
    var cords = [];
    while (!free) {

        var x = randomNum(10);
        var y = randomNum(10);
        var cord = new Cordinate(x, y);
        var permitterWithShip = getPermmiter([cord]);
        free = checkFreePermitter(permitterWithShip);
    }
    cords.push(cord);
    board.setShip(cord);
    return cords;

}
function createMidleShips(size) {

    var free = false;
    while (!free) {
        var cords = createShipCords(size);
        var permitterWithShip = getPermmiter(cords);
        free = checkFreePermitter(permitterWithShip);
    }
    setShips(cords);
    return cords;

}


function directionHorizen(num) {
    var cords = [];
    var i = 0;

    var x = randomNum(10 - num);
    var y = randomNum(10);

    while (i < num) {
        var cord = new Cordinate(x, y);
        cords.push(cord);
        x++;
        i++;
    }
    return cords;
}

function directionVertical(num) {
    var cords = [];
    var i = 0;
    var x = randomNum(10 - num);
    var y = randomNum(6);

    while (i < num) {
        var cord = new Cordinate(x, y);
        cords.push(cord);
        y++;
        i++;
    }
    return cords;
}

function createShipCords(num) {


    var horizren = directionHorizen;
    var vertical = directionVertical;

    var randDirectionFunc = [horizren, vertical];
    var randFunc = randomNum(2);
    var cords = randDirectionFunc[randFunc](num);
    return cords;
    //new BattleShip(num, num, cords);
}


function randomNum(num) {
    return parseInt(Math.random() * num);
}





function setShips(cords) {
    for (let cord of cords) {
        board.setShip(cord);
    }
}



function getPermmiter(cords) {
    var permmiter = [];
    for (let cord of cords) {
        getCordPermitter(permmiter, cord)

    }
    var shrinkPermitter = _.uniqWith(permmiter, _.isEqual);
    // var shrinkPermitter = _.pullAllWith(shrinkPermitter, cords, _.isEqual);
    return shrinkPermitter;
}




function cloneCordParams(x, y) {
    return new Cordinate(x, y);
}
function getCordPermitter(permmiter, cord) {
    var x = cord.x;
    var y = cord.y;
    var newCord = cloneCordParams(x, y - 1)
    permmiter.push(newCord);
    var newCord = cloneCordParams(x, y + 1);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x - 1, y);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x - 1, y - 1);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x - 1, y + 1);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x + 1, y);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x + 1, y - 1);
    permmiter.push(newCord);
    var newCord = cloneCordParams(x + 1, y + 1);
    permmiter.push(newCord);



}





function checkFreePermitter(perimmeter) {
    for (let cord of perimmeter) {
        if (cord.isValid()) {
            if (!board.cellIsFree(cord)) {
                return false;
            }
        }

    }
    return true;
}
function cloneCord(cord) {

    return new Cordinate(cord.x, cord.y);
}



module.exports = createRandomShips;
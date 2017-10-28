class Draw {
    constructor(canvasID, colsNum, screenWidth, windowHeight, start, myShips, socket) {
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = 'white';


        this.canvas.width = window.innerWidth - 30;
        this.canvas.height = this.canvas.width * 0.4;
        this.boardSize = this.canvas.height

        this.myShips = myShips;
        this.socket = socket;
        this.lastPosClick = {};
        this.board = new Board();


        this.drawBoards(this.boardSize, colsNum);
        this.drawMyShips();
        //eventListenner
        this.cellEmmiter();

    }
    cellEmmiter() {
        var self = this;
        this.canvas.addEventListener('click', (e) => {
            this.addCanvasClick(e);

        });
    }




    addCanvasClick(e) {
        var msgDiv = document.getElementById('msgDiv');
        msgDiv.innerHTML = '';
        var cord = findCordinates(e.offsetX, e.offsetY, this.cellLen);
        console.log(cord);
        if (this.board.cellIsFree(cord)) {
            if (checkValidCords(cord)) {

                sendCordsToServer(cord, this.socket);
                this.lastPosClick = findPosCanvas(cord.x, cord.y, this.cellLen)

            }
        }
    }

    drawBoards(jumpPX, colsNum) {
        var k = 0;
        var start = 0;
        while (k < 2) {
            this.drawBoard(start, colsNum);
            start += jumpPX + (jumpPX / 5);
            k++;
        }
    }

    drawHit(isHit) {
        this.ctx.font = this.cellLen + 'px Ariel';
        if (isHit) {
            this.ctx.fillStyle = 'green';
        } else {
            this.ctx.fillStyle = 'red';
        }
        this.ctx.fillRect(this.lastPosClick.x, this.lastPosClick.y, this.cellLen, this.cellLen);
    }

    drawX(isHit, cords) {
        var canvPos = findPosCanvas(cords.x, cords.y, this.cellLen);
        this.ctx.lineWidth = 5;
        if (isHit) {
            this.ctx.strokeStyle = 'green';
            this.drawXsign(canvPos.x, canvPos.y)
        } else {
            this.ctx.strokeStyle = 'red';
            this.drawXsign(canvPos.x, canvPos.y);
        }
    }

    drawXsign(canvPosX, canvPosY) {
        var start = this.boardSize + (this.boardSize / 5);
        var addition = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(start + canvPosX + addition, canvPosY + addition);
        this.ctx.lineTo(start + canvPosX + this.cellLen - addition, canvPosY + this.cellLen - addition);
        this.ctx.moveTo(start + canvPosX + addition, canvPosY + this.cellLen - addition);
        this.ctx.lineTo(start + canvPosX + this.cellLen - addition, canvPosY + addition);
        this.ctx.stroke();
    }
    drawMyShips() {
        var myShipsCords = getShipsCords(this.myShips);
        var posArr = convertToPosCanvas(myShipsCords, this.cellLen);
        this.drawShips(posArr);
    }

    drawShips(posArr) {
        var pos;
        for (pos of posArr) {
            this.drawShip(pos);
        }
    }

    drawShip(pos) {
        this.ctx.fillStyle = '#00FFFF';
        this.ctx.fillRect(this.boardSize + (this.boardSize / 5) + pos.x, pos.y, this.cellLen, this.cellLen);
    }

    drawBoard(start, colsNum) {
        this.ctx.fillStyle = 'white';
        this.ctx.strokeRect(start, 0, this.boardSize, this.boardSize);
        var i, j = 0;
        var cellLen = this.boardSize / colsNum;
        this.cellLen = cellLen;

        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                this.ctx.strokeRect(start + i * cellLen, j * cellLen, cellLen, cellLen);
                this.ctx.fillStyle = 'rgba(255, 165, 100, 0.2)';
                this.ctx.fillRect(start + i * cellLen, j * cellLen, cellLen, cellLen);


            }
        }

    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.removeCanvas();
        this.createCanvas();
    }

    removeCanvas() {
        var body = document.getElementsByTagName('body');
        body[0].removeChild(this.canvas)
    }

    createCanvas() {
        var canvas = document.createElement('canvas');
        canvas.id = 'shipCanvas';
        var body = document.getElementsByTagName('body');
        body[0].appendChild(canvas);
    }

}



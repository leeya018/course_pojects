window.onload = function () {
    var myBoard;

    // var windowLen = 1000;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    var msgDiv = document.getElementById('msgDiv');


    var socket = io.connect();

    // var socket = io.connect('http://localhost:3004');
    createLoginEmitter(socket);
    createLoginEmitterEnter(socket);



    socket.on('getUsersList', function (offlineUsers) {
        updateUserSelect(offlineUsers);

    })

    socket.on('hideLoginDiv', function (data) {
        visibilityLoginDiv('none');
    })


    socket.on('validUser', function (data) {
        handleHtmlElems(socket);

    })
    socket.on('hitResponse', function (isHit) {
        myBoard.drawHit(isHit);
    })

    socket.on('hitResponseShowHit', function (isHit, cords) {
        console.log(isHit, cords);
        myBoard.drawX(isHit, cords);
    })

    socket.on('endGameMsg', function (msg) {
        var color;
        msg === 'you lose' ? color = 'red' : color = 'green';
        msgDiv.style.color = color;
        msgDiv.innerHTML = msg
        //
        showLobbyBtn(socket);



    })


    socket.on('cellIsValid', function (cords) {
        myBoard.board.setShip(cords);
    })


    socket.on('invalidUser', function (msg) {
        alert(msg);

    });

    socket.on('myShips', function (myShips) {
        console.log(myShips);
        myBoard = new Draw('shipCanvas', 10, windowWidth, windowHeight, 0, myShips, socket);


    })


    socket.on('yourTurnMsg', function (msg) {
        msgDiv.style.color = 'green';
        msgDiv.innerHTML = msg
    });



    socket.on('notYourTurnMsg', function (msg) {
        msgDiv.style.color = 'red';
        msgDiv.innerHTML = msg
    });



    socket.on('clearCanvas', function (offlineUsers) {
        console.log('clearcanvas client');
        // console.log('endGameTemp in client')

        myBoard.clearCanvas();
        disableLoginBtn();
        disableNameInput();
        updateUserSelect(offlineUsers)
    });


    socket.on('openchatWindow', function (nada) {
        showChatDiv(socket);
    });

    socket.on('reciveMsg',function(reciveMsg){
        appendMsgToChatBox(reciveMsg);
    })





}
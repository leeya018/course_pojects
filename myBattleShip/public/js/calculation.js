


function findCordinates(clientX, clientY, cellSize) {
    return { 'x': parseInt(clientX / cellSize), 'y': parseInt(clientY / cellSize) };
}

function findPosCanvas(x, y, cellSize) {
    return { 'x': x * cellSize, 'y': y * cellSize };
}

function checkValidCords(cords) {
    return cords.x < 10 && cords.y < 10;
}
function sendCordsToServer(cord, socket) {
    socket.emit('hit', cord);

}


function convertToPosCanvas(cords, cellSize) {
    var posArr = [];
    for (cord of cords) {
        posArr.push(this.findPosCanvas(cord.x, cord.y, cellSize));

    }
    return posArr;
}

function getShipsCords(myShips) {
    var shipCords = [];
    for (ship of myShips) {
        Array.prototype.push.apply(shipCords, ship.cordinates);
    }
    return shipCords;
}


function createLoginEmitter(socket) {
    var loginBtn = document.getElementById('loginInput');
    loginBtn.addEventListener('click', function () {
        var userInput = document.getElementById('userName');
        var nickName = userInput.value;
        socket.emit('login', nickName);
        var msgDiv = document.getElementById('msgDiv');
        msgDiv.visibility = 'visible';


    })
}

//for enter
function createLoginEmitterEnter(socket) {
    var loginDiv = document.getElementById('loginDiv');
    loginDiv.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            var loginBtn = document.getElementById('loginInput');
            loginBtn.click();
        }


    })
}



function updateUserList(socket) {

    var userSelection = document.getElementById('userSelection');
    var option;
    var first = false;
    var name = document.getElementById('userName');
    for (user of userList) {
        if (user.name !== name) {
            option = document.createElement('option');
            option.text = user.name;
            userSelection.appendChild(option);
        }
    }

}


function handleHtmlElems(socket) {
    var userSelection = document.getElementById('userSelection');
    userSelection.style.visibility = "visible";
    disableLoginBtn();
    disableNameInput();
    showPlayBtn(socket);
}

function visibilityLoginDiv(disp) {
    var loginDiv = document.getElementById('loginDiv');
    loginDiv.style.display = disp;
    // var subElems = loginDiv.getElementsByClassName('log');
    // for (let elem of subElems) {
    //     console.log(elem);
    //     elem.style.display = display;
    // }
}

function showPlayBtn(socket) {
    var playBtn = document.getElementById('playBtn');
    playBtn.style.display = "inline";

    playBtn.addEventListener('click', function () {
        var userSelection = document.getElementById('userSelection');

        if (userSelection.options.length > 0) {
            var rivalName = userSelection.options[userSelection.selectedIndex].text;
            var myName = document.getElementById('userName').value;
            socket.emit('startGame', rivalName, myName);
            socket.emit('openChat', '');


        } else {
            alert('there are no players yet');
        }
    })
}


function showChatDiv(socket) {
    var chatDiv = document.getElementById('chatDiv');
    chatDiv.style.display = 'inline';
    clickChat(socket);
    focusChatBox();
}

function focusChatBox() {
    var chatBox = document.getElementById('chatBox');
    chatBox.addEventListener('focus', e => {
        var textMsg = chatBox.style.color = 'black';
    })

}

function clickChat(socket) {
    var sendChat = document.getElementById('sendChat')
    sendChat.addEventListener('click', e => {
        var chatBox = document.getElementById('chatBox');
        var textMsg = chatBox.value;
        chatBox.style.color = 'green';
        socket.emit('sendChat', textMsg);
    });
}

function disableLoginBtn() {
    var loginBtn = document.getElementById('loginInput');
    loginBtn.disabled = true;

}

function disableNameInput() {
    var userInput = document.getElementById('userName');
    userInput.disabled = true;
}

function updateUserSelect(offlineUsers) {
    var userSelection = document.getElementById('userSelection');

    var length = userSelection.options.length;
    for (i = 0; i < length; i++) {
        userSelection.options[0] = null;
    }
    var name = document.getElementById('userName').value;

    for (let user of offlineUsers) {
        if (user.name !== name) {
            option = document.createElement('option');
            option.text = user.name;
            userSelection.add(option);
        }
    }
}


function showLobbyBtn(socket) {
    lobbyBtn.style.display = "inline";

    lobbyBtn.addEventListener('click', (e) => {
        this.clickLobby(e, socket);
    })


}


function clickLobby(e, socket) {
    visibilityLoginDiv('inline');
    var lobbyBtn = document.getElementById('lobbyBtn');
    lobbyBtn.style.display = "none";
    console.log('I invoke isibilit');
    socket.emit('resetGame', '');
    var msgDiv = document.getElementById('msgDiv');
    msgDiv.innerHTML = '';
}


function appendMsgToChatBox(reciveMsg) {
    var chatBox = document.getElementById('chatBox');
    var textMsg = chatBox.value = reciveMsg;
}
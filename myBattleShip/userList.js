

var UserList = (function () {
    var list = [];

    function addUser(user) {
        list.push(user);
    }
    function getList() {
        return list;
    }

    function checkExistUser(userName) {
        for (user of list) {
            if (user.name === userName) {
                return true;
            }
        }
        return false;
    }

    function authUser(userName){
          for (user of list) {
            if (user.name === userName) {
                return true;
            }
        }
    }

    

    function findSocketId(rivalNickName) {
        for (user of list) {
            if (user.name === rivalNickName) {
                return user.socketId;
            }
        }
        return 'NONE';
    }
    return {
        'addUser': addUser,
        'getList': getList,
        'checkExistUser': checkExistUser,
        'findSocketId':findSocketId
    }
})();

module.exports = UserList;
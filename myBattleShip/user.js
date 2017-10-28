var user = class Users{
    constructor(name,socketId){
        this.name=name;
        this.socketId=socketId;
        this.isPlaying = false;
    }
    setIsPlaying(status){
        this.isPlaying = status;
    }
}


module.exports = user;
class Player{
    constructor(){
        this.name = null;
        this.xPos = 0;
        this.yPos = 0;
        this.index = null;
        this.crashed=false;
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        });
        return playerCount
    }
    updatePlayerCount(data){
        //console.log(data);
        database.ref('/').update({
            playerCount:data,
        });
    }
    updateName(){
        this.index = playerCount;
        var playerIndex = "players/player"+playerCount
        database.ref(playerIndex).set({
            name:this.name,
            xPos:this.xPos,
            yPos:this.yPos,
            crashed:this.crashed,
        });
    }
    static getPlayerInfo(){
        database.ref("players").on("value",function(data){
            allPlayers = data.val();
        });
    }
}
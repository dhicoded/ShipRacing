class Form{
    constructor(){
        this.heading = createElement('h1');
        this.heading2 = createElement('h1');
        this.input = createInput("Name");
        this.button1 = createButton("Play");
        this.button2 = createButton("Reset");
    }
    hide(){
        this.button1.hide();
        this.input.hide();
        this.heading.hide();
        this.heading2.hide();
    }
    display(){
        this.heading.html("Ship Racing Game");
        this.heading.position(displayWidth/2, displayHeight-800);
        this.input.position(displayWidth/2,displayHeight-600);
        this.button1.position(displayWidth/2,displayHeight-500);
        this.button2.position(displayWidth-200,50);
        this.button1.mousePressed(()=>{
                player.name = this.input.value();
                playerCount+=1
                player.index = playerCount;
                player.xPos=50;
                if(playerCount===1) player.yPos=100;
                if(playerCount===2) player.yPos=300;
                if(playerCount===3) player.yPos=500;
                player.updatePlayerCount(playerCount);
                player.updateName();
                this.input.hide();
                this.button1.hide();
                this.heading2.html("Waiting for players...")
                this.heading2.position(displayWidth/2, displayHeight-600);
            });

            this.button2.mousePressed(()=>{
                player.updatePlayerCount(0);
                game.updateState(0);
            });
    }
}
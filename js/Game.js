class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        });
        return gameState
    }
    updateState(data){
        database.ref('/').update({
            gameState:data,
        });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            //player.getPlayerCount();
          }
          form = new Form();
          form.display();
        }
        ship1 = createSprite(50,150);
        ship2 = createSprite(50,250);
        ship3 = createSprite(50,350);
        ship1.addImage("ship1",ship1IMG);
        ship2.addImage("ship2",ship2IMG);
        ship3.addImage("ship3",ship3IMG);
        ships = [ship1,ship2,ship3];
        ship1.scale = 1.5;
        ship2.scale = 1.5;
        ship3.scale = 1.5
        obstacle1 = createSprite(100,100);
        obstacle1.scale = 0.3;
        obstacle2 = createSprite(500,200);
        obstacle2.scale = 0.3;
        obstacle3 = createSprite(1000,300);
        obstacle3.scale = 0.3;
        obstacle4 = createSprite(2000,300);
        obstacle4.scale = 0.3;
        obstacle1.addImage("shark1",obstacle1Img);
        obstacle2.addImage("rock1",obstacle2Img);
        obstacle3.addImage("shark2",obstacle1Img);
        obstacle4.addImage("rock2",obstacle2Img);
        obstacleGroup.add(obstacle1);
        obstacleGroup.add(obstacle2);
        obstacleGroup.add(obstacle3);
        obstacleGroup.add(obstacle4);
    }

play(){
    form.hide();
    Player.getPlayerInfo();
    //console.log(allPlayers)
    if(allPlayers !== undefined){
      background("skyblue");
      image(seaIMG,0,0,displayWidth*2,displayHeight)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y = 0;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = allPlayers[plr].yPos;
        //use data form the database to display the cars in y direction
        x = allPlayers[plr].xPos;
        ships[index-1].x = x;
        ships[index-1].y = y;

        if (index === player.index){
          fill("red");
          strokeWeight(3);
          ships[index-1].shapeColor = "red"
          ellipse(ships[index-1].x,ships[index-1].y,60,60);
          camera.position.x = ships[index-1].x;
          camera.position.y = displayHeight/2; 
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null && player.crashed===false){
        player.xPos +=10
        player.updateName();
      }
    if(keyIsDown(UP_ARROW)&& player.index !== null && player.crashed===false){
      player.yPos -= 10;
      player.updateName();
    }
    if(keyIsDown(DOWN_ARROW)&& player.index !== null && player.crashed===false){
      player.yPos += 10;
      player.updateName();
    }

    if(ship1.isTouching(ship2)){
      //ship1.destroy();
      //ship2.destroy();
      var crashSprite=createSprite(ship1.x,ship1.y);
      crashSprite.addImage(crashImg);
      var shipName='ship'+player.index;
      if(shipName==='ship1'|| shipName==='ship2'){
        player.crashed=true;
        player.updateName();
      }
    }

    if(ship2.isTouching(ship3)){
      //ship3.destroy();
      //ship2.destroy();
      var crashSprite=createSprite(ship2.x,ship2.y);
      crashSprite.addImage(crashImg);
      var shipName='ship'+player.index;
      if(shipName==='ship3'|| shipName==='ship2'){
        player.crashed=true;
        player.updateName();
      }
    }

    if(ship1.isTouching(ship3)){
      //ship1.destroy();
      //ship3.destroy();
      var crashSprite=createSprite(ship1.x,ship1.y);
      crashSprite.addImage(crashImg);
      var shipName='ship'+player.index;
      if(shipName==='ship1'|| shipName==='ship3'){
        player.crashed=true;
        player.updateName();
      }
      //gameState = 3;
    }

      if(player.xPos>2800){
        gameState = 2;
      }
  
      drawSprites();
    }
    end(){
      alert("Game Over");
    }
    crashed(){
 //     if(player.index===)
      alert("You crashed!")
    }
  }
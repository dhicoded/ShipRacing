var database;
var player;
var playerCount=0;
var form;
var game;
var gameState=0;
var allPlayers;
var ship1,ship2,ship3;
var ships;
var ship1IMG, ship2IMG, ship3IMG,seaIMG;
var obstacle1Img, obstacle2Img;
var obstacleGroup;
var obstacle1,obstacle2,obstacle3,obstacle4;

function preload(){
  ship1IMG = loadImage("ship1.png");
  ship2IMG = loadImage("ship2.png");
  ship3IMG = loadImage("ship3.png");
  seaIMG=loadImage('sea.jpg');
  seaSound = loadSound('seaWaves.mp3');
  obstacle1Img = loadImage('shark.png');
  obstacle2Img = loadImage("rock.png");
  crashImg=loadImage('crash.png');
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    gameState = game.getState();
    game.start();
    obstacleGroup = new Group();

    //playerCount = 2;
}

function draw(){
  
  gameState = game.getState();
//    game.start();
    
    if(playerCount === 3){
        game.updateState(1);
      }
      if(gameState === 1){
        clear();
        //console.log(gameState + "hello")
        game.play();
      }
      if(gameState===2){
        game.end();
      }
      if(gameState===3){
        game.crashed();
      }
      //console.log(gameState);

  
}


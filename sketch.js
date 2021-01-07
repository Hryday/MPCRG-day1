var hypnoticBall, database;
var position;
var gameState, playerCount, allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
}

function draw(){
  background("white");
}


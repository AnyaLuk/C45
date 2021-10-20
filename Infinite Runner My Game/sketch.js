var Outside, OutsideIMG
var  Start, StartIMG
var GameState = "Start"
var playbutton, Play

function preload(){
  OutsideIMG=loadImage("Images/outside.jpeg")
  StartIMG=loadImage("Images/Start.png")
  playbutton=loadImage("Images/play button.jpeg")
}

function setup() {
  createCanvas(1800,900);
  Start=createSprite(900,450,1800,900)
  Start.addImage(StartIMG)
  Start.visible = false
  Outside=createSprite(900,450,1800,900)
  Outside.addImage(OutsideIMG)
  Outside.visible = false
  Play=createSprite(900,450,60,40)
  Play.addImage(playbutton)
  Play.scale=0.5
}

function draw() {

  Start.visible = true
  Outside.visible = false
  if(mousePressedOver(Play)){
    GameState = "Play"
  }

if(GameState === "Play"){
  Play.visible=false
  Start.visible = false
  Outside.visible=true
}
  drawSprites();
}


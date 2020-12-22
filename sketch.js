var gameState="wait";
var car1,car2,car3,car4,car1Img, car2Img,car3Img,car4Img;
function preload()
{
	car1Img = loadImage("car1.jpg");
	car2Img = loadImage("car2.png");
	car3Img = loadImage("car3.png");
	car4Img = loadImage("car4.png");
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(gameState==="wait") {
	  //display story by using text command
  }

  if(keyIsDown("enter")){
	  gameState="carracing";

	 }

  if(gameState==="carracing"){
		car.play();
  }
  
  

  drawSprites();
 
}




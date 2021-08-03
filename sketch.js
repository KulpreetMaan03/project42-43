var iss,spacecraft;
var hasDocked=false;
var issImg,spacecraftImg,s2Img,s3Img,s4Img;
var backgroundImg

function preload(){
issImg=loadImage("images/1.png");
backgroundImg=loadImage("images/spacebg.jpg");
spacecraftImg=loadImage("images/s1.png");
s2Img=loadImage("images/s2.png");
s3Img=loadImage("images/s3.png");
s4Img=loadImage("images/s4.png");
}


function setup() {
  createCanvas(800,400);
  //iss image
  iss=createSprite(400,200,20,20);
  iss.addImage(issImg);
  iss.scale=0.8;
  //spacecraft image
  spacecraft=createSprite(400,300);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;
  spacecraft.velocity.x=0;
  spacecraft.velocity.y=0;
}

function draw() {
  background(backgroundImg); 
  //has docked 
  if (!hasDocked) {
    spacecraft.x=250;
    if (keyCode===37) {
      spacecraft.addImage(s3Img);
      spacecraft.velocity.x=1;
    }
    if (keyCode===39) {
      spacecraft.addImage(s4Img);
      spacecraft.velocity.x=-1;
    }
    if (keyCode===40) {
      spacecraft.addImage(s2Img);
      spacecraft.velocity.y=-1;
    }
    
  }
 
  drawSprites();
}
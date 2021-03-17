var tom, jerry , garden;
var tomImage1, tomImage2, tomImage3,jerryImage1,jerryImage2, jerryImage3, gardenImage;

function preload() {
    //load the images here
   tomImage1 = loadImage("tomOne.png");
   tomImage2 = loadAnimation("tomTwo.png","tomThree.png");
   tomImage3 = loadAnimation("tomFour.png");
   jerryImage1 = loadImage("jerryOne.png");
   jerryImage2 = loadAnimation("jerryTwo.png","jerryThree.png");
   jerryimage3 = loadAnimation ("jerryFour.png");
   gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(680,400);
    //create tom and jerry sprites here
    tom = createSprite(500,340,20,100);
    tom.addImage("tom", tomImage1);
   
    

    jerry = createSprite(200,340,10,40);
    jerry.addImage("jerry", jerryImage1);
   ;
    

    garden = createSprite(340,200)
    garden.addImage("garden", gardenImage);
   
    keyPressed();
}

function draw() {

    console.log(tom.x - jerry.x);
    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < tom.width / 2 - jerry.width / 2) {
        tom.velocityX = 0;
        tom.addAnimation("tomImage3", tomImage3);
        tom.changeAnimation("tomImage3");
        tom.x = 300;
 
        jerry.addAnimation("jerryImage2", jerryImage2);
        jerry.changeAnimation("jerryImage2");
        tom.bounce(jerry);
     }
 
     drawSprites();
 }
 
function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
 
    tom.velocityX = -5;
    tom.addAnimation("tomImage2", tomImage2);
    tom.changeAnimation("tomImage2");

    jerry.addAnimation("jerryImage2", jerryImage2);
    jerry.changeAnimation("jerryImage2");
}

}




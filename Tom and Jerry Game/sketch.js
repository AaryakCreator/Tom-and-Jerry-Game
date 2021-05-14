
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");

    tomImg1 = loadImage("images/cat1.png");
    tomRunning = loadImage("images/cat2.png");
    tomHappyImg = loadImage("images/cat4.png");

    jerryStandingImg = loadImage("images/mouse2.png");
    jerryTeasingImg = loadImage("images/mouse3.png");
    jerryHappyImg = loadImage("images/mouse1.png");


}

function setup(){
    createCanvas(975,705);
   
    // tom
    tom = createSprite(700,550,5,5);
    tom.addImage(tomImg1);
    tom.scale = 0.2;
    tom.setCollider("circle",0,0,400);
    
     
    // jerry
    jerry = createSprite(300,590,5,5);
    jerry.addImage(jerryStandingImg);
    jerry.scale = 0.1;
    jerry.setCollider("circle",0,0,300);
    

}

function draw() {

    background(gardenImg);
    
    if (tom.x - jerry.x > tom.width/4 + jerry.width/4) {
        keyPressed();
     }
    

    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < tom.width/4 + jerry.width/4) {
       tom.addImage(tomHappyImg);
       jerry.addImage(jerryHappyImg);
    }

    

    drawSprites();
}


function keyPressed(){
    if (keyDown("left")) {
        jerry.addImage(jerryTeasingImg);
        tom.x -= 1;
        tom.addImage(tomRunning);
    } else {
        jerry.addImage(jerryStandingImg);
        tom.addImage(tomImg1);
        tom.scale = 0.2;
        tom.setCollider("circle",0,0,500);
    }
  
     
}

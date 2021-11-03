
var bg_Img;
var knight, kngt_Walk, kngt_Jump;
var invis_grnd;
var plt, plt1, plt2, plt3, plt4, plt5, plt6, plt7, plt8, plt9;


function preload(){
  bg_Img = loadImage("./Assets/Background_01.png");
  kngt_Walk = loadAnimation("./Knight/walk1.png", "./Knight/walk2.png", "./Knight/walk3.png", "./Knight/walk4.png", "./Knight/walk5.png", 
  "./Knight/walk6.png");
  kngt_Jump = loadAnimation("./Knight/jump1.png", "./Knight/jump2.png", "./Knight/jump3.png", "./Knight/jump4.png", "./Knight/jump5.png", 
  "./Knight/jump6.png","./Knight/jump7.png");
  plt1 = loadImage("./Assets/Ground_Merged.png");
  plt2 = loadImage("./Assets/Ground.png");
  plt3 = loadImage("./Assets/Bridge_01.png");
  plt4 = loadImage("./Assets/Bridge_02.png");
  plt5 = loadImage("./Assets/Ground_i.png");
  plt6 = loadImage("./Assets/Ground_ii.png");
}

function setup() {
  createCanvas(windowWidth*3,windowHeight);
  invis_grnd = createSprite(windowWidth/2, height-70, windowWidth*3, 10);
  invis_grnd.visible = false;
  
  knight = createSprite(100, height-80, 50, 50);
  knight.addAnimation("walk", kngt_Walk);
  //knight.debug = true;
  knight.setCollider("rectangle",-20,9,40,69);
}

function draw() {
  background(bg_Img); 
   
  if(keyDown(RIGHT_ARROW)){
    knight.x +=5;
  }
  if(keyDown(LEFT_ARROW)){
    knight.x -=5;
  }
  if(keyDown(UP_ARROW)){
    knight.addAnimation("jump", kngt_Jump);
    knight.velocityY -=5;
  }
  knight.velocityY= knight.velocityY+0.8;

  knight.collide(invis_grnd);  
  spawnPlatform();
  spawnGround();
  drawSprites();
}

function spawnPlatform() {
  if (frameCount % 100 === 0) {
    plt = createSprite(windowWidth-10,Math.round(random(100,600)), 40, 5);
  
    var ran = Math.round(random(1, 2));
    
    switch(ran){
      case 1: plt.addImage(plt1);
        break;
      case 2: plt.addImage(plt2);
        break;
      default: break; 
    }

    plt.width = 50;
    plt.height= 10;
    plt.scale = 0.8;
    plt.velocityX = -5;

  }
}

function spawnGround() {
  if (frameCount % 100 === 0) {
    plt = createSprite(windowWidth-10,windowHeight-75, 40, 5);
  
    var ran = Math.round(random(1, 4));
    
    switch(ran){
      case 1: plt.addImage(plt5);
        break;
      case 2: plt.addImage(plt6);
        break;
      default: break; 
    }

    plt.width = 500;
    plt.height= 10;
    plt.scale = 0.8;
    plt.velocityX = -5;
  }
}
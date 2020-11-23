
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,stone,mango1,tree; 
function preload()
{
     boy=loadImage("boy.png");
     stone=loadImage("stone.png");
     mango1=loadImage("mango.png");
     tree=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      stone=new Stone(235,420,30)
      mango1=new Mango(500,600,10);
      boy = new Boy(245,420,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
 // drawSprites();
 stone.display();
 mango1.display();
 boy.display();
}




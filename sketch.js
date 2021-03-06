
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone,mango1,mango2,mango3,mango4,mango5,tree;
var slingShot; 
function preload()
{
    boy=loadImage("boy.png");
     stone=loadImage("stone.png");
     mango1=loadImage("mango.png");
     tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      stone=new Stone(75,440,30,30);
      mango1=new Mango(700,200,30,30);
      mango2=new Mango(750,220,30,30);
      mango3=new Mango(780,280,30,30);
      mango4=new Mango(680,300,30,30);
      mango5=new Mango(650,200,30,30);
      mango6=new Mango(830,300,30,30);
      mango7=new Mango(1000,200,30,30);
      mango8=new Mango(900,210,30,30);

      // boy = new Boy(115,580,300,300);
       ground = new Ground(550,650,1100,10);
      // tree = new Tree(850,350,500,600);
      slingShot = new SlingShot(stone.body,{x:75,y:440});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // drawSprites();
// tree.display();
 image(tree,550,50,500,600);

 //boy.display();
 image(boy,50,380,200,300);

 slingShot.display();
 stone.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();



 ground.display();
 detectCollision();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
 function detectCollision(){
//detectCollision(stone,mango1);
 }

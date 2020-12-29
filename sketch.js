
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var LowRect;
var leftRect;
var rightRect;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	
ground=new Ground(400,490,800,23);
ball=new paper(200,400,50);
Dustbin=new dustbin(600,470);
	Engine.run(engine);
  
}
console.log()

function draw() {
	Engine.update(engine);
 
  background("white");
  ball.display();
  ground.display();
  Dustbin.display();
 
}

function keyPressed(){
if (keyCode == UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-350});
}
}


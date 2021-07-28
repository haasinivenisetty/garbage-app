
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(800,670,1600,20);
  wall1 =new Ground(1100,600,20,120);
wall2=new Ground (1300,600,20,120)
ball= new Ball (260,100,20)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show()
  wall1.show()
  wall2.show()
  ball.show()
  Engine.update(engine);
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}

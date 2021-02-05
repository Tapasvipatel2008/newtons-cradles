const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
   var canvas = createCanvas(800, 600);
   engine = Engine.create();
   world = engine.world;

   roof = new Roof(390,160,360,40);

   bob1 = new Bob(250,450,35);
   bob2 = new Bob(320,450,35);
   bob3 = new Bob(390,450,35);
   bob4 = new Bob(460,450,35);
   bob5 = new Bob(530,450,35);

   rope1 = new Rope(bob1.body, roof.body, -35*4,0);
   rope2 = new Rope(bob2.body, roof.body, -35*2,0);
   rope3 = new Rope(bob3.body, roof.body, -35*0,0);
   rope4 = new Rope(bob4.body, roof.body, -35*-2,0);
   rope5 = new Rope(bob5.body, roof.body, -35*-4,0);

   Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(169, 59, 255);
  
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
  
  push();
  stroke(255);
  strokeWeight(4);
  fill(0);
  textSize(50);
  textFont("Chiller");
  text("Press 'UP_ARROW' key to see the M@gic of Physics",2, 100);
  pop();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -1000, y : 1000})
	}
	if(keyCode === 50) {
//    Matter.Body.applyForce(bob2.body, bob2.body.position, {x : -1000 , y : 1000})
	}
}
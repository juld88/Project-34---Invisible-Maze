
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var left, right;
var ball;
var Ground;
var world;
var radius = 14;
var wall
function preload()
{

}

function setup() {
	createCanvas(1500, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,balls_options);
	World.add(world, ball);
	Ground = new ground(width/2-100, 670, width, 20);
	Ground2 = new ground(width/2, 0, width, 20);
	wall2 = new ground(0, 370, 20, 1000);
	wall3 = new ground(1500, 370, 20, 1000);
	wall4 = new ground(450, 500, 20, 500);
	wall5 = new ground(250, 120, 20, 500);
	wall6 = new ground(1080, 370, 500, 20);
	wall7 = new ground(900, 250, 20, 400);
	wall8 = new ground(500, 70, 20, 400);
	wall9 = new ground(1400, 600, 20, 600);
	wall10 = new ground(1300, 600, 20, 600);
	wall11 = new ground(750, 500, 500, 20);
	Engine.run(engine);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:0, y:-5});
	}	
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:5, y:0});
	}
	if(keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:-5, y:0});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius);
  Ground.display();
  wall2.display();
  wall3.display();
  //The following are commented in order to make it an invisible maze.
  //wall4.display();
  //wall5.display();
  //wall6.display();
  //wall7.display();
  //wall8.display();
  //wall9.display();
  //wall10.display();
  //wall11.display();
  Ground2.display();
}



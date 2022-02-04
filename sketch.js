
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options={
		 restitution : 0.3,
		 friction: 0,
		 density: 1.2
	 }

	 ball = Bodies.circle(200,20,10,ball_options);
	 World.add(world,ball);

     groundObj = new Ground(width/2,670,width,20);
	 leftSide = new Ground(900,600,20,120);
	 rightSide = new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();


  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:3,y:-3})
	}
}




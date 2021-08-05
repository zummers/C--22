

//it not showing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var con
var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1
var bob2
var bob3
var bob4
var bob5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic:true,
		resititution=0.8
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(350,300,25,bob_options);
	World.add(world,bob1)

	bob2 = Bodies.circle(377,300,25,bob_options);
	World.add(world,bob2)

	bob3 = Bodies.circle(404,300,25,bob_options);
	World.add(world,bob3)

	bob4 = Bodies.circle(431,300,25,bob_options);
	World.add(world,bob4)

	bob5 = Bodies.circle(458,300,25,bob_options);
	World.add(world,bob5)

	con = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	});

	World.add(world,con);

}

function draw() {
  rectMode(CENTER);
  
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
  pop(); 

 keyPressed();
  //create ellipse shape for multiple bobs here
  circle(bob1.position.x,bob1.position.y,25)
  circle(bob2.position.x,bob2.position.y,25)
  circle(bob3.position.x,bob3.position.y,25)
  circle(bob4.position.x,bob4.position.y,25)
  circle(bob5.position.x,bob5.position.y,25)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){

	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(bob5,{x:0,y:0},{x:0.05,y:0})
	}
}
	
	

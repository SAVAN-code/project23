var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody_options;
var packageBody,ground,ground_options,box,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


var packageSprite_options = {
	restitution:1.0
}

	var packageBody_options = {
		restitution:1.0
	}
	  
	 var ground_options = {
		isStatic :true
	}

	packageBody=createSprite(width/2,200,10,10,packageBody_options);
	packageBody.addImage(packageIMG);
	packageBody.scale=0.2;
    
    box=createSprite(400,650,15,3);
	box.shapeColor=color("red");
	box.scale=5

    box2=createSprite(430,619,15,50);
	box2.shapeColor=color("red");
	box.scale=5

    box3=createSprite(370,619,15,50);
	box3.shapeColor=color("red");

	packageSprite=createSprite(width/2, 80, 10,10,packageSprite_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 ,  {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
  }
}




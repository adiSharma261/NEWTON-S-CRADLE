const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase
var computerBase






function setup() {
  canvas = createCanvas(1200, 800);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new Base(900, 400,180,150)
computerBase = new Base(300,400,180,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display()
computerBase.display()
   //display Player and computerplayer


}

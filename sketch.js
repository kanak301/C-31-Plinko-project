const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world ;
var canvas;
var d1,d2,d3,d4,d5,d6,d7;

function setup() {

  var canvas = createCanvas(1200,400);

  engine = Engine.create();
	world = engine.world;

  d1 = new DividerClass (750,370,800,50);
}

function draw() {
  //rectMode(CENTER);
  background(255,255,255);  

  Engine.update(engine);

  d1.display();

  drawSprites();
}
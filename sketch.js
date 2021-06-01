const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload() {
  backgroundImage = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,600,20);
  hero = new Hero(400,30,100,100);
  rope = new Rope(hero.body, { x:100, y:465 });
 
  box1 = new Box(280, 350, 70, 70);
  box2 = new Box(310, 350, 70, 70);
  box3 = new Box(340, 350, 70, 70);
  box4 = new Box(370, 350, 70, 70);
  box5 = new Box(400,350,70,70);
  box6 = new Box(430,350,70,70);
  box7 = new Box(460,350,70,70);
  box8 = new Box(490,350,70,70);
  box9 = new Box(310, 350, 70, 70);
  box10 = new Box(340, 350, 70, 70);
  box11 = new Box(370, 350, 70, 70);
  box12 = new Box(400, 350, 70, 70);
  box13 = new Box(430, 350, 70, 70);
  box14 = new Box(460, 350, 70, 70);

  monster = new Monster(380,200,100,100);

 Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  hero.display();
  ground.display();
  stroke(15);
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();

}
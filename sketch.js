
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constrsint = Matter.Constraint;

function preload()
{
    polygonImg = loadImage("polygon.png");
}

function setup()
{
    createCanvas(1300, 600);

    engine = Engine.create;
    world = Engine.world;

    polygon = createSprite(500, 150, 20, 20);
    polygon.scale = 0.1;
    polygon = Bodies.circle(50, 200, 20);
    polygon.addImage(polygonImg);
    World.add(world, polygon);
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

    var ground1 = new Ground(200, 200, 400, 20);
    
    var box1 = new Box(200, 205, 30, 40);
    var box2 = new Box(230, 205, 30, 40);
    var box3 = new Box(260, 205, 30, 40);
    var box4 = new Box(290, 205, 30, 40);
    var box5 = new Box(320, 205, 30, 40);

    var box6 = new Box(230, 210, 30, 40);
    var box7 = new Box(260, 210, 30, 40);
    var box8 = new Box(290, 210, 30, 40);
    var box9 = new Box(320, 210, 30, 40);

    var box10 = new Box(260, 215, 30, 40);
    var box11 = new Box(290, 215, 30, 40);
    var box12 = new Box(320, 215, 30, 40);

    var box13 = new Box(290, 220, 30, 40);
    var box14 = new Box(320, 220, 30, 40);

    var box15 = new Box(320, 225, 30, 40);

    var sling1 = new SlingShot(this.polygon, {x:100, y: 200});

    Engine.run(engine);
}
function draw()
{
    rectMode(CENTER);
    background(255);
    
    ground1.display();
    
    box1.display();
    box2.dsiplay();
    box3.display();
    box4.display();
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

    box15.display();

    sling1.display();

    keyPressed();

    drawSprites();
}
function keyPressed()
{
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x:100, y:200})
        sling1.attach(polygon.body);
    }
}
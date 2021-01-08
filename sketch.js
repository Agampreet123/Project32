const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var score = 0;


function preload(){
   
}

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

    
    ground1 = new Ground(600,600,1500,35);
ground2 = new Ground(550,500,420,20);
ground3 = new Ground(1050,300,360,20);
    box1 = new box(400,455,50,70);
    box2 = new box(450,455,50,70);   
    box3 = new box(500,455,50,70);
    box4 = new box(550,455,50,70);  
    box5 = new box(600,455,50,70);
    box6 = new box(650,455,50,70);
    box7 = new box(700,455,50,70);
    box8 = new box(445,385,50,70);
    box9 = new box(495,385,50,70);
    box10 = new box(545,385,50,70);
    box11 = new box(595,385,50,70);
    box12 = new box(645,385,50,70);
    box13 = new box(500,315,50,70);
    box14 = new box(550,315,50,70);
    box15 = new box(600,315,50,70);
    box16 = new box(550,245,50,70);
    box17 = new box(940,255,50,70);
    box18 = new box(990,255,50,70);
    box19 = new box(1040,255,50,70);
    box20 = new box(1090,255,50,70);
    box21 = new box(1140,255,50,70);
    box22 = new box(990,185,50,70);
    box23 = new box(1040,185,50,70);
    box24 = new box(1090,185,50,70);
    box25 = new box(1040,115,50,70);
   polygon = new Polygon(100,200,70);
   slingshot = new Slingshot(polygon.body,{x:100,y:200})
   

}

function draw(){
    background(56,44,44)
    Engine.update(engine);
    textSize(24)
    fill("white");
    text("score:"+score,100,100);  
    ground1.display();
    ground2.display();
    ground3.display()
    box1.display();
    box2.display();
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
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    polygon.display();
slingshot.display()
    getTime()
}
function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
async function getTime(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now")
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.currentDateTime
    var hour = datetime.slice(11,13)
    console.log(hour);
    if(hour>=06&&hour<=19){
        background(247, 173, 69);
    }
    else{
        background(56,44,44);
    }
    
}

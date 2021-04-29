const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine= Engine.create();
    world=engine.world;

    for(var k=0; k<=width;k=k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j=40;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j=15;j<=width;j=j+50){
      plinkos.push(new Plinko(j,175));
    }
    for(var j=40;j<=width;j=j+50){
      plinkos.push(new Plinko(j,275));
    }
    for(var j=15;j<=width;j=j+50){
      plinkos.push(new Plinko(j,375));
    }

    ground=new Ground(240,790,480,20);

    var render=Render.create({
      element: document.body,
      engine:engine,
      options:{
          width: 480,
          height:800,
          wireframes: false
      }
    });

    Engine.run(engine);
}

function draw() {
  background(0);
  ground.display();  

  for(var l=0;l<divisions.length;l++){
    divisions[l].display();
  }
  for(var m=0;m<plinkos.length;m++){
    plinkos[m].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for(var n=0;n<particles.length;n++){
    particles[n].display();
  }

  drawSprites();
}
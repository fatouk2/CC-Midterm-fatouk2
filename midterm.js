let x = 500;
let y = 500;
let count;
let current;
let bubble;
let bubbleArray = [];
let fishes;
let fish = [];
let waterArray = [];
let c = 25;
function setup() {
  count = 2000;
  current = 0;
  createCanvas(800, 800);
 // bubble = new Bubble();
  
  for(i = 0; i < 10; i++){
    fish[i] = (new Fish(20*i,300));
  fish.push(new Fish(random(31,202),random(132,255),random(6,255)));
}
   for(i = 0; i < 30; i++){
  bubbleArray.push(new Bubble(i));
}
  for(i = 0; i < 10; i++){
    waterArray.push(new Water(i));
  }
  
  
}

function draw() {
  if(frameCount < 500){
  background(21,171,255);
  fill(255);
  sand();
  for(x = 100; x<=width; x+=200){
  seatree(x,550);
  }
//  bubble.display();
  //bubble.move();
  //bubble.update();
  for(j = 0; j < 10; j++){
    fish[j].display();
     fish[j].move();
     fish[j].update();
  }
 for(i = 0; i < 30; i++){
    bubbleArray[i].display();
     bubbleArray[i].move();
     bubbleArray[i].update();
  }
  }
  if(frameCount > 500 && frameCount < 1000){
    background(255);
    fill(99,192,255);
    rect(0,300,width,400);
    for(i = 0; i<10; i ++){
      waterArray[i].display();
      waterArray[i].move();
      waterArray[i].update();
    }
    
  }
  
}

function sand(){
  strokeWeight(5);
  stroke(250,191,97,70)
  fill(250,191,97);
   ellipse(550,550,500,200);  // sand
  ellipse(150,550,500,200);  //sand  
}

function seatree(x,y){
  fill(255);
  ellipse(x,y-50,30,100);
  ellipse(x+30,y-50,50,20);
}

class Fish {
  constructor(fishcolor){
  this.position = new createVector(random(width),random(height));
  //  this.position = new createVector(100,600);
    
    this.velocity = new createVector(1);
    //this.size = random(5,20);
    
    this.fishcolor = fishcolor;
  }
  move(){
    this.position.add(this.velocity);
    
  }
  update(){
    if(this.position.x > width ){
      this.position.x = 0;
     //this.velocity.x = this.velocity.x *-1 
    }
    if (this.position.y > 300){
      //this.position.y = this.position.y *-1;
     this.position.y = random(100,300);
      //this.velocity.y = this.velocity.y *-1
    }
  }
  
  display(){
    strokeWeight(2);
    stroke(255);
   //fill ( random(31,202),random(132,255),random(6,255));
    fill(this.fishcolor);
    
    ellipse(this.position.x, this.position.y, 40,10);
  }
  
}

class Bubble {
  constructor(){
    this.position = new createVector(random(0,500),random(0,500));
    this.velocity = new createVector(1,2);
    this.size = random(5,20);
  }
  move(){
    this.position.add(this.velocity);
    
  }
  update(){
    if (this.position.y >= 500){
      this.velocity.y = this.velocity.y *-1
    }
    if(this.position.y <= 0){
      this.position.y = 500;
      this.position.x = random(0,500);
    }
  }
  
  display (){
    strokeWeight(2);
    stroke(255);
    fill(126,255,246);
    circle(this.position.x, this.position.y, this.size);
  }
  
}

class Water{
  constructor(){
  this.position = new createVector(random(width),random(500,800));
    this.position.x = random(width);
    this.position.y = random(300,800);
    this.velocity = new createVector(1);
  }
  move(){
    this.position.add(this.velocity);
  }
  update(){
    if(this.position.x > width ){
      this.position.x = 0;
    }
  }
  display(){
    noStroke();
   // fill(99,192,255,10);
    fill(81,223,255,50);
   // line(this.position.x,this.position.y, this.position.x+100,this.position.y+100);
    rect(this.position.x,this.position.y,100,30);
   // ellipse(this.position.x,this.position.y,100,30);
  }
}
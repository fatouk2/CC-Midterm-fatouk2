let x = 500;
let y = 500;
let count;
let current;
let bubble;
let bubbleArray = [];
let bubble2 = [];
let fishes;
let fish = [];
let c = 25;
let c1;
let c2;
let weeds=[];
tree = [];
leaf = [];
function setup() {
 
  count = 2000;
  current = 0;
  createCanvas(800, 800);
 // bubble = new Bubble();
  background(255);
   c1 = color(162,253,255);
  c2 = color(48,130,255);
 for(i= 0; i< 90; i++){
   weeds.push(new seaWeed(i));
 }
  for(i = 0; i < 10; i++){
  fish.push(new Fish([random(31,202),random(132,255),random(6,255)]));
}
   for(i = 0; i < 30; i++){
  bubbleArray.push(new Bubble(i));
}
 
  
  for(i = 0; i<10;i++){
    bubble2.push(new Bubble2(i));
  }
   for(i = 0;i<20;i++){
   tree.push(new drawTrees(i));
    //trees = new drawTrees();
  }
  for(i = 0; i<1000; i++){
    leaf.push(new drawLeaves(i));
  }
  
  
}


function draw() {
  if(frameCount < 500){
 // background(21,171,255);
  //fill(255);
   // background(0);
 rect1();
 
for(j=0;j<90;j++){
  weeds[j].show();
}
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
  function rect1(){
  noStroke();
  for(i = 0;i<=799;i++){
    fill(lerpColor(c1,c2,i/799)); 
    rect(0,0+i,800,i);
  }
}
  if(frameCount > 500 && frameCount < 1000){
    background(60,243,245,96);
  fill(255,247,96);
  circle(400,100,200);
  fill(33,255,6);
  rect(0,700,width,100);
  fill(88,245,245);
  ellipse(400,750,400,100,90);
    
    fishs(mouseX,750);
  for(j = 0; j<20; j++){
    tree[j].show();
  }
  for(j = 0; j<1000; j++){
    leaf[j].show();
  }
  
}

  
}


function fishs(x,y){
  ellipse(x,y, 70,30);
  triangle(x-35,y,x-65,y+20,x-65,y-20);
  fill(0);
  circle(x+30,y-2,5);
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
    noStroke();
   //fill ( random(31,202),random(132,255),random(6,255));
    fill(this.fishcolor);
   // fill(random(31,202),random(132,255),random(6,255));
    fishs(this.position.x,this.position.y);
  }
  
}

class Bubble {
  constructor(){
    this.position = new createVector(random(0,500),random(0,500));
    this.velocity = new createVector(1,2);
    this.size = random(45,70);
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
    fill(126,255,246,50);
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

class seaWeed{
  constructor(){
    this.x = random(0,width);
    this.y = random(300,500);
    this.width = random(10,15);
    this.height = 500;
    this.curve = 20;
    this.color = ([random(9,174),random(121,255),random(105,175)]);
  }
  show(){
    fill(this.color);
    rect(this.x,this.y,this.width,this.height,this.curve);
  }
  
  
}

class drawTrees{
  constructor(){
    this.x = random(0,width);
    this.y = 300;
    this.colors = ([random(128,205), random(0,133), random(0,63)]);
  }
  show(){
    fill(this.colors);
    rect(this.x,this.y,50,400);
    
  }
}

class drawLeaves{
  constructor(){
    this.x = random(0,width);
    this.y = random(200,500);
    this.color = ([random(47, 210), 255, random(5, 103)]);
  }
  show(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,25);
    
  }
}

class drawFlowers{
  constructor(){
    this.x = random(0,width);
    this.y = (500,800);
    this.color = ([random(145,230),random(95,230),random(109,250)]);
  }
  show(){
    fill(this.color);
   flow(this.x,this.y,30)
  }
}

class Bubble2 {
  constructor(){
    this.position = new createVector(random(0,500),random(0,500));
    this.velocity = new createVector(1,2);
    this.size = random(50,80);
  }
 // move(){
 //   this.position.add(this.velocity);
    
 // }
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


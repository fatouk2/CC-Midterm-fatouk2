let x = 500;
let y = 500;
let bubble;
let bubbleArray = [];
let fishes;
let fish = [];
let c = 25;
function setup() {
  createCanvas(800, 800);
 // bubble = new Bubble();
  for(i = 0; i < 10; i++){
    fish[i] = (new Fish(20*i,300));
  fish.push(new Fish((i),[random(31,202),random(132,255),random(6,255)]));
}
   for(i = 0; i < 30; i++){
  bubbleArray.push(new Bubble(i));
}
  
}

function draw() {
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
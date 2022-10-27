let fish1;
let fish2;
let fishArray = [];
let fish2Array = [];
let bubbleArray = [];

function setup(){
  createCanvas(800,800);
  //create fish
  for(i = 0; i<= 3; i++){
    
   fishArray.push (new Fish(50*i,200+50*i,[random(99,174),random(217,240),random(103,107)])); 
  }
  
  for(i = 0; i<=3; i++){
    fish2Array.push(new Fish(750,200+50*i, 255));
  }
  // print(fish1.x,fish1.y)
  
  for(i = 0; i<=3; i++){
    bubbleArray.push(new Bubble(createVector(100*i, 200)));
  }
  
}

function draw(){
background(67,213,246);
  // fish1.move();
  // fish1.display();
  
//  fishArray[0].move();
//  fishArray[0].display(64,219,76);
//  fishArray[1].move();
 // fishArray[1].display();
 // fishArray[2].move();
 // fishArray[2].display();
 // fish2Array[0].moveOpposite();
//  fish2Array[0].display();
 // fish2Array[1].moveOpposite();
 // fish2Array[1].display();
   for (i = 0; i<= 3; i++) {
     fishArray[i].move();
     fishArray[i].display();
   }
  for(i = 0; i<=3; i++){
    fish2Array[i].moveOpposite();
    fish2Array[i].display();   
  }
 }

 class Fish{
constructor(x,y,fishcolor){
  this.x = x;
  this.y = y;
  this.fishcolor = fishcolor;
}
   move(){
     this.x = this.x + 3;      
   }
   moveOpposite(){
     this.x = this.x - 3;  
   }

  display(){
    fill(this.fishcolor);
    ellipse(this.x,this.y,60,20);
  }

 }

class Bubble{
  constructor(pos){
    this.pos = pos;
  }
  move(){
    this.y = this.y +5; 
  }
  display(){
    ellipse(this.pos.x,this.pos.y,60,20);
  }
  
  
  
}
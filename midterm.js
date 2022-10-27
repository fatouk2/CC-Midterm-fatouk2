let fish;

function setup(){
  createCanvas(800,800);
  fish = new Fish();
  print(fish.x,fish.y)

}

function draw(){
background(0);
  fish.move();
  fish.display();
 }

 class Fish{
constructor(){
  this.x = 50;
  this.y = 350;
}
   move(){
     this.x = this.x + 5;      
   }

  display(){
    fill(255);
    ellipse(this.x,this.y,60,20);
  }

 }
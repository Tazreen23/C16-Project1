
var box1;

function setup() {
  createCanvas(600, 400);
  box1=new Box(50,100,50,50);
  box1.setwidth(100);
}

function draw() {
  background(220);
box1.show();
}


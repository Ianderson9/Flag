var star;
var x = 0;
var points = [
  640, 109,
  640, 787,
  641, 224,
  643, 672,
  1171, 448,
  110, 448,
  709, 379,
  457, 407,
  555, 457,
  701, 437,
  477, 501,
  450, 522,
  499, 488,
  524, 525,
  517, 547,
  550, 566,
  640, 623,
  708, 599,
  726, 579,
  752, 617,
  752, 593,
  751, 571,
  690, 573,
  640, 547,
  629, 519,
  618, 505,
  640, 484,
  666, 504,
  797, 527,
  828, 529,
  806, 547,
  793, 564,
  774, 574
];

var starpoints = [
  709, 379,
  457, 407,
  555, 457,
  701, 437,
  477, 501,
  450, 522,
  499, 488,
  524, 525,
  517, 547,
  550, 566,
  640, 623,
  708, 599,
  726, 579,
  752, 617,
  752, 593,
  751, 571,
  690, 573,
  640, 547,
  629, 519,
  618, 505,
  640, 484,
  666, 504,
  797, 527,
  828, 529,
  806, 547,
  793, 564,
  774, 574
];

var universe;
// var tR;
var reef;


var gCoords = function(a, r) {
  var cPair = [];
  cPair.push(cos(a) * r);
  cPair.push(sin(a) * r);
  return cPair;
}

function setup() {
  createCanvas(1280, 896);
  background(51);
  // dragger = new Dragger(width/2,height/2,448);
  universe = new Galaxy(width / 2, height / 2, 448);
  reef = new triReef();
  // tR = new triReef();
  universe.populate(starpoints);
  star = new World(0, 0, 0, "star");
  colorMode(HSB, 360);
}

function draw() {
  noStroke();
  background(146, 360, 61 * 3.6);
  // background(0);
  push();
  translate(universe.pos.x, universe.pos.y);
  reef.show();
  pop();
  fill(52.5, 360, 360);

  beginShape();
  vertex(640, 109);
  vertex(1171, 448);
  vertex(640, 787);
  vertex(110, 448);
  endShape();
  // x += dragger.vel.x;
  // x = constrain(x,0,width);
  // line(x,0,x,height);
  universe.update();
  push();
  translate(universe.pos.x, universe.pos.y);
  if (reef.front) {
    reef.show();
  }
  noFill();
  strokeWeight(0);
  stroke(338, 300, 75 * 3.6);
  ellipse(0, 0, 55, 55);
  pop();
  // for(var i = 0; i < points.length; i+=2) {
  //   stroke(354,37*3.6,360,360);
  //   strokeWeight(3);
  //   point(points[i],points[i+1]);
  //   if(dist(mouseX,mouseY,points[i],points[i+1]) <= 20) {
  //     text(points[i] + ", " + points[i+1],points[i],points[i+1]);
  //   }
  // }
  // fill(338,300,75*3.6);
  // ellipse(mouseX,mouseY,100,100);
  // tR.expandBy(1);
  // tR.show();
}

function mouseClicked() {
  console.log(mouseX, mouseY);
  console.log(universe.zoom);
}

// 997, 448

// 640, 109,
// 640, 787,
// 641, 224,
// 643, 672,
// 1171, 448,
// 110, 448,
// 709, 379,
// 457, 407,
// 555, 457,
// 701, 437,
// 477, 501,
// 450, 522,
// 499, 488,
// 524, 525,
// 517, 547,
// 550, 566,
// 640, 623,
// 708, 599,
// 726, 579,
// 752, 617,
// 752, 593,
// 751, 571,
// 690, 573,
// 640, 547,
// 629, 519,
// 618, 505,
// 640, 484,
// 666, 504,
// 797, 527,
// 828, 529,
// 806, 547,
// 793, 564,
// 774, 574
//
// Caos e Progresso

function World(y,a,d,shape,s) {
  this.y = y;
  this.a = a;
  this.d = d;
  this.s = s;
  this.shape = new Shapes().getShape(shape,this.s);

  this.show = function() {
    noStroke();
    fill(360,0,360);
    beginShape();
    for(var i = 0; i < this.shape.length; i++) {
      vertex(this.shape[i].x,this.shape[i].y);
    }
    endShape();
  }
}

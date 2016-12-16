function Shapes() {
  this.verts = [];
  this.getShape = function(n,s) {
    switch(n) {
      case "square":
        this.verts.push(createVector(-1,1));
        this.verts.push(createVector(1,1));
        this.verts.push(createVector(1,-1));
        this.verts.push(createVector(-1,-1));
        break;
      case "star":
        for(var i = 0; i < 5; i++) {
          var xpart = gCoords(i*TWO_PI/5,1)[0];
          var ypart = gCoords(i*TWO_PI/5,1)[1];
          this.verts.push(createVector(xpart,ypart));
          xpart = gCoords((i+0.5)*TWO_PI/5,0.5)[0];
          ypart = gCoords((i+0.5)*TWO_PI/5,0.5)[1];
          this.verts.push(createVector(xpart,ypart));
        }
        break;
      default:
        this.verts.push(createVector(0,0));
    }
    for(var i = 0; i < this.verts.length; i++) {
      this.verts[i].mult(s);
    }

    return this.verts;
  }
}

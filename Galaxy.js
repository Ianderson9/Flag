function Galaxy(x, y, r) {
  this.pos = createVector(x, y);
  this.angle = 0;
  this.zoom = 1;
  this.r = r;
  this.worlds = [];
  this.draggers = []
  this.draggers[0] = new Dragger(this.pos.x, this.pos.y, this.r);
  //this.populate(points);

  this.show = function() {
    resetMatrix();
    fill(220, 360, 46.3 * 3.6);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    for (var i = 0; i < this.worlds.length; i++) {
      push();
      translate(this.pos.x, this.pos.y);
      translate(this.zoom * (cos(this.worlds[i].a + this.angle) * this.worlds[
        i].d), this.worlds[
        i].y * this.zoom);
      scale(map((sin(this.worlds[i].a + this.angle) * this.worlds[i].d) / (
        this.r / 2), -1, 1, 0, 1));
      this.worlds[i].show();

      pop();
    }

  }

  this.update = function() {
    if (this.zoom < 1) {
      this.zoom = lerp(this.zoom, 1, .4);
    }
    this.angle += -this.draggers[0].vel.x / 400;
    if (this.draggers[0].vel.x == 0) {
      this.angle += .0005;
    }
    reef.expandBy(this.draggers[0].vel.x / 100);
    this.show();
    for (var i = 0; i < this.draggers.length; i++) {
      this.draggers[i].update();
    }
    if (this.draggers[1]) {
      // fill(360);
      // ellipse(this.draggers[1].pos.x, this.draggers[1].pos.y, 55, 55);
      // console.log(this.draggers[1]);
      // this.draggers[1].thick = 27;
      if (this.draggers[1].moveAble) {
        this.draggers[1].pos.add(this.draggers[1].vel);
        this.draggers[1].thick = map(this.draggers[1].maxR, 27, 55, 27, 3);
      }


    }

    // fill(360);
    // ellipse(this.dragger.value.x+this.pos.x,this.dragger.value.y+this.pos.y,10,10);
  }

  this.populate = function(pts) {
    for (var i = 0; i < pts.length; i += 2) {
      relY = pts[i + 1] - this.pos.y;
      relX = pts[i] - this.pos.x;
      onX = sqrt((this.r / 2) * (this.r / 2) - relX * relX);
      var depth = random(-sqrt((onX) * (onX) - relY * relY), sqrt((onX) * (
        onX) - relY * relY));
      //depth = constrain(depth,-sqrt((relX)*(relX)-relX*relX),sqrt((relX)*(relX)-relX*relX));
      this.worlds.push(new World(relY, atan2(depth, relX), sqrt(sq(relX) + sq(
        depth)), "star", 7));
    }
  }
}

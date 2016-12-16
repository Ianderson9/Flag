function Dragger(x, y, r) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.maxR = r;
  this.areaR = 20;
  this.value = createVector(0, 0);
  this.dragging = false;
  this.thick = 0;
  this.fc = color(0, 0, 0, 0);
  this.sc = color(360, 0, 360);
  this.active = true;
  this.rAim = 55;
  this.gTrig = false;
  this.moveAble = true;
  this.partAa = false;

  this.show = function() {
    resetMatrix();
    push();
    fill(this.fc);
    stroke(this.sc);
    strokeWeight(this.thick);
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, this.maxR, this.maxR);
    // ellipse(this.value.x, this.value.y, 10, 10);
    pop();

  }

  this.update = function() {
    if (this.active) {
      var m = createVector(mouseX, mouseY);
      if (mouseIsPressed && p5.Vector.dist(m, this.pos) <= this.maxR / 2) {
        this.dragging = true;
      } else {
        this.dragging = false;
      }
      if (this.dragging) {
        // this.value.set(p5.Vector.sub(m, this.pos));
        this.vel.set(mouseX - pmouseX, mouseY - pmouseY);
      }
    }

    this.move();

    this.show();
    if (this.partAa) {
      this.partA();
    }
  }

  this.move = function() {
    dragMag = 0.05;
    var dragForce = this.vel.copy();
    dragForce.mult(-1);
    dragForce.normalize();
    dragForce.mult(dragMag);
    if (this.vel.mag() < .1) {
      this.vel.setMag(0);
      dragForce.mult(0);
    }
    this.vel.add(dragForce);
    this.vel.limit(100);
    this.value.add(this.vel);
    if (this.value.mag() > this.maxR / 2) {
      this.value.set(0, 0);
    }
  }

  this.partA = function() {

    this.active = true;
    this.maxR = lerp(this.maxR, this.rAim, 0.1);
    if (p5.Vector.dist(universe.pos, this.pos) > 224 + 27) {
      this.pos = p5.Vector.lerp(this.pos, createVector(997, 448), .2);
    }
    if (p5.Vector.dist(this.pos, createVector(997, 448)) < 1) {

      this.rAim = 150;
      this.moveAble = false;
    }
    if (!this.moveAble) {
      this.thick = 0;
      for (var i = 0; i < 10; i++) {
        var y = map(i, 0, 5, 0, this.maxR);
        strokeWeight(5);
        stroke(52.5, 360, 360);
        var rlY = this.pos.y - this.maxR / 2 + (y + this.value.y) %
          this.maxR;
        rlY = constrain(rlY, this.pos.y - (this.maxR / 2) - 5, this.pos.y +
          this.maxR /
          2);
        var rlW = map(abs((this.pos.y + this.maxR / 2) - rlY), 0, this.maxR /
          2,
          1, 0);
        line(this.pos.x - 20 * cos(rlW), rlY, this.pos.x + 20 * cos(rlW), rlY);
      }
      universe.zoom += this.vel.y / 400;
    }
  }
}

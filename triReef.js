function triReef() {
  this.amt = 100;
  this.d = 0;
  this.maxE = 400;
  this.r = 0;
  this.maxD = 540;
  this.front = false;
  this.stuck = false;
  this.spawnA = true;

  this.expandBy = function(num) {
    if (!this.stuck) {
      this.d += num;
      this.d = constrain(this.d, 0, this.maxE + 54);
      this.r = this.maxD * sin(map(this.d, 0, this.maxE, 0, PI));
      if (this.d > this.maxE / 2) {
        this.front = true;
      } else {
        this.front = false;
      }
      if (this.r < -222) {
        this.stuck = true;
      }
      if (this.d > this.maxE && this.spawnA) {
        universe.draggers[1] = new Dragger(universe.pos.x, universe.pos.y, 27);
        universe.draggers[1].active = false;
        universe.draggers[1].fc = color(146, 360, 61 * 3.6);
        this.spawnA = false;
      }
      // console.log(this.r);
    } else {
      this.r = -222;
      universe.draggers[1].partAa = true;
      // if (!mouseIsPressed) {
      //   universe.draggers[1].partA();
      // }
    }
  }

  this.show = function() {
    fill(338, 300, 75 * 3.6);
    noStroke();
    for (var i = 0; i < this.amt; i++) {
      var a = map(i, 0, this.amt, 0, TWO_PI);
      push();
      translate(cos(a) * this.r, sin(a) * this.r);
      rotate(a);
      triangle(0, 7, -30, 0, 0, -7);
      pop();
    }
  }
}

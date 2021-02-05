class Roof {
  constructor(x, y, width, height) {
    var options = {
        isStatic: true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;

    rectMode(CENTER);
    stroke(232, 0, 214);
    strokeWeight(2);
    fill(255, 0, 236);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
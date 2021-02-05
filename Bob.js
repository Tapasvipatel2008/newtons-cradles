class Bob {
  constructor(x, y, r) {
    var options = {      
      isStatic : false,
      restitution : 1,
      friction : 2,
      density : 4,
    };
    this.x = x;
    this.y = y;
    this.radius = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
  }
  display(){
    var position = this.body.position;
    var angle = this.body.angle;

    push();
    translate(position.x, position.y);
    rotate(angle);
    stroke(232, 0, 214);
    strokeWeight(1);
    fill(255, 0, 236);
    ellipseMode(RADIUS);  
    ellipse(0,0, this.radius,35);
    pop();
    }
};                                                                                  
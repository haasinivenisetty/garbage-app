class Ball 
{
  constructor(x, y, r) 
  {
    let options = {
      restitution:0.9,
      friction:0,
      density:1.3
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y, this.r );
    pop();
  }
  
}



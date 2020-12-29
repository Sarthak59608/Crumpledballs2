class paper {
    constructor(x,y,radius) {
      var options={
restitution : 0.3,
density:1,
friction:0.5
      }
      this.image=loadImage("paper.png");
     this.body = Bodies.circle(x,y,radius,options);
    
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
      //imageMode(CENTER);
      fill("red");
      push()
     translate(pos.x,pos.y)
      image(this.image,0,0,this.radius,this.radius);
      pop()
    }
  };
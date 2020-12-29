class dustbin{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=190;
		this.Thickness=20;
		this.image=loadImage("dustbingreen.png");
		this.LowRect=Bodies.rectangle(this.x, this.y, this.Width, this.Thickness, {isStatic:true})
        
        this.leftRect=Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
		
		

		this.rightRect=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
		
        World.add(world, this.LowRect);
        
        World.add(world, this.rightRect);
        
		World.add(world, this.leftRect);

	}
	display(){
            var posBottom=this.LowRect.position;
            
            var posLeft=this.leftRect.position;
            
			var posRight=this.rightRect.position;
			fill("yellow");
              
			imageMode(CENTER);
			
		image(this.image,this.x,this.y-80,this.Width,this.Height);
			//rect(posLeft.x,posLeft.y,this.Thickness,this.Height);
		    //rect(posRight.x,posRight.y,this.Thickness,this.Height);
			//rect(posBottom.x,posBottom.y,this.Width,this.Thickness);
           
          
}

}
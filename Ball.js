class Ball{
    constructor(x,y,radius){
        //declaring options for the body in JSON format
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

                    
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        //adding ground to the Physics Engine
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        this.radius=radius
        World.add(myWorld, this.body);  
    }
    display(){
        var ballposition=this.body.position;
        push ()
        translate (ballposition.x,ballposition.y)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius*2)
        pop ()
    }
}


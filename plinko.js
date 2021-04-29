class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.4,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.x,this.y,this.r,this.r);
    }
}
class Drop{
    constructor(x,y){
        var options = {
            friction:0.1,
            density:0.5,
            restitution:0,
            isStatic:false
        }
        this.rain = Bodies.circle(x,y,1,options);
        this.radius = 5;
        this.color = color("blue")
        World.add(world, this.rain);
    }
    display(){
        var pos = this.rain.position;
        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
      }

      update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    
}


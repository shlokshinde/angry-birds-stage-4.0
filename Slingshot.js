class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingIMG1 = loadImage("sprites/sling1.png");
        this.slingIMG2 = loadImage("sprites/sling2.png");
        this.slingIMG3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingIMG1,200,20);
        image(this.slingIMG2,175,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            if(pointA.x < 220){
            strokeWeight(7.5);
            stroke("#421E0B");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.slingIMG3,pointA.x-30,pointA.y-10,10,35);
            }
            else{
            strokeWeight(7.5);
            stroke("#421E0B");
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.slingIMG3,pointA.x+25,pointA.y-10,10,35);    
            }
            pop()
        }
    }
    
}
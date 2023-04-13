// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return(this.radius*2);
    }

    get circumference(){
        return(Math.PI*this.radius*2);
    }

    get area(){
        return (Math.PI*this.radius*this.radius);
    }

    set diameter(newDiameter){
        
        this.radius = newDiameter/2

        return(this.radius);
    }

    set circumference(newCircumference){
        this.radius = newCircumference/(2*Math.PI)
        return this.radius;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)

        return this.radius;
    }
}

const circle = new Circle(5);
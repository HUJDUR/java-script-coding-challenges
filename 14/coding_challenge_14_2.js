class Car {
    constructor(made, speed) {
        this.made = made;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
    }

    get speedUS() {
        return speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6; 
    }
}

const ford = new Car('ford', 120);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
ford.accelerate();
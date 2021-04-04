const Car = function(make, speed) {
    this.make = make,
    this.speed = speed
}

Car.prototype = {
    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    },

    brake() {
        this.speed -= 5;
        console.log(this.speed);
    }
}

const bmw = new Car('BMW', 120);
const mercedes =  new Car('Mercedes', 95);

bmw.accelerate();
mercedes.brake();

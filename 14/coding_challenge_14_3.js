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

const ElectricCar = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo; 
    console.log(this.charge);
}

ElectricCar.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}!`);
}

const tesla = new ElectricCar('Tesla', 120, 23);
tesla.brake();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

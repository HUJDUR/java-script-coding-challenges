class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);

        return this;
    }
}

class EVCl extends CarCl {

    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo; 
        console.log(this.#charge);
        
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}!`);

        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90).brake();
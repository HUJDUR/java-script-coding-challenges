const mark = {
    name: 'Mark Miller',
    weight: 92,
    height: 1.95,

    calcBMI: function() {
        return this.bmi = this.weight / this.height **2;
    }
};

const john = {
    name: 'John Smith',
    weight: 78,
    height: 1.69,

    calcBMI: function() {
        return this.bmi = this.weight / this.height **2;
    }
};

john.calcBMI() > mark.calcBMI() ? console.log(`${john.name}'s BMI is higher than ${mark.name}'s! ${john.bmi} vs ${mark.bmi}`) : console.log(`${mark.name}'s BMI is higher than ${john.name}'s! ${mark.bmi} vs ${john.bmi}`);
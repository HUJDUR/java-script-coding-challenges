const data = 275;

const tip = data > 50 && data < 300 ? .15 * data : .20 * data;
console.log(`The bill was ${data}, the tip was ${tip}, and the total value ${data + tip}`);
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => {
    dog['foodPortion'] = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${sarahsDog.curFood > sarahsDog.foodPortion ? 'much.' : 'little.'}`);

// 3
const ownersEatingTooMuch = dogs.filter(dog => dog.curFood > dog.foodPortion);
const ownersEatingTooLittle = dogs.filter(dog => dog.curFood < dog.foodPortion);

// 4
ownersEatingTooMuch.forEach(dog => {
    console.log(`${dog.owners.flat().join(' and ')}'s dogs are eating too much!`);
});

ownersEatingTooLittle.forEach(dog => {
    console.log(`${dog.owners.flat().join(' and ')}'s dogs are eating too little!`);
});

// 5
console.log(dogs.some(dog => dog.curFood === dog.foodPortion));

// 6
console.log(dogs.some(dog => dog.curFood > (dog.foodPortion * 0.90) && dog.curFood < (dog.foodPortion * 1.10)));

// 7
const okayAmount = dogs.filter(dog =>  dog.curFood > (dog.foodPortion * 0.90) && dog.curFood < (dog.foodPortion * 1.10));

// 8 
const arrCopy = dogs.slice().sort((a, b) => a.foodPortion - b.foodPortion);

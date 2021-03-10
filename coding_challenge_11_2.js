function calcAverageHumanAge(ages) {
    const dogYears = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
    const remainingDogs = dogYears.filter(dog => dog >= 18);
    const averageHumaneAge = remainingDogs.reduce((acc, age) => acc + age, 0) / remainingDogs.length;

    console.log(averageHumaneAge);

}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
const calcAverageHumanAge = ages => {
    const dogYears = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(dog => dog >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

    console.log(dogYears);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrect = dogsJulia.slice(1, dogsJulia.length - 2);

    const allDogs = dogsJuliaCorrect.concat(dogsKate);
    allDogs.forEach((dog, i) => {
        if (dog >= 3)
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old!`);
        else {
            console.log(`Dog number ${i + 1} is still a puppy!`);
        }
    });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
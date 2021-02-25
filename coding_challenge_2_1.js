const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) 
        console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas >= 2 * avgDolphins) 
        console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);  
    else
        console.log('No team wins...');
}

checkWinner(dolphinsAverage, koalasAverage);
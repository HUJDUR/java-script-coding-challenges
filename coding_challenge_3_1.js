const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let stringResult = '';

    for (let i = 0; i < arr.length; i++) stringResult += `... ${arr[i]} degrees celsius in ${i + 1} days `;

    console.log(stringResult);
}

printForecast(testData1);
printForecast(testData2);
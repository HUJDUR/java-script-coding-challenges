const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bil) {
    return bil >= 50 && bil <= 300 ? bil * .15 : bil * .20;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
}

function calcAverage(dataArray) {
    let sum = 0;

    for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
    }
    
    return sum / dataArray.length;
}

console.log(calcAverage(totals));
console.log(tips);
console.log(totals);
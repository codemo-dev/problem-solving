let grades = [85, 42, 90, 67, 58, 100, 73, 39];

function liquidation(list) {
    let quantity = list.length;
    let highestDegree = Math.max(...list);
    let lowestDegree = Math.min(...list);
    let total = list.reduce((acc,curr) => (acc + curr),0);
    let successful = list.filter(el => el >= 50);
    let failed = list.filter(el => el < 50);
    return `
    Average grades : ${total / quantity},
    The highest degree : ${highestDegree},
    The lowest degree : ${lowestDegree},
    Successful students : ${successful},
    The number of failed Students : ${failed.length}
    `;
}

console.log(liquidation(grades));
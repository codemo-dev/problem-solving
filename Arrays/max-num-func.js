let nums = [1, 20, 40, 17, 38, 0, -3];

function biggestValue(arr) {
    let result = arr.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
    });
    return result;
}

console.log(biggestValue(nums));
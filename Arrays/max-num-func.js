/**
 * Challenge: Find Maximum Number
 * Description: A function that takes an array of numbers as input and returns the largest number.
 * Logic: Iterate through the array and compare each element with the current maximum.
 */

let nums = [1, 20, 40, 17, 38, 0, -3];

function biggestValue(arr) {
    let result = arr.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
    });
    return result;
}

console.log(biggestValue(nums));
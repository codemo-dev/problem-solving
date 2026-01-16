/**
 * Challenge: Operations on Data Types
 * Description: Exploring how JavaScript handles different data types and performing basic operations.
 * Logic: Practicing arithmetic, string concatenation, and understanding type conversion.
 */

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    console.log(firstInteger + parseInt(secondInteger));
    
    const firstDecimal = 4.0;
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
    
}
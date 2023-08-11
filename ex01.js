/** 
 * TODO: Write a JavaScript program to compute the average of an array.
 * ? after mapping each element to a value using the provided function.
 */

function getSumArray(...numbers) {
    const sum = numbers.reduce((cache, number) => cache + number, 0);
    return sum;
}

const average = function(...arrayNumbers) {
    let result = getSumArray(...arrayNumbers) / arrayNumbers.length;
    console.log("Array: %s - Average: %d", arrayNumbers, result.toFixed(2));
    return result;
}

average(13, 15, 89, 63, 46, 25);
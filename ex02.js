/** 
 * TODO: Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value.
 * ? This is done using the percentile formula.
 */

function getPercentile(number, totalNumbers) {
    return (number / totalNumbers) * 100;
}

const lessThanOrEqualTo = function(arrayNumbers, comparator) {
    const count = arrayNumbers.filter(num => num <= comparator).length;
    const percentile = getPercentile(count, arrayNumbers.length);
    console.log("Array: %s, the %s% is less than or equal to %s", arrayNumbers, percentile.toFixed(2), comparator);
}

lessThanOrEqualTo([4,15,47,23,2,13],18);
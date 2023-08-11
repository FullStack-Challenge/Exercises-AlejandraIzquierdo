/** 
 * * Exercise 5: Function Overloads
 * TODO: Create a function that accepts either a number or a string and returns their length.
 * TODO: Define function overloads for the above function to handle both number and string inputs separately.
*/

const getLength = (value: string | number) => value.toString().length;


function getLength2(value: number): string;
function getLength2(value: string): string;
function getLength2(value: any): string {
    return `Length of number is: ${getLength(value)}`;
}

console.log(getLength(3));
console.log(getLength("32"));

console.log(getLength2(3));
console.log(getLength2("413"));
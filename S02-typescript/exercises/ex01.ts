/** 
 * * Exercise 1: Basic Types
 * TODO: Create a variable with a string value and another with a number value.
 * TODO: Define a function that takes two numbers as parameters and returns their sum.
*/

let sval: string = "2";
let nval: number = 2;

const add = (nval1: number, nval2: number) => nval1 + nval2;

console.log("String: %s, Number: %d", sval, nval);
console.log("Sum result: %d", add(3, 4));
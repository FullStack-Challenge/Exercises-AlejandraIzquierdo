/** 
 * * Exercise 9: Type Inference
 * TODO: Declare a variable with an initial value and don't specify its type. TypeScript should infer the type based on the value.
*/

let hobby = "Tennis";
let year = 1999;

let subject: string | number;

subject = 50067;
subject = "Functional Programming";

console.log(hobby);
console.log(year);
console.log(subject);
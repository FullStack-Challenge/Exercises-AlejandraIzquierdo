"use strict";
/**
 * * Exercise 6: Arrays and Generics
 * TODO: Create an array of numbers and calculate their sum using the reduce method.
 * TODO: Write a function that takes an array and a value, and returns the index of the value in the array or -1 if not found.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const sum = numbers.reduce(((carry, value) => carry + value), 0);
const getIndexOfValue = (array, value) => array.findIndex((elem) => elem == value);
console.log("Array of numbers sum: %d", sum);
console.log("Index of value: %d", getIndexOfValue(numbers, 5));

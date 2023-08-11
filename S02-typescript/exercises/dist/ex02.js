"use strict";
/**
 * * Exercise 2: Type Annotations
 * TODO: Define a function that calculates the area of a rectangle. It should take two parameters: width and height, both of type number.
 * TODO: Create an interface for a Book with properties like title, author, and publication year.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRectangleArea = (width, height) => width * height;
console.log("Rectangle area calculated: %d", calculateRectangleArea(3, 4));

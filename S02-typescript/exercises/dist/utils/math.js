"use strict";
/**
 * * Exercise 10: Modules
 * TODO: Create a module that exports functions for basic math operations like addition, subtraction, multiplication, and division. Import and use these functions in another file to perform calculations.
 * TODO: Build a module that fetches weather data from a weather API. Export functions to get current weather conditions and forecasts. Import these functions and display weather information in a console application.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiplication = exports.subtraction = exports.addition = void 0;
const addition = (x, y) => x + y;
exports.addition = addition;
const subtraction = (x, y) => x - y;
exports.subtraction = subtraction;
const multiplication = (x, y) => x * y;
exports.multiplication = multiplication;
const division = (x, y) => x / y;
exports.division = division;

/** 
 * * Exercise 10: Modules
 * TODO: Create a module that exports functions for basic math operations like addition, subtraction, multiplication, and division. Import and use these functions in another file to perform calculations.
 * TODO: Build a module that fetches weather data from a weather API. Export functions to get current weather conditions and forecasts. Import these functions and display weather information in a console application.
*/

export const addition = (x: number, y: number): number => x + y;
export const subtraction = (x: number, y: number): number => x - y;
export const multiplication = (x: number, y: number): number => x * y;
export const division = (x: number, y: number): number => x / y;
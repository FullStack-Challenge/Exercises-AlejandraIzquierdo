/** 
 * * Exercise 10: Modules
 * TODO: Create a module that exports functions for basic math operations like addition, subtraction, multiplication, and division. Import and use these functions in another file to perform calculations.
*/

import {addition, subtraction, multiplication, division} from './utils/math';

let result = addition(4, 5);
let result2 = subtraction(4, 5);
let result3 = multiplication(4, 5);
let result4 = division(4, 5).toFixed(2);

console.log("Operations => Sum: %d, Subs: %d, Multi: %d, Div: %d", result, result2, result3, result4);


/** 
 * * Exercise 10: Modules
 * TODO:  . Export functions to get current weather conditions and forecasts. Import these functions and display weather information in a console application.
*/

import { WeatherApi } from "./utils/WeatherApi";

const weatherApi = new WeatherApi();

const getWeatherByCityName = (cityName: string) => {
    weatherApi.fetchByCity(cityName)
            .then((response) => {
                if (!response.ok) {
                throw new Error(`Error Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Weather data: \n', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}

getWeatherByCityName("London");

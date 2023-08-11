"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WeatherApi_API_URL, _WeatherApi_API_KEY;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherApi = void 0;
class WeatherApi {
    constructor() {
        _WeatherApi_API_URL.set(this, 'https://api.openweathermap.org/data/2.5/');
        _WeatherApi_API_KEY.set(this, 'b81b69cbd3ae751adf4a7a4b6700a419');
    }
    /*getCurrentWeather(apiUrl)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parseamos la respuesta JSON
    })
    .then((data: Todo) => {
        // Manejamos los datos obtenidos de la API
        console.log('Data from API:', data);
        console.log(`Todo Title: ${data.title}`);
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });*/
    fetchByCity(cityName) {
        let pathMissing = `weather?q=${cityName}&appid=${__classPrivateFieldGet(this, _WeatherApi_API_KEY, "f")}`;
        let wholePath = `${__classPrivateFieldGet(this, _WeatherApi_API_URL, "f")}${pathMissing}`;
        return fetch(wholePath);
    }
}
exports.WeatherApi = WeatherApi;
_WeatherApi_API_URL = new WeakMap(), _WeatherApi_API_KEY = new WeakMap();

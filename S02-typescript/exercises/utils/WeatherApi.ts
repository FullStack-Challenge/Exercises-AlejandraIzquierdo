export class WeatherApi {
        #API_URL = 'https://api.openweathermap.org/data/2.5/';
        #API_KEY = 'b81b69cbd3ae751adf4a7a4b6700a419';

        fetchByCity(cityName: string) {
            let pathMissing = `weather?q=${cityName}&appid=${this.#API_KEY}`;
            let wholePath = `${this.#API_URL}${pathMissing}`;
            return fetch(wholePath);
        }

}
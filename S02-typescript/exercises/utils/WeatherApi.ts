export class WeatherApi {
        #API_URL = 'https://api.openweathermap.org/data/2.5/';
        #API_KEY = 'b81b69cbd3ae751adf4a7a4b6700a419';

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

        fetchByCity(cityName: string) {
            let pathMissing = `weather?q=${cityName}&appid=${this.#API_KEY}`;
            let wholePath = `${this.#API_URL}${pathMissing}`;
            return fetch(wholePath);
        }

}
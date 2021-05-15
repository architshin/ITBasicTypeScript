export class WeatherInfo {
	private _weatherInfoJSON: WeatherInfoJSON;
	constructor(weatherInfoJSON: WeatherInfoJSON) {
		this._weatherInfoJSON = weatherInfoJSON; 
	}

	get cityName() {
		return this._weatherInfoJSON.name;
	}
	get weatherDesc() {
		const weatherArray = this._weatherInfoJSON.weather;
		const weather = weatherArray[0];
		return weather.description;
	}
	get latitude() {
		const coord = this._weatherInfoJSON.coord;
		return coord.lat;
	}
	get longitude() {
		const coord = this._weatherInfoJSON.coord;
		return coord.lon;
	}
}

interface WeatherInfoJSON {
	coord:
		{
			lon: number,
			lat: number
		},
	weather: { id: number, main: string, description: string, icon: string }[],
	base: string,
	main: 
		{
		temp: number,
		feels_like: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		humidity: number
		},
	visibility: number,
	wind:
		{
			speed: number,
			deg: number
		},
	clouds:
		{
			all: number 
		},
	dt: number,
	sys:
		{
			type: number,
			id: number,
			country: string,
			sunrise: number,
			sunset: number
		},
	timezone: number,
	id: number,
	name: string,
	cod: number
}

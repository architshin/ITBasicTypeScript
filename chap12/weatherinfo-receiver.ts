import fetch from "node-fetch";
import {WeatherInfo} from "./WeatherInfo";

export async function receiveWeatherInfo(url: string): Promise<WeatherInfo> {
	const response = await fetch(url);
	const weatherInfoJSON = await response.json();
	const weatherInfo = new WeatherInfo(weatherInfoJSON);
	return weatherInfo;
}

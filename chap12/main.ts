import fetch from "node-fetch";

async function receiveWeatherInfo(url: string) {
	const response = await fetch(url);
	const weatherInfoJSON = await response.json();
	console.log(weatherInfoJSON);
}

const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather?lang=ja";
const appId = "913136635cfa3182bbe18e34ffd44849";
let q = "Himeji";

const urlFull = `${weatherinfoUrl}&q=${q}&appid=${appId}`;
receiveWeatherInfo(urlFull);

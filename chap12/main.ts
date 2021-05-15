import {receiveWeatherInfo} from "./weatherinfo-receiver";
import {WeatherInfo} from "./WeatherInfo";

const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather?lang=ja";
const appId = "913136635cfa3182bbe18e34ffd44849";
let q = "Himeji";

const urlFull = `${weatherinfoUrl}&q=${q}&appid=${appId}`;
const promise = receiveWeatherInfo(urlFull);
promise.then(
	function(response: WeatherInfo) {
		const message = `現在の${response.cityName}の天気は、${response.weatherDesc}です。\n緯度は${response.latitude}で軽度は${response.longitude}です。`;
		console.log(message);
	}
);
promise.catch(
	function(error) {
		const message = `エラーが発生しました。\nエラー内容: ${error}`;
		console.log(message);
	}
);
promise.finally(
	function() {
		console.log("全ての処理が終了しました!");
	}
)

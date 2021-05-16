//receiveWeatherInfo関数をインポート。
import {receiveWeatherInfo} from "./weatherinfo-receiver";
//WeatherInfoクラスをインポート。
import {WeatherInfo} from "./WeatherInfo";

//アクセス先URLの基本部分の変数を用意。
const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather?lang=ja";
//APIキーの変数を用意。ここに各自の文字列を記述する!!
const appId = "913136635cfa3182bbe18e34ffd44849";
//都市名を表す変数を用意。
let q = "Himeji";

//実際にアクセスするURLを生成。
const urlFull = `${weatherinfoUrl}&q=${q}&appid=${appId}`;
//receiveWeatherInfo関数を実行。
const promise = receiveWeatherInfo(urlFull);
//非同期処理が成功した場合の処理を定義。
promise.then(
	function(weatherInfo: WeatherInfo) {
		//WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成。
		const message = `現在の${weatherInfo.cityName}の天気は、${weatherInfo.weatherDesc}です。\n緯度は${weatherInfo.latitude}で軽度は${weatherInfo.longitude}です。`;
		//表示。
		console.log(message);
	}
);
//非同期処理がエラーとなった場合の処理を定義。
promise.catch(
	function(error) {
		//エラー表示。
		const message = `エラーが発生しました。\nエラー内容: ${error}`;
		console.log(message);
	}
);
//非同期処理の成功、エラーにかかわらず行う処理を定義。
promise.finally(
	function() {
		console.log("全ての処理が終了しました!");
	}
)

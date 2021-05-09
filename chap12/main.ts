import fetch from "node-fetch";

const weatherinfoUrl = "https://openweathermap.org/data/2.5/weather?lang=ja";
const appId = "913136635cfa3182bbe18e34ffd44849";
let q = "Himeji";

const urlFull = `${weatherinfoUrl}&q=${q}&appid=${appId}`;


const promise = fetch(urlFull);
console.log(promise);

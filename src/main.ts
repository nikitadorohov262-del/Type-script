const app = document.querySelector("#app")

if (app){
	app.innerHTML = `
		<input type="text" id="cityInput" placeholder = "Введите город" />
		<button id="getWeatherBtn">Узнать погоду</button>
		<div id="result"></div>	
	`;
}

const input = document.querySelector("#cityInput")
const button = document.querySelector("#getWeatherBtn")
const result = document.querySelector("#result")

button?.addEventListener("click", () =>{
	const city = input?.value;
		if (city) {getWeather(city);}
});

interface WeatherResponse{
	current_condition: {
		temp_C: string;
		FeelsLikeC: string;
	}[];
	nearest_area: {
		areaName: {
			value: string;
		}[];
	}[];
}


async function getWeather(city) {
	const response = await fetch(`https://wttr.in/${city}?format=j1`);
	const data: WeatherResponse = await response.json();

	const temp = data.current_condition[0].temp_C;
	const feels = data.current_condition[0].FeelsLikeC;
	const citys = data.nearest_area[0].areaName[0].value;
	
	if (result){
		result.innerHTML = `<h1>${citys}</h1><p>Температура: ${temp}°C</p><p>Ощущается как: ${feels}°C</p>`;
	}
};








function getWeather(){

let city = document.getElementById("city").value;

document.getElementById("result").innerHTML =

`
<h2>${city}</h2>

<img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" width="120">

<h1>28°C</h1>

<p>🌤️ Partly Cloudy</p>

<p>💧 Humidity: 65%</p>

<p>🌬️ Wind: 12 km/h</p>

<p>🌧️ Rain Chance: 20%</p>
`;

}
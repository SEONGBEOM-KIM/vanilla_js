const weatherSpan = document.querySelector(".js-weather");
const API_KEY = "facbdc222672f0995f241541ec56401b";
const COORDS = "geoCoords";

function paintWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const location = json.name;
      weatherSpan.innerText = `${temperature} @ ${location}`;
    });
}

function saveGeoCoords(object) {
  localStorage.setItem(COORDS, JSON.stringify(object));
}

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const geoCoordsObj = { latitude: latitude, longitude: longitude };
  saveGeoCoords(geoCoordsObj);
  paintWeather(latitude, longitude);
}

function geoError() {
  console.log(`Can't load geological coordinates`);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function loadWeather() {
  const coords_value = localStorage.getItem(COORDS);
  if (coords_value === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(coords_value);
    paintWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadWeather();
}
init();

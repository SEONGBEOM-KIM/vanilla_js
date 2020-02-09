const weather = document.querySelector(".js-weather");
const API_KEY = "facbdc222672f0995f241541ec56401b";
const GEO_COORDS = "geoCoords";

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const location = json.name;
      weather.innerText = `${temperature} @ ${location}`;
    });
}

function saveCoordsObj(coordsObj) {
  localStorage.setItem(GEO_COORDS, JSON.stringify(coordsObj));
}

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { latitude: latitude, longitude: longitude };
  saveCoordsObj(coordsObj);
  getWeather(latitude, longitude);
}

function geoError() {
  console.log(`can't access geo location`);
}

function askForGeoCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function loadWeather() {
  const geoCoords = localStorage.getItem(GEO_COORDS);
  if (geoCoords === null) {
    askForGeoCoords();
  } else {
    const parsedGeoCoords = JSON.parse(geoCoords);
    getWeather(parsedGeoCoords.latitude, parsedGeoCoords.longitude);
  }
}

function init() {
  loadWeather();
}

init();

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');
const errorMessageElement = document.getElementById('errorMessage');

const apiKey = 'b2fa3271ab55c9c76e1b2a2d1afd0478'; 

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        displayError('Please enter a city name.');
    }
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});

async function fetchWeatherData(city) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
            hideError();
        } else {
            displayError(data.message || 'Could not fetch weather data.');
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        displayError('An unexpected error occurred.');
    }
}

function displayWeather(data) {
    locationElement.textContent = data.name + `(data.sys.country ? , ${data.sys.country} : '')`;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    humidityElement.textContent = `${data.main.humidity}%`;
    windSpeedElement.textContent = `${data.wind.speed} m/s`;
}

function displayError(message) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
    locationElement.textContent = '';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    humidityElement.textContent = '';
    windSpeedElement.textContent = '';
}

function hideError() {
    errorMessageElement.style.display = 'none';
}
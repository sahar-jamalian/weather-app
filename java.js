const apiKey = '26d13d7fb2c206b77d09d249a624a77e'; // 

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');
const iconElement = document.querySelector('.icon');

searchButton.addEventListener('click', () => {
    const city = searchInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name!');
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(data) {
    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    iconElement.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
}
import React, { useEffect, useState } from "react";
import getUserGeolocation from '../backend/getUserGeolocation.js';
import { getCityNameFromCoordinates } from '../backend/getCityNameFromCoordinates.js';
import 'bootstrap/dist/css/bootstrap.css';

const openWeatherMapApiKey = "290858730fa1a80a3fbfec1f0eb4435d";

async function getTemperature(latitude, longitude, setWeatherCondition) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`);
  const data = await response.json();
  const weatherCondition = data.weather[0].description;
  setWeatherCondition(weatherCondition);
  return data.main.temp;
}

async function displayCoordinates(setCity, setCountry, setTemperature, setWeatherCondition) {
  try {
    const { latitude, longitude } = await getUserGeolocation();
    const { city, country } = await getCityNameFromCoordinates(latitude, longitude);
    setCity(city);
    setCountry(country);
    const temperature = await getTemperature(latitude, longitude, setWeatherCondition);
    setTemperature(temperature);
  } catch (error) {
    console.error(error);
  }
}

function Main() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    displayCoordinates(setCity, setCountry, setTemperature, setWeatherCondition);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card p-4">
        <h1 className="text-center mb-4">Weather App</h1>
        <p className="text-center mb-1">{city}</p>
        <p className="text-center mb-0">{weatherCondition}</p>
        {temperature && <p className="text-center mb-0">{temperature}°C</p>}
      </div>
    </div>
  );
}

export default Main;
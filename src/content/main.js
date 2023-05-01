import React, { useEffect, useState } from "react";
import getUserGeolocation from '../backend/getUserGeolocation.js';
import { getCityNameFromCoordinates } from '../backend/getCityNameFromCoordinates.js';

const openWeatherMapApiKey = "290858730fa1a80a3fbfec1f0eb4435d";

async function getTemperature(latitude, longitude) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`);
  const data = await response.json();
  return data.main.temp;
}

async function displayCoordinates(setCity, setCountry, setTemperature) {
  try {
    const { latitude, longitude } = await getUserGeolocation();
    const { city, country } = await getCityNameFromCoordinates(latitude, longitude);
    setCity(city);
    setCountry(country);
    const temperature = await getTemperature(latitude, longitude);
    setTemperature(temperature);
  } catch (error) {
    console.error(error);
  }
}

function Main(){
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        displayCoordinates(setCity, setCountry, setTemperature);
    }, []);

    return(
        <div>
            <h1>Hello, world!</h1>
            <p>City: {city}, Country: {country}</p>
            <p>Temperature: {temperature}°C</p>
        </div>
    );
}

export default Main;
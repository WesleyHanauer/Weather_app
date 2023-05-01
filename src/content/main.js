import React, { useEffect } from "react";
import getUserGeolocation from '../backend/getUserGeolocation.js';
import { getCityNameFromCoordinates } from '../backend/getCityNameFromCoordinates.js';

const openWeatherMapApiKey = "290858730fa1a80a3fbfec1f0eb4435d";

async function getTemperature(latitude, longitude) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`);
  const data = await response.json();
  return data.main.temp;
}

async function displayCoordinates() {
  try {
    const { latitude, longitude } = await getUserGeolocation();
    const { city, country } = await getCityNameFromCoordinates(latitude, longitude);
    console.log(`City: ${city}, Country: ${country}`);
    const temperature = await getTemperature(latitude, longitude);
    console.log(`Temperature: ${temperature}°C`);
  } catch (error) {
    console.error(error);
  }
}

function Main(){
    useEffect(() => {
        displayCoordinates();
    }, []);
    return(
        <h1>Hello, world!</h1>
    );
}

export default Main;
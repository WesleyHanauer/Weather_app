import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import displayCoordinates from "../backend/displayCoordinates.js";

function Main() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    displayCoordinates(setCity, setTemperature, setWeatherCondition);
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
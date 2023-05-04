import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import displayCoordinates from "../controllers/fetchWeatherInformation.js";

function Content() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    displayCoordinates(setCity, setTemperature, setWeatherCondition);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#87CEEB' }}>
      {temperature && (<div className="card p-4" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem'}}>
      <p className="text-center mb-1">{city}</p>
      <p className="text-center mb-0">{weatherCondition}</p>
      <p className="text-center mb-0">{temperature}°C</p>
      </div>)}
    </div>
  );
}

export default Content;
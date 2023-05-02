const openWeatherMapApiKey = "290858730fa1a80a3fbfec1f0eb4435d";

async function getTemperature(latitude, longitude, setWeatherCondition) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`);
  const data = await response.json();
  let weatherCondition = data.weather[0].description;
  weatherCondition = weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);
  setWeatherCondition(weatherCondition);
  return data.main.temp;
}

export default getTemperature;
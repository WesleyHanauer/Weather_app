import getTemperature from "../models/getTemperatureAndWeatherCondition";
import getUserGeolocation from "./getUserGeolocation";
import { getCityNameFromCoordinates } from "../models/getCityNameFromCoordinates";

async function fetchWeatherInformation(setCity, setTemperature, setWeatherCondition) {
    try {
        const { latitude, longitude } = await getUserGeolocation();
        const { city } = await getCityNameFromCoordinates(latitude, longitude);
        
        let temperature = await getTemperature(latitude, longitude, setWeatherCondition);
        temperature = convertTemperatureToDecimal(temperature);

        setCity(city);
        setTemperature(temperature);
    } catch (error) {
        console.error(error);
    }
}

function convertTemperatureToDecimal(temperature){
    if(temperature>0){
        temperature = Math.floor(temperature);
    }else{
        temperature = Math.abs(temperature);
        temperature = temperature - Math.floor(temperature);
    }
    return temperature;
}

export default fetchWeatherInformation;
import getTemperature from "./getTemperature";
import getUserGeolocation from "./getUserGeolocation";
import { getCityNameFromCoordinates } from "./getCityNameFromCoordinates";

async function displayCoordinates(setCity, setTemperature, setWeatherCondition) {
    try {
        const { latitude, longitude } = await getUserGeolocation();
        const { city } = await getCityNameFromCoordinates(latitude, longitude);
        setCity(city);
        let temperature = await getTemperature(latitude, longitude, setWeatherCondition);
        if(temperature>0){
            temperature = Math.floor(temperature);
        }else{
            temperature = Math.abs(temperature);
            temperature = temperature - Math.floor(temperature);
        }
        setTemperature(temperature);
    } catch (error) {
        console.error(error);
    }
}

export default displayCoordinates;
import React from "react";
import getUserGeolocation from '../backend/getUserGeolocation.js';
import { getCityNameFromCoordinates } from '../backend/getCityNameFromCoordinates.js';

async function displayCoordinates() {
  try {
    const { latitude, longitude } = await getUserGeolocation();
    const { city, country } = await getCityNameFromCoordinates(latitude, longitude);
    console.log(`City: ${city}, Country: ${country}`);
  } catch (error) {
    console.error(error);
  }
}

function Body(){
    displayCoordinates();

    return(
        <h1>Hello, world!</h1>
    );
}

export default Body;
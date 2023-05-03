const openCageDataApiKey = "bc0f14bb602944eca65098f9105cc648";

async function fetchGeocodeData(latitude, longitude) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageDataApiKey}&language=en&pretty=1`;
  const response = await fetch(url);
  return response.json();
}

function extractCityFromGeocodeData(geocodeData) {
  const city = geocodeData.results[0].components.city_district;
  return { city };
}

export async function getCityNameFromCoordinates(latitude, longitude) {
  try {
    const geocodeData = await fetchGeocodeData(latitude, longitude);
    const { city } = extractCityFromGeocodeData(geocodeData);
    return { city };
  } catch (error) {
    console.error(error);
    return null;
  }
}
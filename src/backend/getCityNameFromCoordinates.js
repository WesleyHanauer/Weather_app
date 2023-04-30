const apiKey = "bc0f14bb602944eca65098f9105cc648";

export async function getCityNameFromCoordinates(latitude, longitude) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en&pretty=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const city = data.results[0].components.city_district;
    const country = data.results[0].components.country_code;
    return { city, country };
  } catch (error) {
    console.error(error);
    return null;
  }
}
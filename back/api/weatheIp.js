export async function obteinWeather() {
    const geoRes = await fetch('http://ip-api.com/json/');
    const geoData = await geoRes.json();
  
    const lat = geoData.lat;
    const lon = geoData.lon;
  
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
  
    // console.log(`Ubicación: ${geoData.city}, ${geoData.country}`);
    // console.log(`Temperatura: ${weatherData.current_weather.temperature}°C`);
    return `Ubicación: ${geoData.city}, ${geoData.country} Temperatura: ${weatherData.current_weather.temperature}°C`
  }
  
  
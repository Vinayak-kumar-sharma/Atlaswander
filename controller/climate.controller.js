import { fetchJSON } from "../utils/fetchdata.js";

export const getClimateinfo = async(req,res)=>{
  try {
    const { country } = req.query
    if(!country){
      return res.status(400).json({error:"Country is required"})
    }
    const [data] = await fetchJSON(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    const [lat, lon] = data.latlng;

    const weather = await fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`)
    res.json({
      location: data.name.common,
      coordinates: { lat, lon },
      climate: weather.daily
    });

  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

export const getCityClimate = async (req, res) => {
  try {
    const { city } = req.query;
   
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    const data = await fetchJSON(url); // assuming fetchJSON returns the JSON body

    if (!data || data.cod !== 200) {
      return res.status(404).json({ error: "City not found or invalid API response." });
    }

    res.json({
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      coordinates: data.coord,
      icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStateClimate = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const data = await fetchJSON(url);

   res.json({
  location: data.name || "Unknown",
  temperature: data.main.temp,
  feels_like: data.main.feels_like, // optional
  weather: data.weather[0].description,
  humidity: data.main.humidity,
  wind_speed: data.wind.speed,
  coordinates: data.coord,
  icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
  sunrise: data.sys.sunrise, // optional
  sunset: data.sys.sunset    // optional
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

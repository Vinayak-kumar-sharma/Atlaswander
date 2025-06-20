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









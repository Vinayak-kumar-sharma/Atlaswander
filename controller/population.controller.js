import { fetchJSON } from "../utils/fetchdata.js";

export const getPopulationinfo = async (req , res)=>{
  try {
    const {region} = req.query
    if(!region) {
      return res.status(400).json({error:"region is required"})
    }
    const countries = await fetchJSON(`https://restcountries.com/v3.1/region/${region}`)
    const totalPop = countries.reduce((sum, c) => sum + (c.population || 0), 0);
    const majorCities = countries.map(c => ({
      capital: c.capital?.[0] || "N/A",
      country: c.name.common,
      population: c.population || 0
    }));
    res.json({
      region,
      total_population: totalPop,
      top_cities: majorCities.sort((a, b) => b.population - a.population).slice(0, 5)
    });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}









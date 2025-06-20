import { fetchJSON } from "../utils/fetchdata.js";

export const getWildlifeinfo = async (req,res)=>{
  try {
    const { countryCode } = req.query;
    if(!countryCode){
      return res.status(400).json({error:"Country Code required"})
    }
    const data = await fetchJSON(`https://api.gbif.org/v1/occurrence/search?country=${countryCode}&limit=10`);

  const species = data.results.map(item => ({
      species: item.species || "Unknown",
      class: item.class,
      kingdom: item.kingdom,
      location: item.locality || "N/A"
    }));
  res.json({
      countryCode,
      records_found: data.count,
      species
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}









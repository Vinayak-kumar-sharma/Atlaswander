import { fetchJSON } from "../utils/fetchdata.js";

export const getWildlifeinfo = async (req,res)=>{
  try {
    const { countryCode } = req.query;
    if(!countryCode){
      return res.status(400).json({error:"Country Code required"})
    }
    const data = await fetchJSON(`https://api.gbif.org/v1/occurrence/search?country=${countryCode}&limit=10`);

const species = data.results.map(item => ({
  species: item.species || item.scientificName || "Unknown",
  scientific_name: item.scientificName || "N/A",
  class: item.class || "N/A",
  order: item.order || "N/A",
  family: item.family || "N/A",
  kingdom: item.kingdom || "N/A",
  state_province: item.stateProvince || "Unknown",  // ✅ new field
  coordinates: {
    lat: item.decimalLatitude,
    lon: item.decimalLongitude
  },
  date_observed: item.eventDate || "Unknown",
  image_url: item.media?.[0]?.identifier || "/images/placeholder.jpg",
  recorded_by: item.recordedBy || "Anonymous",
  institution: item.institutionCode || "N/A"
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









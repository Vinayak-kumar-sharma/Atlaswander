import { fetchJSON } from "../utils/fetchdata.js";

export const getRegionInfo = async(req,res)=>{
  try {
    const region = req.query.name
    if(!region){
      return res.status(400).json({error:"Region name is required"})
    }
      const countries = await fetchJSON(`https://restcountries.com/v3.1/region/${region}`);
      const coords = countries.map(c => c.latlng).filter(Boolean);
      const totalArea = countries.reduce((sum, c) => sum + (c.area || 0), 0);
      const avgLat = coords.reduce((sum, [lat]) => sum + lat, 0) / coords.length;
      const avgLon = coords.reduce((sum, [, lon]) => sum + lon, 0) / coords.length;
res.json({
      region,
      center: { lat: avgLat, lon: avgLon },
      area_km2: totalArea.toFixed(0),
      countries: countries.length
    });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


import { fetchJSON } from "../utils/fetchdata.js";

export const getRegionInfo = async(req,res,next)=>{
  try {
    const region = req.query.name
    if(!region){
      return res.status(400).render("tutorial", {
        message: "No matching continent or region found. Please check the name and try again."})
    }
      const countries = await fetchJSON(`https://restcountries.com/v3.1/region/${region}`);
      const coords = countries.map(c => c.latlng).filter(Boolean);
      const totalArea = countries.reduce((sum, c) => sum + (c.area || 0), 0);
      const avgLat = coords.reduce((sum, [lat]) => sum + lat, 0) / coords.length;
      const avgLon = coords.reduce((sum, [, lon]) => sum + lon, 0) / coords.length;
      const totalPop = countries.reduce((sum, c) => sum + (c.population || 0), 0);
const groupedBySubregion = {};

countries.forEach(c => {
  const sub = c.subregion || "Unknown";
  if (!groupedBySubregion[sub]) {
    groupedBySubregion[sub] = [];
  }
  groupedBySubregion[sub].push(c.name.common);
});
const formatter = new Intl.NumberFormat('en-US');
// res.json({
//       region,
//       center: { lat: avgLat, lon: avgLon },
//       area_km2: totalArea.toFixed(0),
//       countries: countries.length
//     });
res.render('region',{
      region,
      center: { lat: avgLat, lon: avgLon },
      area_km2: totalArea.toFixed(0),
      countries: countries.length,
      groupedCountries: groupedBySubregion,
      totalPopulation:  formatter.format(totalPop),
})
  } catch (error) {
      res.status(500)
      next(error)
  }
}


import { fetchJSON } from "../utils/fetchdata.js";

export const getCountrywisepopulation = async(req,res)=>{
  try {
    const { name } = req.params
    if (!name) {
      return res.status(400).json({ error: "Country name is required" })
    }
    const [data] = await fetchJSON(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    res.json({
      name: data.name.common,
      native_name: Object.values(data.name.nativeName || {})[0]?.common || "N/A",
      capital: data.capital?.[0] || "N/A",
      population: data.population || 0,
      area: data.area || 0,
      languages: data.languages ? Object.values(data.languages) : [],
      currencies: data.currencies
        ? Object.values(data.currencies).map(c => `${c.name} (${c.symbol})`)
        : [],
      region: data.region || "N/A",
      subregion: data.subregion || "N/A",
      flag: data.flags?.svg || "N/A",
      maps: data.maps || {},
      coordinates: {
        lat: data.latlng?.[0] || null,
        lon: data.latlng?.[1] || null
      },
      borders: data.borders || [],
      timezones: data.timezones || [],
      un_member: data.unMember || false,
    });

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

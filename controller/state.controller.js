import { State } from "country-state-city";
import { City } from "country-state-city";

export const getStatesByCountry = (req, res) => {
  try {
    const { countryCode } = req.params;

    if (!countryCode) {
      return res.status(400).json({ error: "Country code is required" });
    }

    const states = State.getStatesOfCountry(countryCode.toUpperCase());

    if (!states.length) {
      return res.status(404).json({ error: "No states found for this country" });
    }

    res.json({
      countryCode: countryCode.toUpperCase(),
      total: states.length,
      states: states.map(state => ({
        name: state.name,
        isoCode: state.isoCode,
        lat:state.latitude,
        lon:state.longitude
      })),
    });
    // res.render("country",{
    //   countryCode: countryCode.toUpperCase(),
    //   total: states.length,
    //   states: states.map(state => ({
    //     name: state.name,
    //     isoCode: state.isoCode,
    //     lat:state.latitude,
    //     lon:state.longitude
    //   })),
    // });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getCitiesByState = (req, res) => {
  try {
    const { countryCode, stateCode } = req.params;

    if (!countryCode || !stateCode) {
      return res.status(400).json({ error: "Country code and state code are required" });
    }

    const country = countryCode.toUpperCase();
    const state = stateCode.toUpperCase();
    const cities = City.getCitiesOfState(country, state);
    const stateInfo = State.getStatesOfCountry(country).find(
      s => s.isoCode.toUpperCase() === state
    );

    if (!cities.length) {
      return res.status(404).json({ error: "No cities found for this state." });
    }

    if (!stateInfo) {
      return res.status(404).json({ error: "State not found in the country." });
    }

    // return res.json({
    //   countryCode: country,
    //   stateCode: state,
    //   state: {
    //     name: stateInfo.name,
    //     latitude: stateInfo.latitude,
    //     longitude: stateInfo.longitude
    //   },
    //   cities: cities.map(city => ({
    //     name: city.name,
    //     latitude: city.latitude,
    //     longitude: city.longitude
    //   }))
    // });

  res.render("state", {
  state: stateInfo,
  countryCode: countryCode.toUpperCase(),
  stateCode: stateCode.toUpperCase(),
  cities: cities.map(city => ({
    name: city.name,
    latitude: city.latitude,
    longitude: city.longitude
  }))
});


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

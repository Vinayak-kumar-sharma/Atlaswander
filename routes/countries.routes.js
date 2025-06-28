import express from "express"
import { getCountrywisepopulation } from "../controller/countries.controller.js"
import { getStatesByCountry,getCitiesByState } from "../controller/state.controller.js"
const router = express.Router()

router.get("/country/:name",getCountrywisepopulation)
router.get("/states/:countryCode", getStatesByCountry)
router.get("/cities/:countryCode/:stateCode", getCitiesByState);


export default router

import express from "express"
import { getCityClimate, getClimateinfo,getStateClimate} from "../controller/climate.controller.js"
const router = express.Router()


router.get("/climate",getClimateinfo)
router.get("/city/climate", getCityClimate);
router.get("/areaclimate", getStateClimate);


export default router

import express from "express"
import { getPopulationinfo } from "../controller/population.controller.js"
const router = express.Router()



router.get("/population",getPopulationinfo)

export default router
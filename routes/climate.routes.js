import express from "express"
import { getClimateinfo } from "../controller/climate.controller.js"
const router = express.Router()


router.get("/climate",getClimateinfo)

export default router

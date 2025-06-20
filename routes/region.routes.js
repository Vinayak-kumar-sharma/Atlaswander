import express from "express"
import { getRegionInfo } from "../controller/region.controller.js"
const router = express.Router()

router.get("/region",getRegionInfo)

export default router

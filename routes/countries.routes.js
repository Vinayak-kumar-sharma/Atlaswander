import express from "express"
import { getCountrywisepopulation } from "../controller/countries.controller.js"
const router = express.Router()

router.get("/countries/:name",getCountrywisepopulation)

export default router

import express from "express"
import { getWildlifeinfo } from "../controller/wildlife.controller.js"
const router = express.Router()


router.get("/wildlife",getWildlifeinfo)

export default router
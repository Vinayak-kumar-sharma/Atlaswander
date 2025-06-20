import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import regionRoute from "./routes/region.routes.js"
import wildlifeRoute from "./routes/wildlife.routes.js"
import climateRoute from "./routes/climate.routes.js"
import populationRoute from "./routes/population.routes.js"
import countriesRoute from "./routes/countries.routes.js"


dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.use("/api",regionRoute)
app.use("/api",wildlifeRoute)
app.use("/api",climateRoute)
app.use("/api",populationRoute)
app.use("/api",countriesRoute)


app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
})
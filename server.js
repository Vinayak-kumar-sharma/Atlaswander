import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import regionRoute from "./routes/region.routes.js";
import wildlifeRoute from "./routes/wildlife.routes.js";
import climateRoute from "./routes/climate.routes.js";
import populationRoute from "./routes/population.routes.js";
import countriesRoute from "./routes/countries.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

// --------- ⬇️ Frontend setup ⬇️ ---------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS views folder setup
app.set("views", path.join(__dirname, "frontend", "views"));
app.set("view engine", "ejs");

// Static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, "frontend", "public")));

// Parse form data or JSON if needed later
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ----------------------------------------

// --------- API Routes ---------
app.use("/api", regionRoute);
app.use("/api", wildlifeRoute);
app.use("/api", climateRoute);
app.use("/api", populationRoute);
app.use("/api", countriesRoute);

// --------- Page Routes ---------
app.get("/", (req, res) => {
  res.render("index", { title: "Atlas Wander" });
});

// Error handling 500,404
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("tutorial");
});

app.use((req, res) => {
  res.status(404).render("tutorial");
});
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

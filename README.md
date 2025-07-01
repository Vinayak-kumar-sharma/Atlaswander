# 🌍 AtlasWander — Learn API Integration with World Data

**AtlasWander** is a full-stack web application that mimics the essence of an atlas. It aggregates real-time country, climate, and biodiversity data using external APIs and displays them interactively using maps and markers.

> ⚡ This project was built as a personal learning tool to explore API integration, backend structuring, and dynamic rendering using EJS templates.

---

## 📌 Key Features

- 🌐 **Country Explorer** — Fetch and view detailed info about any country
- ☁️ **Live Weather & Forecast** — Real-time weather via OpenWeatherMap + 7-day forecast via Open-Meteo
- 🌿 **Biodiversity Insights** — Explore flora and fauna using GBIF API
- 🗺️ **Interactive Map** — View country/state locations using Leaflet.js + OpenStreetMap
- 🌍 **Region & Population Stats** — Region-specific demographics and metadata
- 🧭 **State Locator** — State-level coordinates with map markers

---

## 🚀 Tech Stack

### Frontend
- **EJS** – Templating engine for dynamic pages
- **HTML/CSS/JavaScript**
- **Leaflet.js** – For map rendering
- **Responsive Design** – Mobile-first with media queries

### Backend
- **Node.js + Express**
- **Axios** – To fetch external API data
- **MVC Structure** – Organized using controllers, routes, and utils

---

## 🧩 APIs Used

| API | Purpose | Link |
|-----|---------|------|
| RESTCountries | Country data | [restcountries.com](https://restcountries.com/) |
| OpenWeatherMap | Live weather | [openweathermap.org](https://openweathermap.org/) |
| Open-Meteo | 7-day forecast | [open-meteo.com](https://open-meteo.com/) |
| OpenStreetMap | Map tiles | [openstreetmap.org](https://www.openstreetmap.org/) |
| GBIF | Biodiversity data | [gbif.org](https://www.gbif.org/) |

> 🔐 Some APIs (like OpenWeatherMap) require you to generate and use your own free API key.

---

## ⚙️ Getting Started

### 1. Clone the project
```bash
git clone https://github.com/Vinayak-kumar-sharma/Atlaswander
cd Atlaswander
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
```
OPENWEATHER_API_KEY=your_api_key
PORT=port_number
```
### 4. Run the app locally
```bash
npm run dev
```

### Deployment
- The project is live at | [Visit](https://atlaswander.up.railway.app/)
- Hosted on | [Railway](https://railway.com/)

## 📃 License
- This project is for educational purposes only. Attribution to data providers is included. Not intended for commercial use.

## 🙌 Credits & Attribution
- Inspired by the classic atlas book experience.
- Built using open datasets and free API services (see above)
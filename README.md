# AtlasWander: A Continents Data 

AtlasWander is a Node.js and Express-based web application designed to provide essential information about continents and countries. While it draws inspiration from traditional atlases, AtlasWander focuses on delivering key data points such as climate, population, currency, regions, wildlife, languages, flags, and maps in a straightforward manner.

## Features

- **Country Information**: Access basic data about countries, including population and climate.
- **Climate Data**: Retrieve climate information for specific countries.
- **Population Statistics**: Get population data and capital cities based on regions.
- **Regional Information**: Explore data specific to different regions.
- **Wildlife Data**: (Optional for future implementation) Information on flora and fauna for specific countries.
- **RESTful API**: Clean and organized API endpoints for easy integration and use.
- **User-Friendly Frontend**: Built with HTML, CSS, JavaScript, and EJS for a dynamic and responsive user experience.

## API Endpoints

The following REST API endpoints are available:

- **Get Country Info**
  - `GET /api/countries/:name`
  - Description: Retrieve basic information about a specific country by name.

- **Get Climate Data**
  - `GET /api/climate?country=...`
  - Description: Fetch climate data for a specified country.

- **Get Population Data**
  - `GET /api/population?region=...`
  - Description: Obtain population statistics and capital cities for a specified region.

- **Get Regional Information**
  - `GET /api/region?name=...`
  - Description: Access information specific to a particular region.

- **Get Wildlife Data** (Optional for later)
  - `GET /api/wildlife?country=...`
  - Description: Retrieve information on the flora and fauna of a specified country.

## Frontend Technologies

AtlasWander utilizes the following technologies for the frontend:

- **HTML**: For structuring the web pages.
- **CSS**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content.
- **EJS (Embedded JavaScript)**: For rendering dynamic content on the server side.

## Getting Started

### Prerequisites

- Node.js (version X.X.X or higher)
- npm (Node package manager)

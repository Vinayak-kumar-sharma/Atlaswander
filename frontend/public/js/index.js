document.addEventListener("DOMContentLoaded", function () {
    // document.getElementById("searchBtn").addEventListener("click", () => {
    //   const query = document.getElementById("searchInput").value.trim();
    //   if (!query) return alert("Please enter a name.");
    //   const regionList = ["asia", "africa", "europe", "oceania", "americas"];
    //   if (regionList.includes(query.toLowerCase())) {
    //     window.location.href = `/api/region?name=${encodeURIComponent(query)}`;
    //   } else {
    //     window.location.href = `/api/country/${encodeURIComponent(query)}`;
    //   }
    // });
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const feedback = document.getElementById("searchFeedback");

  const regionList = ["africa", "asia", "europe", "north america", "south america", "oceania"];

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();
    searchBtn.disabled = value.length === 0;
    feedback.textContent = ""; 
  });

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const queryLower = query.toLowerCase();

    if (!query) {
      feedback.textContent = "⚠️ Please enter a country or continent name.";
      return;
    }

    // Show feedback (optional)
    feedback.textContent = "🔄 Redirecting...";

    // Check if it's a continent
    if (regionList.includes(queryLower)) {
      window.location.href = `/api/region?name=${encodeURIComponent(query)}`;
    } else {
      window.location.href = `/api/country/${encodeURIComponent(query)}`;
    }
  });
    
    // Initialize Leaflet map
    const map = L.map('map', {
      center: [20, 0],
      zoom: 2,
      scrollWheelZoom: true,
      zoomControl: true,
      dragging: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // let lastClickedCountry = null;
    let activeMarker = null;

    map.on('click', async function (e) {
      let lat = e.latlng.lat;
      let lon = e.latlng.lng;

      lat = Math.max(-90, Math.min(90, lat));
      lon = ((lon + 180) % 360 + 360) % 360 - 180;

      const latRounded = parseFloat(lat.toFixed(4));
      const lonRounded = parseFloat(lon.toFixed(4));

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latRounded}&lon=${lonRounded}`);
        const data = await response.json();
        const country = data.address?.country;

        if (country) {
          lastClickedCountry = country;

          if (activeMarker) map.removeLayer(activeMarker);

          activeMarker = L.marker([latRounded, lonRounded]).addTo(map)
            .bindPopup(`<b>📍 ${country}</b>`)
            .openPopup();

          // Optional: redirect
          window.location.href = `/api/country/${encodeURIComponent(country)}`;
        } else {
          alert("No country found at this location.");
        }

      } catch (error) {
        console.error("Geocoding error:", error);
        alert("Something went wrong while fetching location data.");
      }
    });

    
  }); 
  const grid = document.querySelector(".feature-grid");
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      const type = card.dataset.type;
      grid.classList.add(`${type}-hover`);
    });

    card.addEventListener("mouseleave", () => {
      const type = card.dataset.type;
      grid.classList.remove(`${type}-hover`);
    });
  });
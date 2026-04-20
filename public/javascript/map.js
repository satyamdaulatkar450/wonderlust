document.addEventListener("DOMContentLoaded", () => {
  if (!window.listing.geometry || !window.listing.geometry.coordinates) {
    console.error("No geometry data for this listing");
    return;
  }
  mapboxgl.accessToken = window.mapToken;
  const coords = window.listing.geometry.coordinates;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: coords,
    zoom: 9
  });

  const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setHTML(`<h4>${window.listing.location}</h4><p>exact loaction provided after booking </p>`);

 new mapboxgl.Marker()
    .setLngLat(coords)
    .setPopup(popup)                   // ✅ pass the popup
    .addTo(map)
    .togglePopup();
});
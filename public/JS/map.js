maptilersdk.config.apiKey = mapToken;

// Only load map if geometry data is found
if (listing.geometry && listing.geometry.coordinates.length > 0) {
    const map = new maptilersdk.Map({
        container: 'map',
        style: maptilersdk.MapStyle.STREETS,
        center: listing.geometry.coordinates,
        zoom: 9
    });

    const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 }) // Add offset so it doesn't cover the marker
        .setHTML(
            `<h4>${listing.title}</h4><p>Exact location provided after booking</p>`
        )
    )
    .addTo(map);
    } else {
    // Show a fallback message instead of a blank box
    document.getElementById('map').innerHTML = 
        "<p class='text-center mt-5'>Location coordinates not available for this listing.</p>";
} 
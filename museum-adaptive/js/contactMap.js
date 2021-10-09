// Initialize and add the map
function initMap() {
    // The location of Uluru
    // 48.86149425851698, 2.3354575838744918
    const uluru = { lat: 48.86149425851698, lng: 2.3354575838744918 };
    // The map, centered at Uluru
    console.log(initMap);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
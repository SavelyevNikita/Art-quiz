mapboxgl.accessToken = 'pk.eyJ1IjoibmlraXRhMXNhdmVseWV2IiwiYSI6ImNrdWtjYXllMzM2bGUzMW1veDJiY3pnM3gifQ.BSGP5JYOIIHwf9tYJuUtdQ';
const map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [2.336342, 48.860940],
    zoom: 15.75,
});
map.addControl(new mapboxgl.NavigationControl());
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({
        color: 'black',
    })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);
const marker2 = new mapboxgl.Marker({
        color: 'gray',
    })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);
const marker3 = new mapboxgl.Marker({
        color: 'gray',
    })
    .setLngLat([2.3330, 48.8619])
    .addTo(map);

const marker4 = new mapboxgl.Marker({
        color: 'gray',
    })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);
const marker5 = new mapboxgl.Marker({
        color: 'gray',
    })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);
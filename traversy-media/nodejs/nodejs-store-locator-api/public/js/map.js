mapboxgl.accessToken =
  'pk.eyJ1IjoicmljaGhvcnJvY2tzIiwiYSI6ImNrNTZyMnhjMzAxcngzbW56ajFxcHljZ20ifQ.4iME3YPHoSoDz_1lFIxfWQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-71.157895, 42.707741]
});

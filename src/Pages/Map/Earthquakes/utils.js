// import { Layer } from "leaflet";

// Convert Epoch time to human readable with specific timezone
const timeConverter = (time, offset) => {
    const d = new Date(time);
    const utc = d.getTime() + d.getTimezoneOffset() * 60000; // This converts to UTC 00:00
    const nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
};

const onEachFeature = (feature, layer) => {
    const {
        properties: { title, place, time, mag, url },
        geometry: { coordinates },
    } = feature;

    const popupContent = `
    <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
    <b>Place</b>: ${place ?? "Unknown"} <br>
    <b>Time (GMC+3)</b>: ${timeConverter(time, 3)} <br>
    <b>Lat</b>: ${coordinates[1]}
    <b>Lon</b>: ${coordinates[0]} <br>
    <b>Depth</b>: ${coordinates[2]} km <br>
    <b>Magnitude</b>: ${mag} Richter <br>
    <b>Details</b>: <a href=${url}>click here to see more details</a>
  `;

    layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

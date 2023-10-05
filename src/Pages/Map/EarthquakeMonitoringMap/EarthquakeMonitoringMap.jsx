import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';
import { mapHeight, tectonicPlatesStyle, tileLayers } from '../constants';
import {Earthquakes} from '../Earthquakes/Earthquakes';
import {Legend} from '../Legend/Legend';
import { useState } from 'react';
import { useEffect } from 'react';

export const EarthquakeMonitoringMap = () => {


  const [data, setData] = useState(null)
  
  console.log(data)
  useEffect(() => {
    fetch('https://adilrion.github.io/developer-community-json/earth-data.json')
      .then((data) => data.json())
      .then((data) => setData(data))
        .catch((error) => console.error(error));
  }, []);




  return (
    <>
      <MapContainer center={[0, 0]} zoom={3} style={mapHeight}>
        <LayersControl position="topright">
          {tileLayers?.map(({ id, name, attribution, url, checked }) => (
            <LayersControl.BaseLayer key={id} name={name} checked={checked}>
              <TileLayer attribution={attribution} url={url} />
            </LayersControl.BaseLayer>
          ))}
          <LayersControl.Overlay name="Tectonic Plates">
            <GeoJSON
              data={data ? data : null}
              style={tectonicPlatesStyle}
            />
          </LayersControl.Overlay>
        </LayersControl>

        <Earthquakes />
        <ScaleControl />
        <Legend />
      </MapContainer>
    </>
  );
};

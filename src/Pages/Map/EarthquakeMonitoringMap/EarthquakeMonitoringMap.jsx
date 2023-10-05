import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';
import tectonicPlates from './PB2002_boundaries.json';
import { mapHeight, tectonicPlatesStyle, tileLayers } from '../constants';
import {Earthquakes} from '../Earthquakes/Earthquakes';
import {Legend} from '../Legend/Legend';

export const EarthquakeMonitoringMap = () => {


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
              

              data={tectonicPlates && tectonicPlates}
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

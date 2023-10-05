import React, { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../../hooks/useStore';
import { getEarthquakes } from '../../../api/earthquakes';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../../../utils/utils';
import { Spinner } from '../../../components/Spinner/Spinner';

let geojson;

export const Earthquakes = () => {

    const startTime = useStore((state) => state.startTime);
    const endTime = useStore((state) => state.endTime);

    const { data: earthquakes, isLoading } = useQuery(
        ['earthquakes', startTime, endTime],
        () => getEarthquakes(startTime, endTime)
    );

    const map = useMap();

    useEffect(() => {
        if (!earthquakes || isLoading) return;

        if (map && geojson && map.hasLayer(geojson)) map.removeLayer(geojson);

        geojson = L.geoJSON(earthquakes.features, {
            onEachFeature,
            pointToLayer: (feature, latlng) => {
                const magnitude = feature.properties.mag;
                return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
            }
        });

        if (map) geojson.addTo(map);
    }, [earthquakes, isLoading, map]);

    if (isLoading) return <Spinner />;

    return null;
};

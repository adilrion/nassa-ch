import React, { useEffect } from 'react';
import {  useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './legend.css'; // Import your CSS styles
import { circleMarkerColor } from '../../../utils/utils';

export const Legend = () => {           
    const map = useMap();

    useEffect(() => {
        try {
            if (!map) return;

            const legend = L.control({ position: 'bottomright' });

            legend.onAdd = () => {
                const div = L.DomUtil.create('div', 'info legend');

                const grades = [0, 1, 2, 3, 5, 7];
              

                // loop through our density intervals and generate a label with a colored square for each interval
                div.innerHTML += `<h4 key="title">Magnitude</h4>`
                for (let i = 0; i < grades.length; i++) {
                  
                    div.innerHTML +=
                        '<i style="background:' +
                        circleMarkerColor(grades[i] + 1) +
                        '"></i> ' +
                        grades[i] +
                        (grades[i + 1] ? ` – ${grades[i + 1]}<br>` : '+');
                }

                return div;
            };

            if (map) {
                legend.addTo(map);
            }
        } catch (error) {
            console.error('Error in Legend component:', error);
        }
    }, [map]);

    return null;
};



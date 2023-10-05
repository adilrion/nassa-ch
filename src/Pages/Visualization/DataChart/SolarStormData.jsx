import { useState, useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const SolarStormData = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json');
        const data = await response.json();
        const updatedDataPoints = data.map(item => ({
          x: new Date(item.x),
          y: item.y
        }));
        setDataPoints(updatedDataPoints);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Use the chartRef to check if the chart is ready and then render it
    if (chartRef.current) {
      chartRef.current.render();
    }
  }, []); // Empty dependency array ensures this effect runs only once after mount

  const options = {
    theme: 'dark2',
    title: {
      text: 'Solar storm data',
    },
    data: [
      {
        type: 'line',
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0.00',
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} ref={chartRef} />
      {/* Use the ref attribute to get a reference to the chart instance */}
    </div>
  );
};



import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


export const EarthquakeData = () => {
    const generateDataPoints = (noOfDps) => {
        let xVal = 1;
        let yVal = 100;
        const dps = [];

        for (let i = 0; i < noOfDps; i++) {
            yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
            dps.push({ x: xVal, y: yVal });
            xVal++;
        }

        return dps;
    };

    const options = {
        theme: 'dark2', // 'light1', 'dark1', 'dark2'
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: 'Earthquake data',
        },
        data: [
            {
                type: 'area',
                dataPoints: generateDataPoints(500),
            },
        ],
    };

    return (
        <div >
            <CanvasJSChart options={options} />

        </div>
    );
}
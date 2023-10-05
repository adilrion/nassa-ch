import CanvasJSReact from '@canvasjs/react-charts';
import { useRef } from 'react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;




export const SolarStormPrediction = () => {


    const chartRef = useRef(null);

    const toggleDataSeries = (e) => {
        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chartRef.current.render();
    }


    // solar storm prediction

    const options = {
        theme: "dark2",
        animationEnabled: true,
        title: {
            text: "Solar storm prediction"
        },
        subtitles: [{
            text: ""
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Units Sold",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY2: {
            title: "solar storm prediction",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "solar storm",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2024, 0, 1), y: 120 },
                { x: new Date(2024, 1, 1), y: 135 },
                { x: new Date(2024, 2, 1), y: 144 },
                { x: new Date(2024, 3, 1), y: 103 },
                { x: new Date(2024, 4, 1), y: 93 },
                { x: new Date(2024, 5, 1), y: 129 },
                { x: new Date(2024, 6, 1), y: 143 },
                { x: new Date(2024, 7, 1), y: 156 },
                { x: new Date(2024, 8, 1), y: 122 },
                { x: new Date(2024, 9, 1), y: 106 },
                { x: new Date(2024, 10, 1), y: 137 },
                { x: new Date(2024, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "prediction",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2024, 0, 1), y: 19034.5 },
                { x: new Date(2025, 1, 1), y: 20015 },
                { x: new Date(2026, 2, 1), y: 27342 },
                { x: new Date(2027, 3, 1), y: 20088 },
                { x: new Date(2028, 4, 1), y: 20234 },
                { x: new Date(2029, 5, 1), y: 29034 },
                { x: new Date(2030, 6, 1), y: 30487 },
                { x: new Date(2031, 7, 1), y: 32523 },
                { x: new Date(2032, 8, 1), y: 20234 },
                { x: new Date(2033, 9, 1), y: 27234 },
                { x: new Date(2034, 10, 1), y: 33548 },
                { x: new Date(2035, 11, 1), y: 32534 }
            ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options}
                ref={chartRef}
            />
            {/* You can get a reference to the chart instance as shown above using ref. This allows you to access all chart properties and methods */}
        </div>
    );
}


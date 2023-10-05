
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const EarthquakePrediction = () => {
    // earthquake prediction
    const options = {
        theme: "dark2",
        title: {
            text: "Earthquake prediction"
        },
        subtitles: [{
            text: ""
        }],
        axisY: {
            prefix: ""
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: "area",
                name: "GBP",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,##0.##",
                dataPoints: [
                    { x: new Date("2024-01-01"), y: 84.927 },
                    { x: new Date("2025-02-01"), y: 82.609 },
                    { x: new Date("2026-03-01"), y: 81.428 },
                    { x: new Date("2027-04-01"), y: 83.259 },
                    { x: new Date("2028-05-01"), y: 83.153 },
                    { x: new Date("2029-06-01"), y: 84.180 },
                    { x: new Date("2030-07-01"), y: 84.840 },
                    { x: new Date("2031-08-01"), y: 82.671 },
                    { x: new Date("2032-09-01"), y: 87.496 },
                    { x: new Date("2033-10-01"), y: 86.007 },
                    { x: new Date("2034-11-01"), y: 87.233 },
                    { x: new Date("2035-12-01"), y: 86.276 }
                ]
            },
            {
                type: "area",
                name: "SSD",
                showInLegend: true,
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "#,##0.##",
                dataPoints: [
                    { x: new Date("2024-01-01"), y: 67.515 },
                    { x: new Date("2025-02-01"), y: 66.725 },
                    { x: new Date("2026-03-01"), y: 64.86 },
                    { x: new Date("2027-04-01"), y: 64.29 },
                    { x: new Date("2028-05-01"), y: 64.51 },
                    { x: new Date("2029-06-01"), y: 64.62 },
                    { x: new Date("2030-07-01"), y: 64.2 },
                    { x: new Date("2031-08-01"), y: 63.935 },
                    { x: new Date("2032-09-01"), y: 65.31 },
                    { x: new Date("2033-10-01"), y: 64.75 },
                    { x: new Date("2034-11-01"), y: 64.49 },
                    { x: new Date("2035-12-01"), y: 63.84 }
                ]
            }
        ]
    };
  return (
      <div> <CanvasJSChart options={options} /></div>
  )
}



import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const ChartComponent = ({ data }) => {
    const chartRef = React.useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'bar', // Change this to the type of chart you want
                data: {
                    labels: data.map(item => item.year), // Example of labels
                    datasets: [
                        {
                            label: 'Intensity',
                            data: data.map(item => item.intensity), // Replace with your actual data field
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
            return () => {
                myChart.destroy(); // Cleanup on component unmount
            };
        }
    }, [data]);

    return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;

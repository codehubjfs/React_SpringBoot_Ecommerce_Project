import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PeakDays() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current && chartInstance.current) {
           
            chartInstance.current.data.datasets[0].data = [60, 50, 20, 60, 80, 40, 70];
            chartInstance.current.update();
        } else {
            
            const peakDaysData = {
                labels: ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'],
                datasets: [{
                    label: 'Number of Orders',
                    data: [60, 50, 20, 60, 80, 40, 70],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            };

            const peakDaysOptions = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };

            chartInstance.current = new Chart(chartRef.current, {
                type: 'line',
                data: peakDaysData,
                options: peakDaysOptions
            });
        }
    }, []);

    return <canvas ref={chartRef} id="peakDaysChart" ></canvas>;
}

export default PeakDays;
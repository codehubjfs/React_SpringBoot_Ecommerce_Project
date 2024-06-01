import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

function PeakDays() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const fetchMonthlyData = async () => {
            try {
                const response = await axios.get('http://localhost:8086/orders/monthly-counts');
                const data = response.data;
                const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
                const orderCounts = new Array(12).fill(0);

                Object.keys(data).forEach(month => {
                    orderCounts[month - 1] = data[month];
                });

                if (chartRef.current && chartInstance.current) {
                    chartInstance.current.data.datasets[0].data = orderCounts;
                    chartInstance.current.update();
                } else {
                    const peakMonthsData = {
                        labels: labels,
                        datasets: [{
                            label: 'Number of Orders',
                            data: orderCounts,
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
                        data: peakMonthsData,
                        options: peakDaysOptions
                    });
                }
            } catch (error) {
                console.error('Error fetching monthly data', error);
            }
        };

        fetchMonthlyData();
    }, []);

    return <canvas ref={chartRef} id="peakDaysChart"></canvas>;
}

export default PeakDays;

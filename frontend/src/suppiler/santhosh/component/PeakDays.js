import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

function PeakDays({ sellerId }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const fetchMonthlyData = async (sellerId) => {
            try {
                console.log(sellerId);
                const response = await axios.get(`http://localhost:8086/orders/order/monthly-counts/${sellerId}`);
                const data = response.data;
                console.log(data);
                const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                const orderCounts = new Array(12).fill(0);
                console.log(data);
                Object.keys(data).forEach(month => {
                    orderCounts[parseInt(month, 10) - 1] = data[month];
                });

                if (chartRef.current) {
                    if (chartInstance.current) {
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
                }
            } catch (error) {
                console.error('Error fetching monthly data', error);
            }
        };

        if (sellerId) {
            fetchMonthlyData(sellerId);
        }
    }, [sellerId]);

    return <canvas ref={chartRef} id="peakDaysChart"></canvas>;
}

export default PeakDays;

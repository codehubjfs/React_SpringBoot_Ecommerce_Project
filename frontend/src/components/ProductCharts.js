import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function ProductCharts() {
    useEffect(() => {
        // Data for charts
        const categories = ['Clothing', 'Beauty', 'Home', 'Electronic', 'Grocery', 'Toys'];
        const salesData = [70, 60, 40, 75, 25, 45];
        const color = 'rgba(54, 162, 235, 0.5)'; 
        let salesChart;

        // Create sales chart
        const createSalesChart = () => {
            const salesChartCanvas = document.getElementById('productSalesChart');
            salesChart = new Chart(salesChartCanvas, {
                type: 'bar',
                data: {
                    labels: categories,
                    datasets: [{
                        data: salesData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)', 
                            'rgba(54, 162, 235, 0.5)', 
                            'rgba(255, 206, 86, 0.5)',  
                            'rgba(75, 192, 192, 0.5)',  
                            'rgba(153, 102, 255, 0.5)', 
                            'rgba(255, 159, 64, 0.5)'    
                        ],
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Sales Percentage (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Product Category'
                            },
                            categoryPercentage: 0.7, 
                            barPercentage: 0.9 
                        }
                    },
                    plugins: {
                        legend: {
                            display: false  
                        }
                    }
                }
            });
        };

        createSalesChart();

        return () => {
            if (salesChart) salesChart.destroy();
        };
    }, []);

    return (
        <div>
            <div style={{ width: '50%', height: '50%', marginLeft: '26%' }}>
                <canvas id="productSalesChart"></canvas>
            </div>
        </div>
    );
}

export default ProductCharts;

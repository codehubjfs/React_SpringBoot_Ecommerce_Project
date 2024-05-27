import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }

      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Jeans', 'Cargos', 'Cotton Pants', 'Trousers'],
          datasets: [{
            label: 'Sales',
            data: [300, 200, 400, 350],
            backgroundColor: [
              '#FF6384', // Red
              '#36A2EB', // Blue
              '#FFCE56', // Yellow
              '#4BC0C0', // Green
            ],
            borderColor: [
              '#FF6384', // Red
              '#36A2EB', // Blue
              '#FFCE56', // Yellow
              '#4BC0C0', // Green
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales Report'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }
  }, []);

  return <canvas id="pieChart" ref={chartRef} />;
};
    
export default PieChart;

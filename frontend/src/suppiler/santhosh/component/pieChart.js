import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../../slices/OrderSlice';
import Chart from 'chart.js/auto';

const PieChart = ({ sellerId }) => {
  const chartRef = useRef(null);
  const dispatch = useDispatch();
  const productQuantities = useSelector((state) => state.orders.productQuantities);
  const status = useSelector((state) => state.orders.status);
console.log("sellerId" + sellerId);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders(sellerId));
    }
  }, [status, dispatch, sellerId]);

  useEffect(() => {
    if (chartRef.current && Object.keys(productQuantities).length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }

      const labels = Object.keys(productQuantities);
      const data = Object.values(productQuantities);

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Number of Products Ordered',
            data: data,
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
              '#9966FF', '#FF9F40', '#FFCD56', '#4D5360'
            ],
            borderColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
              '#9966FF', '#FF9F40', '#FFCD56', '#4D5360'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Number of Products Ordered'
            },
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }
  }, [productQuantities]);

  return <canvas id="pieChart" ref={chartRef} />;
};

export default PieChart;
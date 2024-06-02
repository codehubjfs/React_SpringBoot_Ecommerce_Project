import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

function UsersOverview() {
  const [salesData, setSalesData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchMonthlySales = async () => {
      try {
        const response = await fetch('http://localhost:8086/payment/monthly-sales');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data) {
          const currentMonthSales = Object.values(data.currentMonth);
          const previousMonthSales = Object.values(data.previousMonth);

          const currentMonthLength = currentMonthSales.length;
          const previousMonthLength = previousMonthSales.length;

          const currentMonthLabels = Array.from({ length: currentMonthLength }, (_, i) => i + 1);
          const previousMonthLabels = Array.from({ length: previousMonthLength }, (_, i) => i + 1);

          const cumulativeCurrentMonthSales = calculateCumulativeSales(currentMonthSales);
          const cumulativePreviousMonthSales = calculateCumulativeSales(previousMonthSales);

          setSalesData({
            labels: [...currentMonthLabels, ...previousMonthLabels],
            datasets: [
              {
                label: 'Current Month Sales',
                data: [...cumulativeCurrentMonthSales, ...Array(currentMonthLength).fill(null)],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0,123,255,0.2)',
                fill: false,
              },
              {
                label: 'Previous Month Sales',
                data: [...Array(previousMonthLength).fill(null), ...cumulativePreviousMonthSales],
                borderColor: '#ff5733',
                backgroundColor: 'rgba(255,87,51,0.2)',
                fill: false,
              },
            ],
          });
        } else {
          setSalesData({
            labels: [],
            datasets: [],
          });
        }
      } catch (error) {
        console.error('Error fetching the monthly sales data:', error);
      }
    };

    fetchMonthlySales();
  }, []);

  const calculateCumulativeSales = (monthlySales) => {
    let cumulativeSales = [];
    let total = 0;
    for (let i = 0; i < monthlySales.length; i++) {
      total += monthlySales[i] || 0;
      cumulativeSales.push(total);
    }
    // Fill in missing days with zeroes
    for (let i = cumulativeSales.length; i < 30; i++) {
      cumulativeSales.push(total);
    }
    return cumulativeSales;
  };
  

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title id="dashboard-card">Sales Overview</Card.Title>
        <Line
          data={salesData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default UsersOverview;

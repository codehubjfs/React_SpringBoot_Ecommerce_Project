import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

function UsersOverview({ sellerId }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8086/orders/order/yearly-counts/${sellerId}`);
        const counts = response.data;

        const currentYear = new Date().getFullYear();
        const previousYear = currentYear - 1;

        const data = {
          labels: [`Previous Year (${previousYear})`, `Current Year (${currentYear})`],
          datasets: [
            {
              data: [counts[previousYear] || 0, counts[currentYear] || 0],
              backgroundColor: ['#ff6b6b', '#48dbfb'], // Red and blue colors
              hoverBackgroundColor: ['#ee5253', '#0abde3'], // Lighter shades for hover
            },
          ],
        };

        setChartData(data);
      } catch (error) {
        console.error('Error fetching order counts by year:', error);
      }
    }
    fetchData();
  }, [sellerId]);

  return (
    <Card className="shadow-sm seller-stat-card2 card-bg-gray" style={{ width: '700px', height: '400px' }}>
<Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Card.Title id="dashboard-card">Sales Overview</Card.Title>
        {chartData && (
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
              data={chartData}
              options={{
                aspectRatio: 1,
                maintainAspectRatio: true,
              }}
            />
          </div>
        )}
      </Card.Body>
  </Card>
  );
}

export default UsersOverview;
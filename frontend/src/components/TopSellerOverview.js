import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function TopSellersOverview() {
  const [sellerData, setSellerData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const response = await fetch('http://localhost:8086/products/top-sellers');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const sellerIds = data.map(item => `Supplier ${item[0]}`);
          const productCounts = data.map(item => item[1]);
          const totalProducts = productCounts.reduce((total, count) => total + count, 0);
          const sellerPercentages = productCounts.map(count => (count / totalProducts) * 100);

          setSellerData({
            labels: sellerIds,
            datasets: [
              {
                label: 'Top Sellers',
                data: sellerPercentages,
                backgroundColor: [
                  '#add8e6',
                  '#ffb6c1',
                  '#98fb98',
                  '#ffe4b5',
                  '#b0e0e6',
                  '#d3d3d3',
                ],
                // borderColor: '#000',
                // borderWidth: 1,
              },
            ],
          });
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching the top sellers data:', error);
      }
    };

    fetchTopSellers();
  }, []);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title id="dashboard-card">Top Sellers Overview</Card.Title>
        <Bar
          data={sellerData}
          options={{
            indexAxis: 'y',
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    return `${value}%`;
                  }
                },
                title: {
                  display: true,
                  text: 'Percentage (%)',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Suppliers',
                },
              },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.label}: ${context.raw.toFixed(2)}%`;
                  },
                },
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default TopSellersOverview;

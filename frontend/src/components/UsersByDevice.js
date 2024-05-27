import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

function UsersByDevice() {
  const data = {
    labels: ['Electronics', 'Furniture', 'Beauty','Grocery','Cloths','Shoes'],
    datasets: [
      {
        data: [40,10,25,15,5,10],
        backgroundColor: ['#87CEEB', '#FFD700', '#20B2AA', '#FFA07A', '#32CD32', '#FF69B4'], // Different mild colors
        hoverBackgroundColor: ['#4682B4', '#DAA520', '#008080', '#FF7F50', '#228B22', '#FF1493'], // Darker shades for hover
      },
    ],
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title id="dashboard-card">Product Sales</Card.Title>
        <Pie data={data} />
      </Card.Body>
    </Card>
  );
}

export default UsersByDevice;

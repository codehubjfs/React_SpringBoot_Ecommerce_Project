import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

function UsersOverview() {
  const data = {
    labels: ['1', '7', '14', '21', '28'],
    datasets: [
      {
        label: 'Current Month',
        data: [500, 1000, 1500, 2000, 2500],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.2)',
        fill: true,
      },
      {
        label: 'Past Month',
        data: [300, 600, 900, 1200, 1500],
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220,53,69,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title id="dashboard-card">Sales Overview</Card.Title>
     
        <Line data={data} />
      </Card.Body>
    </Card>
  );
}

export default UsersOverview;

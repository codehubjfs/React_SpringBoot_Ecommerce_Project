import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductSales } from '../slices/productSlice';

function UsersByDevice() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.products.sales);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductSales());
  }, [dispatch]);

  const data = {
    labels: sales.map((sale) => sale.category),
    datasets: [
      {
        data: sales.map((sale) => sale.count),
        backgroundColor: ['#87CEEB', '#FFD700', '#20B2AA', '#FFA07A', '#32CD32', '#FF69B4'],
        hoverBackgroundColor: ['#4682B4', '#DAA520', '#008080', '#FF7F50', '#228B22', '#FF1493'],
      },
    ],
  };

  if (sales.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>aaa:{error}</div>;
  }

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

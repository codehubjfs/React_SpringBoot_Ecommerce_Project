import React from 'react';
import PieChart from './pieChart';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../dashboard.css';
import ordericon from '../photos/ordericon.jpg';
import available from '../photos/available.jpg';
import revenue from '../photos/revenue.png'
import listed from '../photos/listed.jpg';
import ProductCard from './ProductCard';
import UsersOverview from './UserOverView';
import PeakDays from './PeakDays';
function SalesReport() {
  const details = [
    { id: 1, productName: "Phant", inStock: 90, outOfStock: 10 },
    { id: 2, productName: "T-shirt", inStock: 30, outOfStock: 70 },
    { id: 3, productName: "Shirt", inStock: 30, outOfStock: 70 },
    { id: 4, productName: "Trouser", inStock: 0, outOfStock: 90 },
    { id: 5, productName: "Dhoti", inStock: 30, outOfStock: 70 },
    { id: 6, productName: "Saree", inStock: 30, outOfStock: 70 },
  ];
  
  const data = {
    product: [
      { label: 'Product Ordered', value: 150 },
      { label: 'Product Available', value: 200 },
      { label: 'Total Revenue', value: 300 },
      { label: 'Total Listing', value: 120 },
    ],
    
  };

  return (
    <Container fluid className="seller-dashboard">
      <Row className="mb-4">
        <Col>
          <h2 className="seller-dashboard">Sales Report</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={3} className="mb-4">
          <Card className="shadow-sm seller-stat-card card-bg-gray">
            <Card.Body className="d-flex align-items-center">
              <img
                src={ordericon}
                alt="Product"
                className="rounded-circle mb-3 card-icon"
                style={{ height: '70px', width: '70px' }}
              />
              <div className="ml-3">
                <Card.Title className="seller-card-title">{data.product[0].label}</Card.Title>
                <Card.Text className="seller-card-text">{data.product[0].value}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="mb-4">
          <Card className="shadow-sm seller-stat-card card-bg-gray">
            <Card.Body className="d-flex align-items-center">
              <img
                src={available}
                alt="Product"
                className="rounded-circle mb-3 card-icon"
                style={{ height: '70px', width: '70px' }}
              />
              <div className="ml-3">
                <Card.Title className="seller-card-title">{data.product[1].label}</Card.Title>
                <Card.Text className="seller-card-text">{data.product[1].value}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="mb-4">
          <Card className="shadow-sm seller-stat-card card-bg-gray">
            <Card.Body className="d-flex align-items-center">
              <img
                src={revenue}
                alt="Product"
                className="rounded-circle mb-3 card-icon"
                style={{ height: '70px', width: '70px' }}
              />
              <div className="ml-3">
                <Card.Title className="seller-card-title">{data.product[2].label}</Card.Title>
                <Card.Text className="seller-card-text">{data.product[2].value}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} className="mb-4">
          <Card className="shadow-sm seller-stat-card card-bg-gray">
            <Card.Body className="d-flex align-items-center">
              <img
                src={listed}
                alt="Listing"
                className="rounded-circle mb-3 card-icon"
                style={{ height: '70px', width: '80px' }}
              />
              <div className="ml-3">
                <Card.Title className="seller-card-title">{data.product[3].label}</Card.Title>
                <Card.Text className="seller-card-text">{data.product[3].value}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={6} className="mb-4">
        <Card className="shadow-sm">
      <Card.Body>
          <PieChart />
          </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-4" style={{display:'block'}}>
          <Card className="shadow-sm seller-stat-card2 card-bg-gray">
          
            <div style={{textAlign:'center !important'}}>   <h2 >Stock Details</h2></div>
           <div style={{padding:'20px'}}>
              <Row>
                {details.map(detail => (
                  <Col key={detail.id} md={12} className="mb-3">
                    <ProductCard 
                      productName={detail.productName} 
                      inStock={detail.inStock} 
                      outOfStock={detail.outOfStock}
                    />
                  </Col>
                ))}
              </Row>
              </div>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col lg={6} className="mb-4">
          <UsersOverview />
        </Col>
        <Col lg={6} className="mb-4">
        <Card className="peak" >
        <Card.Body>
          <PeakDays />
          </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>
  );
}

export default SalesReport;

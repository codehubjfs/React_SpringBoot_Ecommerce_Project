import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file for additional styling

const AnotherComponent = () => {
  const title = "Sell online to 14 Cr+ customers";
  const subtitle = "at 0% Commission";
  const description = (
    <>
      <div style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '25px' }}>1.</b>Become a Horizon seller and grow your business across India.
      </div>
      <div style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '25px' }}>2.</b>Don't have a GSTIN or have a Composition GSTIN?
      </div>
      <div style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '25px' }}>3.</b>You can still sell on HorizonSeller.
      </div>
      <div>
        <Link to="/gst" style={{ color: 'blue', textDecoration: 'underline', marginTop: '10px', display: 'inline-block', fontSize: '18px', marginLeft: '43%' }}>
          Click here
        </Link> to know more.
      </div>
    </>
  );

  return (
    <Container fluid className="ui-MainContent mb-5">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Card className="seller-custom-card" style={{ width: '95%' }}>
            <Card.Body className="seller-custom-card-body">
              <Card.Title className="seller-custom-card-title" style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: '40px' }}>
                {title}
              </Card.Title>
              <Card.Subtitle className="seller-custom-card-subtitle mb-2 text-muted" style={{ textAlign: 'center' }}>
                {subtitle}
              </Card.Subtitle>
              <Card.Text className="seller-custom-card-text">{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnotherComponent;

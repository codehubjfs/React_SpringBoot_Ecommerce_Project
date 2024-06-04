import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import the CSS file for additional styling

function MainContent({ imageUrl, title, subtitle, description }) {
  return (
    <Container fluid className="ui-MainContent mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="d-flex" style={{marginTop:'15px'}}>
          <Card style={{ width: '100%' }}>
            <Row noGutters>
              <Col md={6}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', color: '#343a40', marginBottom: '10px' }}>{title}</Card.Title>
                  <Card.Subtitle style={{ fontSize: '16px', color: '#6c757d', marginBottom: '15px' }}>{subtitle}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '13px', color: '#495057' }}>{description}</Card.Text>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img variant="top" src={imageUrl} alt="Sample" className="img-fluid ui-image" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;

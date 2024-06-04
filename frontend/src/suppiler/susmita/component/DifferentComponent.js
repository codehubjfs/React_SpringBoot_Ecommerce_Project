import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import homepage from '../assets/images/selleronline.jpg';
import '../App.css'; // Import the CSS file for additional styling

const DifferentComponent = () => {
  const imageUrl = homepage;

  return (
    <MainContent imageUrl={imageUrl} />
  );
};

const MainContent = ({ imageUrl }) => {
  return (
    <Container fluid className="ui-MainContent mb-5">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Card className="seller-custom-card" style={{ width: '95%' }}>
            <Card.Body className="seller-custom-card-body">
              {imageUrl && <Card.Img variant="top" src={imageUrl} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DifferentComponent;

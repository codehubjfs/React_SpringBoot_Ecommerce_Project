import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function MainContent({ title, subtitle, description, imageUrl }) {
  return (
    <Container fluid className="ui-MainContent mb-5" style={{ background: 'linear-gradient(to left, #ded2d2, #675c61)' }}>
      <Row>
        <Col xs={12} md={{ span: 6, order: 2 }} className="ui-content-left">
          <h1>{title}</h1>
          <h1 className="ui-para-container">{subtitle}</h1>
          <p>{description}</p>
        </Col>
        <Col xs={12} md={{ span: 6, order: 1, offset: 0 }} className="ui-content-right">
          <img src={imageUrl} alt="Sample" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;

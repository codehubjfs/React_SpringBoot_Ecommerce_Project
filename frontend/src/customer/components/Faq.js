import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Faq = ({ faq }) => {
    return (
        <Container fluid>
            <h2>Faq's</h2>
            {faq.map((faqItem, index) => (
                <Card key={index} className="my-3">
                    <Card.Body>
                        <Card.Title>{faqItem.question}</Card.Title>
                        <Card.Text>{faqItem.answer}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default Faq;
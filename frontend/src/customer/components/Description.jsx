import React from 'react';
import { description } from './Productdatas';
import { Container } from 'react-bootstrap';

const Description = ({ categoryId, productId }) => {
    // Filter the description data based on productId and categoryId
    const product = description.products.find(
        (product) => product.productId === parseInt(productId) && product.categoryId === parseInt(categoryId)
    );

    if (!product) {
        return <div>Description not found for the provided product and category.</div>;
    }

    return (
        <section className="bg-light border-top py-4">
            <Container fluid>
                <h2 className="text-center mb-4">Product Description</h2>
                <div className="description-grid">
                    {product.descriptions.map((desc, index) => (
                        <div key={index} className="description-item">
                            <h3>{desc.title}</h3>
                            <div className="image-wrapper">
                                {index % 2 === 0 ? (
                                    <img src={desc.image} alt={desc.alt} className="left-image" />
                                ) : (
                                    <img src={desc.image} alt={desc.alt} className="right-image" />
                                )}
                                <p>{desc.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Description;

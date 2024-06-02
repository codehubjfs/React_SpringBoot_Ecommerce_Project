import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import DescriptionItem from './DescriptionItem';

const Description = ({ category, productId, thumbnail1, thumbnail2, thumbnail3, thumbnail4 }) => {
  const product = useSelector((state) => state.products.product);

  if (!product || !product.description) {
    return <div>Description not found for the provided product and category.</div>;
  }

  const descriptionParts = product.description.split('.').filter(part => part.trim() !== '');
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  // Ensure we only take the first 4 description parts if there are more
  const descriptions = descriptionParts.slice(0, 4);

  return (
    <section className="bg-light border-top py-4">
      <Container fluid>
        <div className="row description-grid">
          <h2 className="text-center mb-4">Product Description</h2>
          <div className="col-md-6">
            {descriptions.slice(0, 2).map((part, index) => (
              <DescriptionItem key={index} description={part.trim()} thumbnail={thumbnails[index]} />
            ))}
          </div>
          <div className="col-md-6">
            {descriptions.slice(2, 4).map((part, index) => (
              <DescriptionItem key={index + 2} description={part.trim()} thumbnail={thumbnails[index + 2]} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
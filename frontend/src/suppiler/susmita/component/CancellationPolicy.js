import React from 'react';
import CircularImage from './CircularImage';
import cancellationImage from '../assets/images/cancellation.jpg';

function CancellationPolicy() {
  return (
    <CircularImage
      image={cancellationImage}
      factTitle="Cancellation"
      factContent="Horizon charges 0 penalties for supplier cancellations and auto cancellations. For situations when a supplier is not able to fulfil an order due to lack of inventory or any other unforeseen situation, suppliers can conduct their business tension-free on Horizon without worrying about the fear of paying penalties."
      alignLeft={true}
      contentStyle={{ fontSize: '18px',color:'black' }}
    />
  );
}

export default CancellationPolicy;

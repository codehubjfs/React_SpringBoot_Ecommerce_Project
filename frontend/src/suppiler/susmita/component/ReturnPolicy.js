import React from 'react';
import CircularImage from './CircularImage';
import returnPolicyImage from '../assets/images/returnpolicy.png';

function ReturnPolicy() {
  return (
    <CircularImage
      image={returnPolicyImage}
      factTitle="Horizon Return Policy"
      factContent="The Horizon Supplier Panel will provide visibility for returns on your inventory. This means you can make adjustments in real-time and deliver a great customer experience and minimize your returns. Use the Panel to manage your returns and reduce your processing costs."
      alignLeft={false}
      contentStyle={{ fontSize: '18px',color:'black' }}
    />
  );
}

export default ReturnPolicy;

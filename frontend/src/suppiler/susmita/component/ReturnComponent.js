import React from 'react';
import CircularImage from './CircularImage';
import returnToOriginImage from '../assets/images/returnimage.png';
import { CiTextAlignCenter } from 'react-icons/ci';

function ReturnComponent() {
  return (
    <CircularImage
      image={returnToOriginImage}
      factTitle="Return to Origin"
      factContent="The shipping partner will try three times to reach the customer. If the customer does not accept the product, it will be returned to you. Horizon will not charge a return shipping fee for any RTOs."
      alignLeft={false}
      contentStyle={{ fontSize: '18px',color:'black',textAlign:'center' }}
    />
  );
}

export default ReturnComponent;

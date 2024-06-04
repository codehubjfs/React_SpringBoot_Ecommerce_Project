import React from 'react';
import picture1 from '../assets/images/gettingorders.jpeg';

function OrderComponent() {
  const tips = [
    {
      title: 'List more catalogs',
      description: 'It usually takes 5-7 catalogs to start getting orders on Horizon. The more catalogs you upload, the better are your chances of getting orders.'
    },
    {
      title: 'Set the Right Price',
      description: 'To set the right price of the products you want to sell on Horizon, consider the associated costs and margin. Set a competitive price for the products so that the customers find them more appealing than the competitive brands.'
    },
    {
      title: 'Use Price Recommendation Tool',
      description: 'You can use the price recommendation tool to arrive at a competitive price and increase your sales and visibility by getting an edge over other sellers.'
    },
    {
      title: 'Right Trend',
      description: 'Customers always prefer fresh and unique trends. So, try to list trending products to get more orders.'
    },
    {
      title: 'Opt for Next Day Dispatch (NDD) Program',
      description: 'Sign up for Horizon’s NDD program to increase your sales. Horizon provides extra visibility to all catalogs that qualify for the NDD program.'
    }
  ];

  return (
    <div style={{ marginBottom: '40px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Getting Orders</h3>
      <p>Once your catalog becomes live, you can start selling on Horizon. More than 11 crore active customers across India will be able to view and purchase your products. To increase your sales and attract more customers, you can:</p>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <img src={picture1} alt="Getting Orders" />
      </div>
      <ul >
        {tips.map((tip, index) => (
          <div style={{marginBottom:'15px'}}>
          <li key={index} >
            <p style={{ fontSize: '20px' , margin:'0px'}}>{tip.title}</p>
            <span style={{ fontSize: '16px' }}>{tip.description}</span>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default OrderComponent;

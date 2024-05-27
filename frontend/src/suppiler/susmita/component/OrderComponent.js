import React from 'react';
import picture1 from '../assets/images/gettingorders.jpeg'; // Import the image
import '../App.css';
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
      description: 'Sign up for Horizon’s NDD program to increase your sales. TripleS provides extra visibility to all catalogs that qualify for the NDD program.'
    }
  ];

  return (
<div className="col-md-12">
      <div className="ui-row">
        <div className="col-md-12">
          <h3 className="ui-register-header" style={{ fontSize: '24px', color: 'black' }}>Getting Orders</h3>
          <p style={{ fontSize: '18px', color: 'black' }}>Once your catalog becomes live, you can start selling on Horizon. More than 11 crore active customers across India will be able to view and purchase your products. To increase your sales and attract more customers, you can:</p>
          <div className="ui-image-container text-center">
            {/* Centered images go here */}
            <img src={picture1} alt="Image 1" />
          </div>
          <ul className="ui-tips" style={{ fontSize: '18px', color: 'black' }}>
            {tips.map((tip, index) => (
              <li key={index}>
                <strong>{tip.title}</strong><br />
                {tip.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderComponent;

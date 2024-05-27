// Tip.js
import React from 'react';

const Tip = ({ title, description }) => (
  <li className="ui-listing-orders">
    <strong>{title}</strong><br />
    {description}
  </li>
);

export default Tip;

import React, { useState } from 'react';
import '../App.css';

function FulfillmentChannels() {
  // State to track whether hidden rows are shown or not
  const [showHiddenRows, setShowHiddenRows] = useState(false);

  // Function to toggle the visibility of hidden rows
  const toggleHiddenRows = () => {
    setShowHiddenRows(!showHiddenRows);
  };

  // CSS class name for hidden rows based on state
  const hiddenRowsClassName = showHiddenRows ? 'show-row' : '';

  return (
    <div className="fulfillment-channels-container">
      <h2>Amazon.in Fulfillment Channels Fee Comparison</h2>
      <table className="features">
        <tbody>
          <tr>
            <td>Fulfillment by Horizonseller(FBA)</td>
            <td>Easy Ship</td>
            <td>Self-Ship</td>
          </tr>
          {/* Hidden rows for storage, packaging, shipping, etc. */}
          <tr className={`hidden-row ${hiddenRowsClassName}`}>
            <td>Storage</td>
            <td>Seller will bear cost</td>
            <td>Seller will bear cost</td>
          </tr>
          <tr className={`hidden-row ${hiddenRowsClassName}`}>
            <td>Packaging</td>
            <td>Pick & Pack Fees</td>
            <td>Seller will bear cost</td>
          </tr>
          <tr className={`hidden-row ${hiddenRowsClassName}`}>
            <td>Shipping</td>
            <td>Shipping Fee</td>
            <td>Seller will bear cost</td>
          </tr>
          {/* Other hidden rows */}
        </tbody>
      </table>
      {/* Button to toggle visibility of hidden rows */}
      <button className="view-comparison-btn" onClick={toggleHiddenRows}>
        {showHiddenRows ? '-' : '+'}
      </button>
    </div>
  );
}

export default FulfillmentChannels;

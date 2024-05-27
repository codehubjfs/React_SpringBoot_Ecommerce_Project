import React, { useState } from 'react';
import '../App.css';

function FulfillmentComparison() {
  // State to track whether hidden rows are shown or not
  const [showHiddenRows, setShowHiddenRows] = useState(false);

  // Function to toggle the visibility of hidden rows
  const toggleHiddenRows = () => {
    setShowHiddenRows(!showHiddenRows);
  };

  // CSS class name for hidden rows based on state
  const hiddenRowsClassName = showHiddenRows ? '' : 'hidden-row';

  return (
    <div className="fulfillment-channels-container">
      <h2>Amazon.in Fulfillment Channels Fee Comparison</h2>
      {/* Button to toggle visibility of hidden rows */}
      <p>Each Fulfillment Channel has different fees associated with it and certain costs you (the seller) will bear when you choose it. Most sellers use a mix of different fulfillment channels, as each channel has different benefits.</p>
      <p>Quick guide on the fulfillment channels available</p>
      <button className="view-comparison-btn" onClick={toggleHiddenRows}>
        {showHiddenRows ? '-' : '+'}
      </button>
      {showHiddenRows && (
        <table className="features">
          <tbody>
            <tr>
              <td>Fulfillment by Horizonseller (FBA)</td>
              <td>Easy Ship</td>
              <td>Self-Ship</td>
            </tr>
            {/* Hidden rows for storage, packaging, shipping, etc. */}
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr> <tr className={hiddenRowsClassName}>
              <td>Storage</td>
              <td>Seller will bear cost</td>
              <td>Seller will bear cost</td>
            </tr>
            {/* Add more hidden rows here */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FulfillmentComparison;

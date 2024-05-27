import React from 'react';
import '../App.css';

function ProbabilityCard() {
  return (
    <div className="calculation-card mb-5">
      <h5>Calculating Profitability for Sellers on Amazon.in</h5>
      <ol>
        <li>Step 1: Calculate the referral fees applicable</li>
        <li>Step 2: Find the closing fees applicable</li>
        <li>Step 3: Calculate the shipping fees applicable, or if you are using Self-Ship, check the cost of shipping</li>
        <li>Step 4: Calculate Total Fees = Referral Fees + Closing Fees + Shipping Fees + Other fee (if applicable)</li>
        <li>Step 5: Profit = Item Sale price - cost of product - Total Fees</li>
      </ol>
    </div>
  );
}

export default ProbabilityCard;

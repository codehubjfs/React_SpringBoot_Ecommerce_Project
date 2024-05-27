import React from 'react';
import Sidebar from './SideBar';
import ProductListingComponent from './ProductListingComponent';
import '../App.css';
import picture1 from '../assets/images/picture1.jpeg';
import ContentCard from './ContentCard';
import ProbabilityCard from './ProbabilityCard';
import FulfillmentComparison from './fulfillmentComparsion';

function ContentPricing() {
    const sidebarItems = [
        { id: 'payment-cycles', label: 'Payment Cycles' },
        { id: 'referral-fee', label: 'Referral Fee (based on Category)' },
        { id: 'calculating-profitability', label: 'Calculating Profitability' },
        { id: 'comparing-fulfillment-channels', label: 'Comparing Fulfillment Channels' }
    ];

    const productListContent1 = {
        title: 'How to Calculate Horizonseller.in Selling Fees?',
        steps: [
            "How to calculate Referral Fees?",
            "Total Referral Fees = Item price x Referral Fee percentage",
            "For example, if you are selling a book priced at ₹ 450 and if the referral fee percentage for books category is 4%, the Referral Fees = ₹ 450 x 4% = ₹ 18"
        ]
    };

    const imageUrl1 = [
        picture1,
        // Add more image URLs as needed
    ];
    const additionalContent = (
        <div className="ui-addcontent mb-5">
          <h1 className="ui-content">Introduction to Selling on Horizon.in</h1>
          <h3 className="ui-contents">Welcome to selling on Horizon.in</h3>
          <p>Horizon.in is India's most visited online shopping marketplace in India and more customers than ever rely on Horizon.in for online shopping. With orders from over 100% serviceable pin-codes in India, Amazon.in has become the online destination for small and medium-sized enterprises.
          Horizon.in is India's most visited online shopping marketplace in India and more customers than ever rely on Horizon.in for online shopping. With orders from over 100% serviceable pin-codes in India, Amazon.in has become the online destination for small and medium-sized enterprises.
          </p>
        </div>
      );
    return (
        <div className="ui-content-container">
            <div className="ui-sidebar-container">
                <Sidebar sidebarItems={sidebarItems} />
                <ContentCard />
            </div>
            <div id="ui-referral-fee">
                <ProductListingComponent imageUrls={imageUrl1} content={productListContent1} />
              
            </div>
            <div id="ui-payment-cycles">
            {additionalContent }
            </div>
            <div id="ui-calculating-profitability">
                <ProbabilityCard />
            </div>
            <div id="ui-comparing-fulfillment-channels">
                            <FulfillmentComparison />
              
            </div>
        </div>
    );
}

export default ContentPricing;

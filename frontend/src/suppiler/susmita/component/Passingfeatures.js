import React from 'react';
import Featurecomponent from './Featurecomponent'; // Path to your FeatureComponent file
import feature1Icon from '../assets/images/advertising.jpg'; // Importing feature1Icon image from assets folder
import feature2Icon from '../assets/images/productrecommendation.png'; // Importing feature2Icon image from assets folder
import feature3Icon from '../assets/images/pricerecommedation.png'; // Importing feature3Icon image from assets folder
import feature4Icon from '../assets/images/qualitydashboard.jpeg'; // Importing feature4Icon image from assets folder

function PassingFeatures() {
  // Define props for the features
  const feature1Props = {
    icon: feature1Icon,
    title: "Advertisements",
    description: "You can promote your product catalog to reach more customers and increase your sales using Horizon Ads. Currently, not available for sellers who don't have a Regular GSTIN."
  };

  const feature2Props = {
    icon: feature2Icon,
    title: "Price Recommendation",
    description: "Sell online and set the Horizon recommended competitive price to increase your sales and visibility by getting an edge over sellers across online platforms."
  };

  const feature3Props = {
    icon: feature3Icon,
    title: "Product Recommendations",
    description: "Grow your business by selling the products  recommended by Horizon. These recommendations are made using customer demand data from across the internet."
  };

  const feature4Props = {
    icon: feature4Icon,
    title: "Quality Dashboard",
    description: "You can reduce returns with Quality Dashboard. It provides detailed insights into why customers are returning your products."
  };

  // Define container style outside of the return statement
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center', // Adjust as needed
    padding: '20px', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      {/* Pass props to FeatureComponent */}
      <Featurecomponent {...feature1Props} />
      <Featurecomponent {...feature2Props} />
      <Featurecomponent {...feature3Props} />
      <Featurecomponent {...feature4Props} />
    </div>
  );
}

export default PassingFeatures;

import React from 'react';
import CustomCard from './CustomCard';
import '../card.css';

function CardVideo() {
  // Define an array of card data
  const cardData = [
    {
      title: "Akansha and Bal Kishan",
      text: "Celebrity Club, Kolkata. The biggest advantage of selling on Horizon is the superb reach all over India. Second would be the product recommendation tool which has worked wonders for our business.",
      image: require('../assets/images/seller1.png')
    },
    {
      title: "Priyanka Samridhi Design, Delhi",
      text: "Horizon has made my business quite famous in places. Managing and growing business on the app was simple with 0 penalties to pay, easy registration and 7-day payment cycle.",
      buttonText: "Go somewhere else",
      image: require('../assets/images/seller2.png')
    },
    {
      title: "Amit and Rajat Jain",
      text: "Our business has grown beyond our imagination, getting up to 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Horizon's insights.",
      buttonText: "Go somewhere different",
      image: require('../assets/images/seller3.png')
    }
  ];

  return (
    <div className="ui-row mb-5">
      {/* Map through the card data array and render CustomCard component */}
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <CustomCard
            title={card.title}
            text={<p style={{ textAlign: 'justify' }}>{card.text}</p>} 
            buttonText={card.buttonText}
            image={card.image}
          />
        </div>
      ))}
    </div>
  );
}

export default CardVideo;

import React from "react";
import "./OfferGrid.css";

const OfferGrid = ({ offers }) => {
  return (
    <div className="offer-img-container">
      {offers.map((offer, index) => (
        <div className="offer-img-item" key={index}>
          <img src={offer.image} alt={`Offer ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

const OffersImg = () => {
  const offers = [
    {
      image:
        "https://i.pinimg.com/originals/bf/eb/3c/bfeb3c09eb8b46532cfbfb9f14aef4b2.png",
    }, // Changed URL
    {
      image:
"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/05/02/85106-mobile.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/bf/eb/3c/bfeb3c09eb8b46532cfbfb9f14aef4b2.png",
    },
  ];

  return (
    <div>
<h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        OUR OFFERS{" "}
      </h3>      <OfferGrid offers={offers} />
    </div>
  );
};

export default OffersImg;

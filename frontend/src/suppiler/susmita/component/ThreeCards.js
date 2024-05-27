
import React from "react";
import GrowthTools from "./GrowthTools";
function ThreeCards() {
    // Example data for three cards
    const cardsData = [
      {
        title: "Card 1",
        description: "Description for Card 1",
        steps: ["Step 1", "Step 2", "Step 3"],
        imageUrls: ["url1"]
      },
      {
        title: "Card 2",
        description: "Description for Card 2",
        steps: ["Step 1", "Step 2", "Step 3"],
        imageUrls: ["url4", "url5", "url6"]
      },
      {
        title: "Card 3",
        description: "Description for Card 3",
        steps: ["Step 1", "Step 2", "Step 3"],
        imageUrls: ["url7", "url8", "url9"]
      }
    ];
  
    return (
      <div className="ui-three-cards-container">
        {cardsData.map((data, index) => (
          <GrowthTools key={index} {...data} />
        ))}
      </div>
    );
  }
  
  export default ThreeCards;
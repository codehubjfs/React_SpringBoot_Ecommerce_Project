import React, { useState } from "react";
import CreateSellerOffer from "../components/CreateSellerOffer";
import SellerOfferTable from "../components/SellerOfferTable";
import "../../src/Offer.css";
import DescriptionCard from '../components/DescriptionCard ';

function SellerOffer() {
  const [offers, setOffers] = useState([
    {
      sno: 1,
      offerName: "Bulk Purchase Discount",
      description:
        "Buy in bulk and save! Enjoy discounted prices on large orders.",
      discount: "20",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
    {
      sno: 2,
      offerName: "Exclusive Supplier Deals",
      description:
        "Special deals for our suppliers! Take advantage of exclusive offers for a limited time.",
      discount: "30",
      startDate: "2024-05-01",
      endDate: "2024-05-31",
    },
    {
      sno: 3,
      offerName: "Year-End Clearance for Suppliers",
      description:
        "Clearance sale on remaining inventory for suppliers. Limited stock available.",
      discount: "10",
      startDate: "2024-12-01",
      endDate: "2024-12-31",
    },
  ]);

  const handleCreate = (newOffer) => {
    setOffers([...offers, newOffer]);
  };

  const handleEdit = (index, updatedOffer) => {
    const updatedOffers = [...offers];
    updatedOffers[index] = updatedOffer;
    setOffers(updatedOffers);
  };

  const handleDelete = (index) => {
    const updatedOffers = offers.filter((_, i) => i !== index);
    setOffers(updatedOffers);
  };

  return (
    <><br></br>
    // <div className='main-content'>
    <div lassName="offer-container">
      <h2 className="text-center mt-2">Seller Offers</h2>
      <hr></hr>
      <DescriptionCard title="Unlock Opportunities with Seller Offers">
        <p>
          Empower your sellers to drive sales with enticing offers. Create,
          manage, and promote exclusive seller offers to boost customer
          engagement and increase revenue.
        </p>
      </DescriptionCard>
      <div className="offer-actions">
        <CreateSellerOffer onCreate={handleCreate} />
      </div>
      <SellerOfferTable
        offers={offers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
    // </div>
    </>
  );
}

export default SellerOffer;
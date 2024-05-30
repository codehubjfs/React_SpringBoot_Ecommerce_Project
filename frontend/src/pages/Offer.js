import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateOffer from "../components/CreateOffer";
import OfferTable from "../components/OfferTable";
import "../../src/Offer.css";
import DescriptionCard from "../components/DescriptionCard ";
import { getOffersFromJson, addOfferToJson, updateOfferInJson, deleteOfferInJson } from "../slices/OfferSlice";

function Offer() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offerList);
  const error = useSelector((state) => state.offers.error);

  useEffect(() => {
    dispatch(getOffersFromJson());
  }, [dispatch]);

  const handleCreate = (newOffer) => {
    dispatch(addOfferToJson(newOffer))
      .unwrap()
      .then(() => {
        dispatch(getOffersFromJson());
      })
      .catch((error) => {
        console.error("Failed to add offer:", error);
      });
  };

  const handleEdit = (index, updatedOffer) => {
    dispatch(updateOfferInJson(updatedOffer));
  };

  const handleDelete = (offerId) => {
    dispatch(deleteOfferInJson(offerId))
      .unwrap()
      .then(() => {
        dispatch(getOffersFromJson());
      })
      .catch((error) => {
        console.error("Failed to delete offer:", error);
      });
  };

  return (
    <><br></br>
  <br></br>
    <div className="offer-container">
      <h1 className="mt-3 text-center">Sale Offers</h1>
      <hr />
      <DescriptionCard title="Welcome to the Offers Management Dashboard">
        <p>This dashboard allows you to manage your offers efficiently.</p>
        <p>Key Features:</p>
        <ul>
          <li>Create, Edit, and Delete Offers</li>
        </ul>
      </DescriptionCard>
      <div className="offer-actions">
        <CreateOffer onCreate={handleCreate} />
      </div>
      {/* {error && <p className="error">{error}</p>} */}
      <OfferTable offers={offers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    </>
  );
}

export default Offer;

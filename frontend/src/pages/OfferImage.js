import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OfferImageTable from "../components/OfferImageTable";
import AddOfferImage from "../components/AddOfferImage";
import { getOfferImagesFromJson } from "../slices/OfferImageSlice";
import DescriptionCard from "../components/DescriptionCard ";

function OfferImagePage() {
  const dispatch = useDispatch();
  const offerImages = useSelector((state) => state.offerImages.offerImagesList);
  const error = useSelector((state) => state.offerImages.error);

  useEffect(() => {
    dispatch(getOfferImagesFromJson());
  }, [dispatch]);

  return (
    <><br></br>
    <br></br>
    <div>
      <h1 style={{ textAlign: 'center' }}>Offer Images</h1>
      <hr></hr>
      <DescriptionCard title="Manage Offer Images">
        <p>Easily manage your offer images with this intuitive interface. Add, remove, or update images to enhance your promotions.</p>
      </DescriptionCard>
      <div style={{ textAlign: 'right', marginRight: '20px' }}>
        <AddOfferImage />
      </div>
      <OfferImageTable offerImages={offerImages} />
    </div>
    </>
  );
}

export default OfferImagePage;
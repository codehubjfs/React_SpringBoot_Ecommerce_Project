import React from "react";

const DescriptionItem = ({ description, thumbnail }) => {
  return (
    <div className="description-item">
      <img
        src={thumbnail}
        className="img-thumbnail img-fluid mb-2"
        alt="Product Thumbnail"
        style={{ width: "200px", height: "200px", maxHeight: "200px" }}
      />

      <p>{description}</p>
    </div>
  );
};

export default DescriptionItem;

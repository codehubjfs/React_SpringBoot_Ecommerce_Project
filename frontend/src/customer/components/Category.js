import React from "react";
import img1 from "../Images/Electronic.jpg";
import img2 from "../Images/Home.png";
import img3 from "../Images/Beauty.jpg";
import img4 from "../Images/Clothing.jpg";
import img5 from "../Images/Grocery.jpg";
import img6 from "../Images/Toys.jpg";
import { Link } from "react-router-dom";
import "../Category.css";
function Category() {
  return (
    <div className="container-fluid">
      <div className="row category-link justify-content-center">
        <CategoryItem
          to="/ElectronicPage"
          imgSrc={img1}
          altText="Electronics"
          label="Electronics"
        />
        <CategoryItem
          to="/home-appliances"
          imgSrc={img2}
          altText="Home"
          label="Home"
        />
        <CategoryItem
          to="/beauty"
          imgSrc={img3}
          altText="Beauty"
          label="Beauty"
        />
        <CategoryItem
          to="/clothing"
          imgSrc={img4}
          altText="Clothing"
          label="Clothing"
        />
        <CategoryItem
          to="/Grocery"
          imgSrc={img5}
          altText="Grocery"
          label="Grocery"
        />
        <CategoryItem to="/Toys" imgSrc={img6} altText="Toys" label="Toys" />
      </div>
    </div>
  );
}

function CategoryItem({ to, imgSrc, altText, label }) {
  return (
    <div className="col-md-2">
      <Link to={to}>
        <img src={imgSrc} alt={altText} />
        <span
          style={{
            color: "black",
            paddingRight: "0%",
            fontSize: "12px",
            bottom: "5px",
          }}
        >
          {label}
        </span>
      </Link>
    </div>
  );
}

export default Category;

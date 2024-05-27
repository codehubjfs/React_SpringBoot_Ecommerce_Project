// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Productcard.css'; // Make sure to create this CSS file
//
// const ProductCard = ({ id, imageSrc, title, description, price, ratings }) => {
//     const filledStars = Math.floor(ratings); // Number of filled stars (integer part)
//     const hasHalfStar = ratings - filledStars >= 0.5; // Check if there is a half star
//
//     return (
//         <div className="col-md-4">
//             <div className="card">
//                 <Link to={`/product/${id}`} className="product-link"> {/* Added Link to Product Details Page */}
//                     <img src={imageSrc} className="card-img-top" alt="Product Image"/>
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <div className="review-stars">
//                             {[...Array(5)].map((_, index) => (
//                                 <span key={index}
//                                       className={index < filledStars ? "fas fa-star" : index === filledStars && hasHalfStar ? "fas fa-star-half-alt" : "far fa-star"}></span>
//                             ))}
//                             <p className="card-text"><small className="text-muted">Price: ₹{price}</small></p>
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//
// );
// };
//
// export default ProductCard;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ productId, categoryId, imageSrc, title, description, price, ratings }) => {
  // const ProductCard = () => {

  // const productData=useSelector((state)=>state.products.products)
  // console.log(productData);
  // const { mainImage, title, description, ratings, price, categoryId, productId } = productData;
// console.log({mainImage});
    return (
        <div className="col-md-4 mb-4">
      <div className="card-p">
        <Link
          to={`/product/${categoryId}/${productId}`}
          style={{ textDecoration: "none", color: "black" }}
          className="product-link"
        >
          <img src={imageSrc} className="card-img-top" alt="Product Image" />
        </Link>
        <div className="card-body">
          <Link
            to={`/product/${categoryId}/${productId}`}
            style={{ textDecoration: "none", color: "black" }}
            className="product-link"
          >
            <h5 className="card-p-title">{title}</h5>
          </Link>
          <p className="card-p-text">{description}</p>
          <div className="review-stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < ratings ? "fas fa-star" : "far fa-star"}
              ></span>
            ))}
          </div>
          <p className="card-text">
            <span className="text-muted">Price: ₹{price}</span>
          </p>
        </div>
        <div className="buttons-container">
          <button type="button" className="btn btn-custom-orange shadow-0">
            <i className="fas fa-cart-plus"></i>
          </button>
          <button type="button" className="like-btn">
            <i className="fas fa-heart"></i>
          </button>
          <Link
            to={`/product/${categoryId}/${productId}`}
            style={{ textDecoration: "none" }}
          >
            <a
              className="btn btn-custom-yellow shadow-0"
              style={{ marginLeft: "6px" }}
            >
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;

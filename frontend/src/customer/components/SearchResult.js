import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const SearchResults = () => {
  const { products, status, error } = useSelector((state) => state.search);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          productTitle={product.productTitle}
          description={product.description}
          price={product.price}
          rating={product.rating}
          mainImage={product.mainImage}
          categoryId={product.categoryId}
          category={product.category}
          supplierId={product.supplierId}
          {...product}
        />
      ))}
    </div>
  );
};

export default SearchResults;
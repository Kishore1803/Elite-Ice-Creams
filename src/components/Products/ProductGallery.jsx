import React from "react";
import ProductCard from "./ProductCard";

const ProductGallery = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="fw-bold">No Products Found</h3>
          <p className="text-muted">Try searching with a different keyword.</p>
        </div>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGallery;
import React, { useState } from "react";
import { FaHeart, FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useContext(CartContext);
  const {addToWishlist} = useContext(WishlistContext);

  return (
    <div className="card border-0 shadow-sm rounded-4">
      {/* Product Image */}
      <div className="position-relative">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top rounded-4"
          style={{
            height: "270px",
            width: "100%",
            objectFit: "Fill",
          }}
        />

        {/* Badge */}
        <span
          className={`badge position-absolute top-0 start-0 m-3 ${
            product.badge === "New" ? "bg-primary" : "bg-danger"
          }`}
        >
          {product.badge}
        </span>

        {/* Wishlist */}
        <button
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm"
          onClick={() => {
            addToWishlist(product);
            alert(`${product.name} added to wishlist`)
          }}
        >
          <FaHeart className="text-danger" />
        </button>
      </div>

      {/* Product Details */}
      <div className="card-body">
        <h5 className="fw-bold">{product.name}</h5>
        <small className="text-muted">{product.category}</small>

        {/* Rating */}
        <div className="my-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-warning me-1" />
          ))}
          <small className="text-muted">({product.reviews})</small>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="fs-4 fw-bold text-danger">₹{product.price}</span>
          <span className="text-decoration-line-through text-secondary ms-2">
            ₹{product.originalPrice}
          </span>
          <span className="badge bg-success ms-2">{product.discount}</span>
        </div>

        {/* Stock */}
        <p className="text-success fw-semibold">
          {product.stock ? "● In Stock" : "● Out of Stock"}
        </p>

        {/* Quantity */}
        <div className="d-flex align-items-center justify-content-center mb-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            -
          </button>
          <span className="mx-3 fw-bold">{quantity}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="d-grid gap-2">
          <button
            className="btn btn-danger rounded-pill"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart className="me-2" />
            Add to Cart
          </button>

          <button className="btn btn-outline-danger rounded-pill">
            <FaBolt className="me-2" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
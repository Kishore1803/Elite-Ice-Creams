import React, { useContext } from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { WishlistContext } from "../components/Context/WishlistContext";
import { CartContext } from "../components/Context/CartContext";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleRemove = (item) => {
    removeFromWishlist(item.id);
    alert(`${item.name} removed from wishlist!`);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mt-5">❤️ My Wishlist</h2>

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <h3>Your Wishlist is Empty</h3>
            <p className="text-muted">Save your favourite ice creams here.</p>
          </div>
        ) : (
          <div className="row g-4">
            {wishlist.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="card shadow border-0 rounded-4 h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card rounded"
                    style={{
                      height: "240px",
                      objectFit: "fit",
                    }}
                  />

                  <div className="card-body">
                    <h5 className="fw-bold">{item.name}</h5>

                    <small className="text-muted">{item.category}</small>

                    <div className="my-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-1" />
                      ))}
                      <small className="text-muted">({item.reviews})</small>
                    </div>

                    <div className="mb-3">
                      <span className="fs-4 fw-bold text-danger">
                        ₹{item.price}
                      </span>

                      <span className="text-decoration-line-through text-secondary ms-2">
                        ₹{item.originalPrice}
                      </span>

                      <span className="badge bg-success ms-2">
                        {item.discount}
                      </span>
                    </div>

                    <p className="text-success fw-semibold">● In Stock</p>

                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-danger rounded-pill"
                        onClick={() => handleAddToCart(item)}
                      >
                        <FaShoppingCart className="me-2" />
                        Add to Cart
                      </button>

                      <button
                        className="btn btn-outline-danger rounded-pill"
                        onClick={() => handleRemove(item)}
                      >
                        <FaHeart className="me-2" />
                        Remove Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
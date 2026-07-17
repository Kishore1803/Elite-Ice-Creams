import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { CartContext } from "../components/Context/CartContext";
import { FaTrash, FaShoppingBag, FaStar } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (item) => {
    removeFromCart(item.id);
    // Remove this alert if you already have one in CartContext.jsx
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty!\nPlease add items to continue.");
      return;
    }

    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <div className="container p-5">
        <h2 className="text-center fw-bold mt-5">🛒 My Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <h3>Your Cart is Empty</h3>
            <p className="text-muted">
              Add your favourite ice creams to your cart.
            </p>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {cart.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="card shadow border-0 rounded-4 h-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">
                      <h5 className="fw-bold">{item.name}</h5>

                      <small className="text-muted">{item.category}</small>

                      <div className="my-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} className="text-warning me-1" />
                        ))}

                        <small className="text-muted">({item.reviews})</small>
                      </div>

                      <div className="mb-2">
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

                      <p className="text-success fw-bold">● In Stock</p>

                      <h6>Quantity : {item.quantity}</h6>

                      <h5 className="mt-3">
                        Total : ₹{item.price * item.quantity}
                      </h5>

                      <button
                        className="btn btn-danger rounded-pill w-100 mt-3"
                        onClick={() => handleRemove(item)}
                      >
                        <FaTrash className="me-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card shadow border-0 rounded-4 p-4 mt-5">
              <h3 className="fw-bold">
                Grand Total :<span className="text-danger ms-2">₹{total}</span>
              </h3>

              <button
                className="btn btn-success btn-lg rounded-pill mt-3"
                onClick={handleCheckout}
              >
                <FaShoppingBag className="me-2" />
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
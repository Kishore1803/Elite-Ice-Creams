import React, { useContext } from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { CartContext } from "../components/Context/CartContext";
import { FaTrash, FaShoppingBag, FaStar } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (item) => {
    removeFromCart(item.id);
    alert(`${item.name} removed from cart!`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`🎉 Order placed successfully!\n\nTotal Amount: ₹${total}`);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mt-5">🛒 My Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center p-5">
            <h3>Your Cart is Empty</h3>
            <p className="text-muted">
              Add your favourite ice creams to the cart.
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
                      className="card-img-top rounded-top-4"
                      style={{
                        height: "260px",
                        objectFit: "cover",
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

                      <p>
                        <strong>Quantity:</strong> {item.quantity}
                      </p>

                      <button
                        className="btn btn-danger w-100 rounded-pill"
                        onClick={() => handleRemove(item)}
                      >
                        <FaTrash className="me-2" />
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card shadow-lg border-0 rounded-4 mt-5 p-4">
              <h3 className="fw-bold">
                Total Amount:
                <span className="text-danger ms-2">₹{total}</span>
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
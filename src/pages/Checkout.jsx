import React, { useContext, useState } from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { CartContext } from "../components/Context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (cart.length === 0 || total === 0) {
      alert(
        "🛒 Your cart is empty!\nPlease add items before placing an order.",
      );
      return;
    }

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all shipping details.");
      return;
    }

    if (form.payment === "UPI" && !form.upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      (form.payment === "Credit Card" || form.payment === "Debit Card") &&
      (!form.cardNumber || !form.cardHolder || !form.expiry || !form.cvv)
    ) {
      alert("Please enter all card details.");
      return;
    }

    alert(
      `🎉 Order Placed Successfully! Customer : ${form.name} Payment : ${form.payment} 
       Total Amount : ₹${total} 
       Thank you for shopping with Elite Ice Creams 🍦`,
    );
  };
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center fw-bold mt-5">Checkout</h2>
        <div className="row">

          {/* Shipping */}
          <div className="col-lg-7">
            <div className="card shadow border-0 rounded-4 p-4">
              <h4 className="mb-4">Shipping Details</h4>
              <input
                className="form-control mb-3"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="form-control mb-3"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                style={{resize: "none"}}
              />
              <label className="fw-bold mb-2">Payment Method</label>
              <select
                className="form-select mb-3"
                name="payment"
                value={form.payment}
                onChange={handleChange}
              >
                <option>Cash on Delivery</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
              </select>
              {form.payment === "UPI" && (
                <input
                  className="form-control mb-3"
                  placeholder="Enter UPI ID"
                  name="upiId"
                  value={form.upiId}
                  onChange={handleChange}
                />
              )}
              {(form.payment === "Credit Card" ||
                form.payment === "Debit Card") && (
                <>
                  <input
                    className="form-control mb-3"
                    placeholder="Card Number"
                    maxLength="16"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control mb-3"
                    placeholder="Card Holder Name"
                    name="cardHolder"
                    value={form.cardHolder}
                    onChange={handleChange}
                  />
                  <div className="row">
                    <div className="col-6">
                      <input
                        className="form-control mb-3"
                        placeholder="MM/YY"
                        name="expiry"
                        value={form.expiry}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="CVV"
                        maxLength="3"
                        name="cvv"
                        value={form.cvv}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5">
            <div className="card shadow border-0 rounded-4 p-4">
              <h4>Order Summary</h4>
              <hr />
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                cart.map((item) => (
                  <div
                    className="d-flex justify-content-between mb-3"
                    key={item.id}
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      Qty : {item.quantity}
                    </div>
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                ))
              )}
              <hr />
              <h3 className="text-danger">Total : ₹{total}</h3>
              <button
                className="btn btn-success w-100 rounded-pill mt-3"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

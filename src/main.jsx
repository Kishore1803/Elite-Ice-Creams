import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

import { CartProvider } from "./components/Context/CartContext";
import { WishlistProvider } from "./components/Context/WishlistContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
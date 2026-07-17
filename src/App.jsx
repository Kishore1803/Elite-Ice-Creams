import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="*" element={<h1 className="text-center mt-5">404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
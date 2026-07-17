import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-absolute top-0 start-0 w-100">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🍦 Elite Ice Creams
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <FaBars size={24} className="text-white" />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/wishlist">
                Wishlist <FaHeart />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3 text-white" to="/cart">
                Add to Cart <FaShoppingCart />
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="mt-3 mt-lg-0">
            <Link
              to="/Login"
              className="btn btn-outline-light rounded-pill px-4"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
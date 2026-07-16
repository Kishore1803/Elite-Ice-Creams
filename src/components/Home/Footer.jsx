import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>🍦 Elite Ice Creams</h2>
            <p>Fresh & Delicious Ice Cream Delivered to Your Doorstep.</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-decoration-none text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div className="d-flex gap-3 fs-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">
          © 2026 Elite Ice Creams. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;

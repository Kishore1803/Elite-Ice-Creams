import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";

function ProductCard({ image, title, price }) {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
      <div className="card border-0 shadow-lg rounded-4 h-100 product-card">
        <div className="row g-0 align-items-center h-100">
          {/* Image */}

          <div className="col-lg-5 col-md-5 col-12 text-center position-relative p-4">
            <span className="badge bg-danger position-absolute top-0 start-0 ms-3 mt-2">
              Bestseller
            </span>

            <img src={image} alt={title} className="product-image" />
          </div>

          {/* Content */}

          <div className="col-lg-7 col-md-7 col-12">
            <div className="card-body text-center text-lg-start">
              <h2 className="fw-bold">{title}</h2>

              <div className="mb-3 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span className="text-dark ms-2">(4.9)</span>
              </div>

              <h2 className="text-danger fw-bold mb-3">₹{price}</h2>

              <p className="text-muted">
                Fresh premium ice cream made with natural ingredients.
              </p>

              <button className="btn btn-dark rounded-pill px-3">
                <FaShoppingCart className="me-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
import { Link } from "react-router-dom";
import IceCreamImage from "./IceCreamImage";

function HeroContent() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start text-white mb-3"> 
          <h1 className="display-2 fw-bold hero-title">
            Premium <br />
            Ice Cream
          </h1>

          <p className="lead mt-4 hero-description">
            Freshly prepared premium ice creams made with natural ingredients
            and delivered directly to your doorstep.
          </p>

          <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
            <Link
              to="/products"
              className="btn btn-light btn-lg rounded-pill px-5 fw-bold"
            >
              Order Now
            </Link>

            <Link
              to="/about"
              className="btn btn-outline-light btn-lg rounded-pill px-5"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12 text-center position-relative">
          <IceCreamImage />
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
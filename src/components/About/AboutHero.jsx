import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/hero-icecream.png";

// css
import "./About.css";

function AboutHero() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}

          <div className="col-lg-6 text-white">
            <h5 className="text-warning fw-bold mb-3">
              About Elite Ice Creams
            </h5>

            <h1 className="display-3 fw-bold mb-4">
              Every Scoop
              <br />
              Tells a Sweet Story 🍦
            </h1>

            <p className="lead">
              Welcome to <strong>Elite Ice Creams</strong>, where passion meets
              flavor. We create premium ice creams using fresh milk, natural
              ingredients, and carefully selected flavors to bring happiness to
              every customer.
            </p>

            <p>
              Whether you love classic vanilla, rich chocolate, refreshing
              mango, or fruity strawberry, our goal is to make every scoop a
              memorable experience.
            </p>

            <div className="mt-4">
              <Link
                to="/products"
                className="btn btn-warning btn-lg rounded-pill px-5 me-3 mt-2"
              >
                Explore Menu
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg rounded-pill px-5 mt-2"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src={aboutImage}
              alt="Elite Ice Creams"
              className="img-fluid about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
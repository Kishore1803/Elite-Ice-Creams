import { FaIceCream, FaTruck, FaLeaf, FaSmile } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-danger fw-bold">Why Choose Us</h5>

          <h2 className="display-5 fw-bold">We Make Every Scoop Special</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow text-center p-4 h-100 why-card">
              <FaIceCream className="text-danger mx-auto mb-3" size={50} />

              <h4>Premium Flavours</h4>

              <p className="text-muted">
                More than 25 delicious flavours made with fresh ingredients.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow text-center p-4 h-100 why-card">
              <FaTruck className="text-danger mx-auto mb-3" size={50} />

              <h4>Fast Delivery</h4>

              <p className="text-muted">
                Quick and safe delivery to your doorstep.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow text-center p-4 h-100 why-card">
              <FaLeaf className="text-danger mx-auto mb-3" size={50} />

              <h4>Fresh Ingredients</h4>

              <p className="text-muted">
                We use only premium milk, fruits and natural ingredients.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow text-center p-4 h-100 why-card">
              <FaSmile className="text-danger mx-auto mb-3" size={50} />

              <h4>Customer Happiness</h4>

              <p className="text-muted">
                Thousands of satisfied customers enjoy our ice creams every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
import storyImage from "../../assets/images/about-story.png";

function AboutStory() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}

          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={storyImage}
              alt="Our Story"
              className="about-story-img"
            />
          </div>

          {/* Content */}

          <div className="col-lg-6">
            <h5 className="text-danger fw-bold">Our Story</h5>

            <h2 className="display-5 fw-bold mb-4">Every Scoop Has A Story</h2>

            <p className="text-muted">
              Elite Ice Creams started with one simple goal: to create fresh,
              delicious ice creams using premium ingredients that bring
              happiness to every customer.
            </p>

            <p className="text-muted">
              From classic flavors like Vanilla and Chocolate to exciting
              seasonal specials, every product is prepared with love, quality,
              and freshness.
            </p>

            <div className="row mt-4">
              <div className="col-6">
                <h3 className="text-danger fw-bold">25+</h3>

                <p>Premium Flavours</p>
              </div>

              <div className="col-6">
                <h3 className="text-danger fw-bold">1000+</h3>

                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
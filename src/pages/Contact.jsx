import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container">
          {/* Heading */}
          <div className="text-center mt-5">
            <h1 className="fw-bold text-danger">Contact Us</h1>
            <p className="text-muted">
              We'd love to hear from you! Reach out for orders, support, or
              feedback.
            </p>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="card border-0 shadow rounded-4 p-4 h-100">
                <h3 className="fw-bold mb-4">Get In Touch</h3>

                <div className="d-flex mb-4">
                  <FaMapMarkerAlt className="text-danger fs-3 me-3" />
                  <div>
                    <h6 className="fw-bold">Address</h6>
                    <p className="text-muted mb-0">
                      123 Ice Cream Street,
                      <br />
                      Salem, Tamil Nadu - 636001
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <FaPhoneAlt className="text-danger fs-3 me-3" />
                  <div>
                    <h6 className="fw-bold">Phone</h6>
                    <p className="text-muted mb-0">+91 98765 43210</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <FaEnvelope className="text-danger fs-3 me-3" />
                  <div>
                    <h6 className="fw-bold">Email</h6>
                    <p className="text-muted mb-0">
                      support@eliteicecreams.com
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <FaClock className="text-danger fs-3 me-3" />
                  <div>
                    <h6 className="fw-bold">Working Hours</h6>
                    <p className="text-muted mb-0">
                      Mon - Sun : 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow rounded-4 p-4">
                <h3 className="fw-bold mb-4">Send Message</h3>

                <form action="/contact" method="POST">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows="6"
                      className="form-control"
                      style={{ resize: "none" }}
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button className="btn btn-danger px-5 rounded-pill">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;

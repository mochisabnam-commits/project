import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p className="small">
              We provide high-quality products and services with a focus on
              customer satisfaction and innovation.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact</h5>
            <ul className="list-unstyled small">
              <li>Email: info@example.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-light me-3 text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

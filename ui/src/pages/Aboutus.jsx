import React from 'react'

export const Aboutus = () => {
  return (
    <div className="container my-5">

      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          Learn more about who we are, what we do, and why customers trust us.
        </p>
      </div>

      {/* Who We Are */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p className="text-muted">
            We are a fast-growing electronics and technology platform dedicated to
            delivering high-quality products including mobiles, laptops, and home
            appliances. Our platform is built with modern technology to ensure a
            smooth and secure shopping experience.
          </p>
          <p className="text-muted">
            From students and professionals to families, we serve thousands of
            customers by offering trusted brands and value-for-money products.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Who We Are"
            className="img-fluid"
            style={{ maxHeight: "280px" }}
          />
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                Our mission is to make technology accessible to everyone by providing
                reliable products at affordable prices while maintaining excellent
                customer service and transparency.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                Our vision is to become a trusted global platform for electronics by
                continuously innovating, expanding our product range, and building
                long-term relationships with customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h3 className="fw-bold mb-3 text-center">Why Choose Us</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Quality Assurance</h5>
                <p className="text-muted">
                  All products go through strict quality checks before delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Secure Payments</h5>
                <p className="text-muted">
                  Multiple safe and secure payment options for your convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">
                  Reliable delivery services to ensure timely product arrival.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Customer Support</h5>
                <p className="text-muted">
                  Dedicated support team available 24/7 to assist customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <h3 className="fw-bold mb-3">Our Core Values</h3>
          <ul className="text-muted">
            <li>Customer-first approach</li>
            <li>Integrity and transparency</li>
            <li>Innovation and continuous improvement</li>
            <li>Commitment to quality</li>
            <li>Responsible business practices</li>
          </ul>
        </div>

        <div className="col-md-6 order-md-1 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Our Values"
            className="img-fluid"
            style={{ maxHeight: "260px" }}
          />
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center">
        <h4 className="fw-bold">Thank You for Choosing Us</h4>
        <p className="text-muted">
          We believe in building trust through quality service and long-lasting
          relationships. Your satisfaction is our success.
        </p>
      </div>

    </div>
  )
}

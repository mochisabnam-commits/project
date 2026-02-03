import React from 'react'

export const Contact = () => {
  return (
   

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Contact Us</h3>
          <form>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" />
            </div>
            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} placeholder="Write your message" defaultValue={""} />
            </div>
            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

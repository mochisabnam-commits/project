import axios from "axios";
import React, { useEffect, useState } from "react";

export const Cart = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/fetchorder")
      .then((res) => {
        console.log(res.data); // 👈 IMPORTANT: see structure
        setCart(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">My Cart</h3>

      <div className="row">
        {cart.length === 0 && <p>No items in cart</p>}

        {
          cart.map((item, index) => {
            const product = item.orderId; // ✅ populated product

            if (!product) return null;

            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">

                  <img
                    src={product.p_img}
                    alt={product.p_name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "contain"
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{product.p_name}</h6>

                    <p className="text-muted small mb-1">
                      {product.category}
                    </p>

                    <p className="card-text small" style={{ flexGrow: 1 }}>
                      {product.p_desc}
                    </p>

                    <h6 className="text-success">₹ {product.p_price}</h6>

                    <span className="badge bg-warning text-dark mb-2">
                      ⭐ {product.rating}
                    </span>

                    <button className="btn btn-danger btn-sm mt-auto">
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
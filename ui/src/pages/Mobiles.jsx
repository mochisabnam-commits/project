import axios from "axios";
import React, { useEffect, useState } from "react";

export const Mobiles = () => {
  const [MO, setMO] = useState([]);




    function storeDB(data){


     axios.post("http://localhost:8000/order",data)
    .then((d)=>{
      alert("Order Placed")
    })
    .catch(()=>{
      alert("Error in Placed Order")
    })




    
    





  }



  useEffect(() => {
    axios
      .get("http://localhost:8000/fetchbyCategory/Mobile")
      .then((res) => {
        console.log(res.data);
        setMO(res.data); // ✅ IMPORTANT
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // ✅ dependency array

  return (
    <div className="container my-4">
      <div className="row">
        {MO.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item._id}>
            <div className="card h-100 shadow">
              <img
                src={item.p_img}
                className="card-img-top img-fluid"
                alt={item.p_name}
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">{item.p_name}</h5>
                <p className="text-muted">{item.category}</p>

                <p className="card-text">{item.p_desc}</p>

                <h6 className="text-success">₹{item.p_price}</h6>
                <p>⭐ {item.rating}</p>

                <ul className="list-group list-group-flush">
                  {item.specification?.map((spec, index) => (
                    <li className="list-group-item px-0" key={index}>
                      ✔ {spec}
                    </li>
                  ))}
                  <button className='btn btn-outline-primary' onClick={()=>{storeDB(item)}}   >Add To Cart</button>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


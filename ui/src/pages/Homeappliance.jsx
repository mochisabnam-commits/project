import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Homeappliance = () => {


    let [HA,setHA] = useState([])


    useEffect(()=>{

        axios.get("http://localhost:8000/fetchbyCategory/HomeAppliance")
        .then((data)=>{

            console.log(data.data);
            setHA(data.data)
            

        })
        .catch((e)=>{
            console.log(e);
            
        })

    },[])


  return (
  <div className="container my-4">
      <div className="row">
        {HA.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item._id}>
            <div className="card h-100 shadow">

              <img
                src={item.p_img}
                className="card-img-top img-fluid"
                alt={item.p_name}
                 style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">{item.p_name}</h5>
                <p className="text-muted">{item.category}</p>

                <p className="card-text">
                  {item.p_desc}
                </p>

                <h6 className="text-success">₹{item.p_price}</h6>
                <p>⭐ {item.rating}</p>

                <ul className="list-group list-group-flush">
                  {item.specification.map((spec, index) => (
                    <li className="list-group-item px-0" key={index}>
                      ✔ {spec}
                    </li>
                  ))}

                  <button className='btn btn-outline-primary'>Add To Cart</button>
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
   
  )
}



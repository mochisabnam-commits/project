import axios from 'axios';
import React, { useState } from 'react'

export const Contact = () => {



 let [name,setName] =  useState();
 let [email,setEmail] = useState();
  let [phone,setPhone] = useState();
   let [msg,setMsg] = useState();




function HandleSubmit(event){

  event.preventDefault();



  let FormData = {
    name,
    email,
    phone,
    msg
  }

  console.log(FormData);

  axios.post("http://localhost:8000/contact",FormData)
  .then((res)=>{

    alert(res.data)
  })
  .catch((e)=>{
    alert(e.data);
  })
  

}




  return (
   

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Contact Us</h3>
          <form  onSubmit={()=>{HandleSubmit(event)}} >
            {/* Name */}0
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required  onChange={(event)=>setName(event.target.value)}   />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" required  onChange={(event)=>setEmail(event.target.value)}  />
            </div>
            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number"  onChange={(event)=>setPhone(event.target.value)}   />
            </div>
            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} placeholder="Write your message" defaultValue={""}   onChange={(event)=>setMsg(event.target.value)} />
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

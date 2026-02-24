
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecomm</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         
           <Link to={"/"} className="nav-link active"  >Home</Link>
        </li>
        <li className="nav-item">
        
          <Link to={"/about"} className="nav-link"  >About</Link>
        </li>
        <li className="nav-item dropdown">
          
           <Link to={"/product"}    className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false" >Product</Link>
          <ul className="dropdown-menu">
            
            <li>
              <Link to={"/homeappliance"}   className="dropdown-item"  >Home Appliance</Link>
            </li>
           
              <li>
              <Link to={"/mobiles"}   className="dropdown-item"  >Mobiles</Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
             <li>
              <Link to={"/laptop"}   className="dropdown-item"  >Laptop</Link>
            </li>
          </ul>
        </li>
        <li>
      
         
          <Link to={"/cart"} className="nav-link"  >Cart</Link>
          
        </li>
        <li className="nav-item">
         
          <Link to={"/contact"} className="nav-link"  >Contact</Link>
          
        </li>
      </ul>
     
    </div>
  </div>
</nav>



    </div>
  )
}













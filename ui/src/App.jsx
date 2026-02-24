
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Aboutus } from "./pages/Aboutus"
import { Contact } from "./pages/Contact"
import { Products } from "./pages/Products"
import { Nav } from "./components/Nav"
import Footer from "./components/Footer"
import { Homeappliance } from "./pages/Homeappliance"
import { Mobiles } from "./pages/Mobiles"
import { Laptop} from "./pages/Laptop"
import {Cart} from "./components/Cart"

function App() {
 
  
  return (
 <BrowserRouter>

 <Nav />
 
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<Aboutus />}></Route>
  <Route path="/contact" element={<Contact />} ></Route>
  <Route path="/product" element={<Products />}></Route>
  <Route path="/homeappliance" element={<Homeappliance />} ></Route>
  <Route path="/mobiles" element={<Mobiles />}></Route>
  <Route path="/laptop" element={<Laptop/>} ></Route>
  <Route path="/cart"   element={<Cart />}  />
  

 </Routes>

 <Footer />
 
 
 </BrowserRouter>
  )
}

export default App



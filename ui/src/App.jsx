
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Aboutus } from "./pages/Aboutus"
import { Contact } from "./pages/Contact"
import { Products } from "./pages/Products"
import { Nav } from "./components/Nav"
function App() {
 

  return (
 <BrowserRouter>

 <Nav />
 
 <Routes>

  <Route path="/" element={<Home/>}> </Route>
  <Route path="/about" element={<Aboutus />}></Route>
  <Route path="/contact" element={<Contact />} ></Route>
  <Route path="/product" element={<Products />}></Route>
 </Routes>
 
 
 </BrowserRouter>
  )
}

export default App

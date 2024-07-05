import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Notfound from "./pages/Notfound"
import Electronicpage from "./pages/Electronicpage"
import Jawellerypage from "./pages/Jawellerypage"
import Menclothpage from "./pages/Menclothpage"
import Womencloth from "./pages/Womencloth"
import Electronicdetail from "./pages/Electronicdetail"
import Menproductdetail from "./pages/Menproductdetail"
import Womenproductdetail from "./pages/Womenproductdetail"
import Jeweelproductdetail from "./pages/Jeweelproductdetail"
import Cart from "./pages/Cart"
import { useState } from "react"


function App() {
  
  const [cart, setcart] = useState([])

  return (
    <div className="bg-[#fcf8ef]">
    <Routes>
      <Route path="/" element={<Home cart={cart} setcart={setcart} />} />
      <Route path="/electronics" element={<Electronicpage cart={cart} setcart={setcart} />} />
      <Route path="/electronics/detail/:id" element={<Electronicdetail cart={cart} setcart={setcart} />}/>
      <Route path="/jewelery" element={<Jawellerypage cart={cart} setcart={setcart} />} />
      <Route path="/jewelery/detail/:id" element={<Jeweelproductdetail cart={cart} setcart={setcart} />} />
      <Route path="/men's clothing" element={<Menclothpage cart={cart} setcart={setcart} />} />
      <Route path="/men's clothing/detail/:id" element={<Menproductdetail cart={cart} setcart={setcart} />} />
      <Route path="/women's clothing" element={<Womencloth cart={cart} setcart={setcart} />} />      
      <Route path="/women's clothing/detail/:id" element={<Womenproductdetail cart={cart} setcart={setcart} />}/>      
      <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />      


      <Route path="*" element={<Notfound />} />
    </Routes>
    </div>
  )
}

export default App

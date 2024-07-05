

import axios from "../utils/axios"
import Category from "../components/Category"
import Frame from "../components/Frame"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import Freedelivery from "../components/Freedelivery"

const Home = ({cart,setcart}) => {

    const [productinfo, setproductinfo] = useState(null)

const product =async()=>{
    try {
        const res= await axios.get(`/products`)
        console.log("data",res.data);
        setproductinfo(res.data)
    } catch (error) {
        console.log("err",error.response.message);
    }
}

useEffect(()=>{
    product()
},[])

  return productinfo ? (
    <div>
   <Header cart={cart} />
   <Frame />
   <Category />
  <Product data={productinfo} cart={cart} setcart={setcart} />
  <hr className="my-5"/>
  <Freedelivery />
   <hr className="my-5" />
   <Footer />
    </div>
  ):<Loader />
}
export default Home
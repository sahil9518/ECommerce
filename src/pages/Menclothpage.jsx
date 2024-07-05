import axios from "../utils/axios"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Product from "../components/Product"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import Freedelivery from "../components/Freedelivery"



const Menclothpage = ({cart,setcart}) => {

    const [mencloth, setmencloth] = useState(null)


    const product =async()=>{
        try {
            const res= await axios.get(`/products/category/men's clothing`)
            console.log("data",res.data);
            setmencloth(res.data)
        } catch (error) {
            console.log("err",error.response.message);
        }
    }

    useEffect(()=>{
        product()
    },[])

    return mencloth ? (
        <div className="">
         <Header cart={cart} setcart={setcart} />
         <Product data={mencloth} cart={cart} setcart={setcart} />
         <hr className="my-5"/>
         <Freedelivery />
         <hr className="my-5" />
         <Footer />
        </div>
      ) : <Loader />
}
export default Menclothpage
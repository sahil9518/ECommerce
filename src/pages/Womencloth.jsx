import axios from "../utils/axios"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Product from "../components/Product"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import Freedelivery from "../components/Freedelivery"


const Womencloth = ({cart,setcart}) => {
    const [womencloth, setwomencloth] = useState(null)


    const product =async()=>{
        try {
            const res= await axios.get(`/products/category/women's clothing`)
            console.log("data",res.data);
            setwomencloth(res.data)
        } catch (error) {
            console.log("err",error.response.message);
        }
    }

    useEffect(()=>{
        product()
    },[])


    return womencloth ? (
        <div>
         <Header cart={cart}/>
         <Product data={womencloth} cart={cart} setcart={setcart} />
         <hr className="my-5"/>
         <Freedelivery />
         <hr className="my-5" />
         <Footer />
        </div>
      ) : <Loader />
}
export default Womencloth
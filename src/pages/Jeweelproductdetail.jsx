import { useEffect} from "react"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Freedelivery from "../components/Freedelivery"

import { useDispatch, useSelector } from "react-redux"

import { removeproduct } from "../store/reducer/JaweelSlice"
import Form from 'react-bootstrap/Form';
import { jeweelapi } from "../store/actions/jeweelasync"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader"


const Jeweelproductdetail = ({cart,setcart}) => {

  const{id} =useParams()
  const {value} = useSelector((state) => state.jeweel)
  console.log("val",value);
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(jeweelapi(id));
    return ()=>{
      dispatch(removeproduct());
    }
},[id])



const addtocart=(event,image,title,price,id)=>{
  event.stopPropagation();
  event.preventDefault();
   let obj={
    image,title,price,id
   }
   setcart([...cart,obj])
   console.log("cart-->",cart);
   toast.success('Your Item is Added', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })
}



  return value ? (
    <div className="h-[100%]">

<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>

    <Header cart={cart}/>
    
    <div className="md:mx-5 md:my-5 mt-10 flex flex-col items-center md:items-start md:flex-row gap-6 " key={value.id}>
      <div className="w-[80%] md:w-[40%]  flex justify-center  rounded-lg">
        <img src={value.image} className="w-[80%] h-[40vh] lg:h-[40vh]"  alt="" />
      </div>
      <div className="flex flex-col gap-6 sm:gap-3 w-[60%] ">
        <h1 className="text-xl md:text-3xl font-bold text-zinc-500">{value.title}</h1>
        {value.rating && (
            <p className="font-semibold text-zinc-500 text-xl">Rating: {value.rating.rate} ({value.rating.count})</p>
          )}
        <p className="text-2xl md:text-2xl text-zinc-500">${value.price}</p>
        <p className="text-2xl underline underline-offset-4 font-semibold text-zinc-500">About this item</p>
        <p className="font-semibold text-zinc-500 text-xl">{value.description}</p>
        <div className="flex items-end gap-5">
        <Form.Select aria-label="Default select example" className="w-[120px] mt-3">
      <option>Quantity</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
    <Link className="bg-[#F7CA00] hover:bg-[#ea5454] px-5 py-2 text-black rounded-full" onClick={(event)=>{addtocart(event,value.image,value.title,value.price,value.id)}}>Add to Cart</Link>
    <Link className="bg-[#db4444] hover:bg-[#ea5454] px-5 py-2 text-white font-semibold rounded-full">Buy Now</Link>
        </div>
        <p className="text-zinc-500 mt-3"><i className="ri-git-repository-private-line text-[#999999] mr-2 font-medium"></i>Secure transaction</p>  
      </div>
     </div>
  
    <hr className="my-5"/>
    <Freedelivery />
    <hr className="my-5"/>
     <Footer />
    </div>
  ) : <Loader />
}
export default Jeweelproductdetail
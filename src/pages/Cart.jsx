import { Link } from "react-router-dom";
import Header from "../components/Header"
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import { useEffect, useState } from "react";

const Cart = ({cart,setcart}) => {


  const [quantity, setquantity] = useState(1)



console.log(quantity);

const handleQuantityChange = (e) => {
    setquantity(e.target.value)
   
  };

const deleteproduct=(ProductId)=>{
    setcart(cart.filter(item => item.id !== ProductId))
}

const subtotal = cart.reduce((total, item) => total + item.price, 0);


  return (
    <>
    <Header cart={cart} />
    <div className="sub">
        <div className="flex mx-5 mt-10 font-semibold" >
            <div className="w-[25%]">Product</div>
            <div className="w-[25%] text-center">Price</div>
            <div className="w-[25%] text-center">Quantitiy</div>
            <div className="w-[25%] text-center">Delete</div>

        </div>
        
          { cart.length>0 ?
          cart&&cart.map((cv)=>{
           return <>
            <div className="flex mx-5 mt-5 items-center font-semibold" key={cv.id}>
            <div className="flex items-center justify-start gap-2 w-[25%]">
                <img src={cv.image} className="w-[70px] h-[50px]" alt="" />
                <p>{cv.title}</p>
            </div>
            <div className="w-[25%] flex justify-center">
                <p>{cv.price}</p>
            </div>
            <div className="flex justify-center w-[25%]">
            <Form.Select aria-label="Default select example" className="w-[40px]  p-0" onChange={handleQuantityChange}>
      <option></option>
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
            </div>


            
            <div className="w-[25%] flex justify-center">
            <i className="ri-close-line text-3xl" onClick={()=>{deleteproduct(cv.id)}}></i>
            </div>
        </div>
            </>

          }): <div className="h-[50vh] flex flex-col gap-10 items-center justify-center text-zinc-500">
            <p className="text-6xl font-semibold">cart is empty</p>
            <Link to="/" className="bg-[#db4444] hover:bg-[#e15151] p-2 rounded-2xl text-white">Continue Shopping</Link>
           </div> 
        
        }

       
       {cart.length>0 &&
        <div className="flex justify-center my-5">
        <div className="mt-12 font-semibold border-2 border-black mx-5 p-5 w-[40%]">
        <div className="text-center text-2xl">Cart Total</div>
        <div className="flex justify-between mt-4">
        <p>Sub total : </p>
        <p>${subtotal}</p>
        </div>
        <hr />
        <div className="mt-4 flex justify-between">
        <p>Shipping : </p>
        <p>free</p>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
        <p>Total : </p>
        <p>${subtotal}</p>
        </div>
        <div className="flex justify-center">
        <Link className="bg-[#db4444] p-2 rounded-md text-white mt-4">Procees to checkout</Link>
        </div>
        </div>
        </div>
       }
    </div>
       <Footer />
    </>
  )
}
export default Cart
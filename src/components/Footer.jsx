import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="w-full bg-black  text-white">
   <div className=" flex justify-start gap-5 sm:flex sm:justify-evenly sm:gap-0 flex-wrap p-10" >
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Exclusive</h1>
      <p>Subscribe</p>
      <p>Get 10% off your first order</p>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Support</h1>
      <p>Crown Plaza, New Delhi, <br />  DH 1515, India.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Account</h1>
      <Link to="" >My Account</Link>
      <Link to="">Login / Register</Link>
      <Link to="" >Cart</Link>
      <Link to="" >Wishlist</Link>
      <Link to="" >Shop</Link>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Quick Link</h1>
      <Link>Privacy Policy</Link>
      <Link>Terms Of Use</Link>
      <Link>FAQ</Link>
      <Link>Contact</Link>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Download App</h1>
      <p>Save $3 with App New User Only</p>
      <img src="/Frame 719.png" alt="" />
      <div className="flex justify-start gap-8">
      <i className="ri-facebook-fill"></i>
      <i className="ri-twitter-x-line"></i>
      <i className="ri-instagram-line"></i>
      <i className="ri-linkedin-box-fill"></i>
      </div>
    </div>
   </div>
     <p className="text-center pb-3">&copy; Copyright Rimel 2024. All right reserved</p> 
     </div>
    </>
  )
}
export default Footer
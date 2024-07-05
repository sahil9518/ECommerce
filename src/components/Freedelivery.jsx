const Freedelivery = () => {
  return (
    <>
     <div className="flex flex-col gap-5 justify-evenly md:flex md:flex-row my-7">
    <div className="text-center">
      <img src="/shipping.png" className="ml-auto mr-auto" alt="" />
      <h1 className="font-bold my-2">FREE AND FAST DELIVERY</h1>
      <p>Free delivery for all orders over $140</p>
    </div>
    <div className="text-center">
      <img src="/headphone.png" className="ml-auto mr-auto" alt="" />
      <h1 className="font-bold my-2">24/7 CUSTOMER SERVICE</h1>
      <p>Friendly 24/7 customer support</p>
    </div>
    <div className="text-center">
      <img src="/tick.png" className="ml-auto mr-auto" alt="" />
      <h1 className="font-bold my-2">MONEY BACK GUARANTEE</h1>
      <p>We reurn money within 30 days</p>
    </div>
   </div> 
    </>
  )
}
export default Freedelivery
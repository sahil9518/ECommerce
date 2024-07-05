import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ data , cart , setcart }) => {
  
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


  return (
    <>
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

    <div>
      <div className="text-4xl font-semibold text-center my-3 text-zinc-600">
        Explore Our Products
      </div>
    </div>

      <div className="flex flex-wrap justify-center gap-5 py-4">
        {data &&
          data.map((cv) => {
            return (
              <>
                <Link key={cv.id} to={`/${cv.category}/detail/${cv.id}`}
                  className="border-2 w-[300px] py-8 px-3 hover:scale-105 hover:duration-500"
                  onClick={(event)=>{outerlink(event)}}
                >
                  <div className="w-[100%] h-[100%]">
                    <img
                      src={cv.image}
                      alt="pic"
                      className="w-[20vw] h-[13vw] "
                    />
                    <div>
                      <div>
                        <p className="font-semibold mt-4 hover:text-[#CF5500]">
                          {cv.title}
                        </p>
                      </div>
                      <div className="bg-[#CC0C39] inline p-1 text-[0.7vw] font-semibold text-white m">
                        Limited Time Deal
                      </div>
                      <div className="font-semibold my-2">
                        Rating: {cv.rating.rate} ({cv.rating.count})
                      </div>
                      <div className="font-semibold text-xl">
                        <sup>$</sup>
                        {cv.price}
                      </div>
                      <div className="mb-4">Free Delivery By Kifayti</div>
                      <button type="button" onClick={(event)=>{addtocart(event,cv.image,cv.title,cv.price,cv.id)}} className="bg-[#f3d241] hover:bg-[#F7CA00] px-4 py-2 rounded-full text-sm mt-2 font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Product;

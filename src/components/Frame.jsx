import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Frame = () => {
  return (
    <>
    <Carousel data-bs-theme="dark" className='px-5'>
      <Carousel.Item style={{backgroundImage:"url('./jaweel.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">Modern jewelery</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5 lg:mb-5 font-semibold">New Season</div>
       <Link to="/jewelery" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
     
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage:"url('./women.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">Womens cloths</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5  font-semibold">New Season</div>
       <Link to="women's clothing" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage:"url('./men.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">Mens cloths</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5 font-semibold">New Season</div>
       <Link to="/men's clothing" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage:"url('./electro.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">Electronics</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5 font-semibold">New Season</div>
       <Link to="/electronic" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
     
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage:"url('./jeweel.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">jewelery</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5 font-semibold">New Season</div>
       <Link to="/jewelery" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
       
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage:"url('./electronic.jpg')", height:"38vw", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center pl-[12vw]  h-[100%]">
       <div className="text-xl md:text-3xl lg:text-5xl font-bold italic">electronics</div>
       <div className="text-md md:text-xl lg:text-3xl mb-2 md:mb-5 font-semibold">New Season</div>
       <Link to="/electronic" className="bg-[#e7a21c] w-[60px] lg:w-[100px] text-xs  text-center py-2 rounded-md text-white font-semibold">Buy Now</Link>
      </div>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default Frame
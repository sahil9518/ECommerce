import { Link } from "react-router-dom"

const Category = () => {
  return (
    <>
       <div className="lg:text-4xl text-2xl font-semibold text-center my-5 text-zinc-600">Browse By Category <hr className="mt-5" /></div>
   <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-4">
    <Link to="/electronics" className="w-[180px] h-[200px] lg:w-[200px] lg:h-[200px]  border-2 flex flex-col justify-center items-center hover:bg-blue-500 hover:text-white font-semibold hover:duration-500">
    <i className="ri-headphone-line text-6xl"></i>
       <p className="text-xl p-2">Electronics</p> </Link>
    <Link to="/Jewelery" className="w-[180px] h-[200px] lg:w-[200px] lg:h-[200px]  border-2  flex flex-col justify-center items-center hover:bg-blue-500 hover:text-white font-semibold hover:duration-500">
    <i className="ri-vip-diamond-line text-6xl"></i>
       <p className="text-xl">Jewelery</p> </Link>
    <Link to="/men's clothing" className="w-[180px] h-[200px] lg:w-[200px] lg:h-[200px] border-2  flex flex-col justify-center items-center hover:bg-blue-500 hover:text-white font-semibold hover:duration-500">
    <i className="ri-shirt-line text-6xl"></i>
      <p className="text-xl">Mens clothing</p> </Link>
    <Link to="/women's clothing" className="w-[180px] h-[200px] lg:w-[200px] lg:h-[200px]  border-2  flex flex-col justify-center items-center hover:bg-blue-500 hover:text-white font-semibold hover:duration-500">
    <i className="ri-t-shirt-line text-6xl"></i>
      <p className="text-xl">Womens clothing</p></Link>
   </div>
   <hr className="mt-5" />
    </>
  )
}
export default Category
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Notfound = () => {
  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center gap-3 h-[100vh]">
    <h1 className="text-6xl font-bold">404 Not Found</h1>
    <p>Your visited page not found. You may go home page.</p>
    <Link to="/" className="bg-[#E7A21C] px-3 py-2 rounded-full font-bold text-white">Back to home page</Link>
    </div>
    <Footer />
    </>
  )
}
export default Notfound
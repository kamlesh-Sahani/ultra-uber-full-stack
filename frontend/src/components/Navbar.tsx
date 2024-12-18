import { Link } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [sidebarStatus, setSideBarStatus] = useState<boolean>(false)
  return (
    <div className="flex justify-between px-10 py-5 ">
      <div >
        <h1 className="font-bold text-2xl"><span className="text-secondaryColor">Ultra</span>Uber</h1>
      </div>
      <div className="flex gap-4 items-center justify-center text-secondaryColor font-medium max-md:hidden">
        <Link to={"/woman-safety"}>Woman Safety</Link>
        <Link to={"/carpooling"}>Carpooling</Link>
        <Link to={"/support"}>Support</Link>
        <Link to={"/profile"}>Profile</Link>


      </div>
      <button className="w-[120px] h-[40px] bg-[#C9D1D9] text-black rounded-full font-medium flex justify-center items-center gap-2   bottom-20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-secondaryColor hover:text-white hover:shadow-lg max-md:hidden">

        Login
      </button>
      <FaBarsStaggered className="text-2xl cursor-pointer md:hidden" onClick={() => setSideBarStatus((prev) => !prev)} />

      {
        sidebarStatus && <div className=" absolute top-5 right-0  z-20 h-full w-full bg-black flex flex-col gap-4  text-right items-center text-white  ">
          <FaBarsStaggered className="text-2xl cursor-pointer" onClick={() => setSideBarStatus((prev) => !prev)} />

          <Link to={"/woman-safety"}>Woman Safety</Link>
          <Link to={"/carpooling"}>Carpooling</Link>
          <Link to={"/support"}>Support</Link>
          <Link to={"/profile"}>Profile</Link>
          <button className="w-[120px] h-[40px] bg-[#C9D1D9] text-black rounded-full font-medium flex justify-center items-center gap-2   bottom-20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-secondaryColor hover:text-white hover:shadow-lg ">
            Login
          </button>


        </div>
      }

    </div>
  )
}

export default Navbar

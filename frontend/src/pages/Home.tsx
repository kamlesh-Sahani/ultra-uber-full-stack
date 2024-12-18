import { motion } from "framer-motion";
import carVideo from "../assets/home-car.webm"
import { ReactTyped } from "react-typed";
import { FaCarSide } from "react-icons/fa6";
const Home = () => {






  return (
    <div >
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        >
          <source src={carVideo} type="video/mp4" />

        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80  z-10  justify-center items-center text-center text-white space-y-4 flex flex-col">

          <motion.h1
            className="text-[100px] font-bold text-secondaryColor drop-shadow-lg max-lg:text-[60px] max-sm:text-[40px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Your Ultimate Ride, Anywhere You Want to Go

          </motion.h1>

          <motion.h1
            className="text-[60px] font-black w-[80%] drop-shadow-lg max-lg:text-[40px] max-sm:text-[20px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <ReactTyped
              strings={[
                'Safe, reliable rides at the touch of a button.',
                'Fast, affordable transportation wherever you need to go.',
                'Your trusted partner for a smooth ride, every time.',
                'Explore the city with ease, ride with comfort and style.'
              ]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
          </motion.h1>


          <button className="px-20 py-3 bg-white text-black rounded-full font-bold flex justify-center items-center gap-2 text-xl  bottom-20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-secondaryColor hover:text-white hover:shadow-lg">
            <FaCarSide />
            Get Ride
          </button>



        </div>
      </section>

{/* 
      <section id="features" className="p-10 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondaryColor mb-10">
            Our Amazing Features
          </h2>
          <div className="flex justify-center items-center relative  gap-4">

            <div className="border border-1 border-[#3d3d3d] text-white h-[270px] w-[270px] rounded-full flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center ">
                <i className="fas fa-users text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Carpooling</h3>
              <p className="text-secondaryColor text-base">
                Save money and the environment by sharing a ride with others.
              </p>
            </div>
            <div className="border border-1 border-[#3d3d3d] text-white h-[270px] w-[270px] rounded-full flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center mb-4">
                <i className="fas fa-graduation-cap text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Student Discount</h3>
              <p className="text-secondaryColor text-base">
                Special discounts for students. Because you deserve it
              </p>
            </div>

         
            <div className="border border-1 border-[#3d3d3d] text-white h-[270px] w-[270px] rounded-full flex flex-col justify-center items-center gap-4 ">
              <div className="flex justify-center mb-4">
                <i className="fas fa-bolt text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Surge Pricing</h3>
              <p className="text-secondaryColor text-base">
                Get real-time surge pricing info based on demand and supply.
              </p>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Home;

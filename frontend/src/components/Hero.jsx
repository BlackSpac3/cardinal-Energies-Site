import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-[35vw] tab-s:h-[70vh] phone-s:h-[100vh] mt-[90px] mx-hero rounded-3xl tab-s:mt-0  tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
    >
      <div
        id="header-contents"
        className="absolute place-self-center left-[5vw] right-[5vw] tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
      >
        <div className="flex items-center gap-[5px]">
          <p className="text-white">Welcome</p>
          <div className="bg-white h-[1.05px] w-[50px]"></div>
        </div>
        <h2
          id="header-title"
          className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px] tab:w-full w-[70%]"
        >
          ENERGY SOLUTIONS <br /> FOR A BETTER WORLD
        </h2>
        <p className=" text-white line-clamp-3 text-[max(1vw,14px)] w-[70%] tab-m:w-[90%] mt-[10px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi
          quas atque? Quo quae et dicta repellendus optio incidunt totam, dolor
          similique perspiciatis excepturi harum, eius odit. Dignissimos, illo
          laudantium? Quo quae et dicta repellendus optio incidunt totam.
        </p>
        <div className="flex tab:hidden tab-s:flex gap-[20px] phone:flex mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent hover:bg-[#ffffff30] text-white border-white border-[2px] border-solid px-[25px] py-[10px] rounded-full phone:hidden"
          >
            Learn More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="hidden phone:block bg-white text-primary border-solid px-[25px] py-[10px] rounded-full"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

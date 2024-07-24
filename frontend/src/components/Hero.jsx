import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-[35vw] tab-s:h-[70vh] phone-s:h-[100vh] mt-[100px] tab-s:mt-0 mx-hero tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover rounded-[30px] tab-s:rounded-none"
    >
      <div
        id="header-contents"
        className="absolute place-self-center left-[5vw] tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
      >
        <div className="flex items-center gap-[5px]">
          <p className="text-white">Welcome</p>
          <div className="bg-white h-[1.05px] w-[50px]"></div>
        </div>
        <h2
          id="header-title"
          className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px] tab-s:w-[90%] w-[60%]"
        >
          ENERGY SOLUTIONS FOR A BETTER WORLD
        </h2>
        <p className=" text-white text-[max(1vw,14px)] w-[70%] tab-s:w-[100%] mt-[10px] mb-[30px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi
          quas atque? Quo quae et dicta repellendus optio incidunt totam, dolor
          similique perspiciatis excepturi harum, eius odit. Dignissimos, illo
          laudantium? Quo quae et dicta repellendus optio incidunt totam.
        </p>
        <div className="flex tab:hidden tab-s:flex gap-[20px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-primary px-[25px] py-[10px] rounded-full"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent hover:bg-[#ffffff30] text-white border-white border-[2px] border-solid px-[25px] py-[10px] rounded-full tab-s:hidden"
          >
            Our Work
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div
      id="home"
      className="relative flex h-[35vw] phone:h-[70vh] mt-[120px] phone:mt-0 mx-[5vw] phone:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover rounded-[30px] phone:rounded-none"
    >
      <div
        id="header-contents"
        className="absolute place-self-center left-[5vw] phone:left-[7vw]"
      >
        <div className="flex items-center gap-[5px]">
          <p className="text-white">Welcome</p>
          <div className="bg-white h-[1.05px] w-[50px]"></div>
        </div>
        <h2
          id="header-title"
          className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight phone:text-[28px] phone:w-[80%] w-[60%]"
        >
          ENERGY <br className="hidden phone:block" /> SOLUTIONS FOR A BETTER
          WORLD
        </h2>
        <p className="text-white text-[max(1vw,14px)] w-[70%] mt-[10px] mb-[30px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi
          quas atque? Quo quae et dicta repellendus optio incidunt totam, dolor
          similique perspiciatis excepturi harum, eius odit. Dignissimos, illo
          laudantium? Quo quae et dicta repellendus optio incidunt totam.
        </p>
        <div className="flex gap-[20px]">
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
            className="bg-transparent hover:bg-[#ffffff30] text-white border-white border-[2px] border-solid px-[25px] py-[10px] rounded-full phone:hidden"
          >
            Our Work
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Header;

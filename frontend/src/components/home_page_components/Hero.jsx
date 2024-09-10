import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 1000,
    },
    show: {
      opacity: 1,
      y: 0,
      ease: "easeOut",
      transition: {
        duration: 1.15,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      id="home"
      className="relative flex h-[40vw] tab-s:h-[70vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        id="header-contents"
        className="absolute place-self-center left-[5vw] right-[5vw] tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
      >
        <motion.div variants={item} className="flex items-center gap-[5px]">
          <p className="text-white">Welcome</p>
          <div className="bg-white h-[1.05px] w-[50px]"></div>
        </motion.div>
        <motion.h2
          variants={item}
          id="header-title"
          className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px] tab:w-full w-[70%]"
        >
          ENERGY SOLUTIONS <br /> FOR A BETTER WORLD
        </motion.h2>
        <motion.p
          variants={item}
          className=" text-white line-clamp-3 text-sm w-[70%] tab-s:w-[90%] mt-[10px]"
        >
          We enable communities and businesses to flourish by using the
          resources of innovation and sustainability. Come along with us as we
          push energy forward to a time at which every watt contributes for a
          greener tomorrow.
        </motion.p>
        <motion.div
          variants={item}
          className="flex tab:hidden  gap-[20px] tab-s:gap-0 tab-s:flex mt-6"
        >
          <Link to="/about">
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent hover:bg-[#ffffff30] text-white border-white border-[2px] border-solid px-[25px] py-[10px] rounded-full tab-s:hidden"
            >
              Learn More
            </motion.p>
          </Link>
          <Link to="/contact-us">
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="hidden tab-s:block bg-white text-primary border-solid px-[25px] py-[10px] rounded-full"
            >
              Contact Us
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Hero;

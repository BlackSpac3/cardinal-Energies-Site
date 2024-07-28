import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { assets } from "../../assets/assets";

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
      className="relative flex h-[35vw] tab-s:h-[70vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
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
          className=" text-white line-clamp-3 text-[max(1vw,14px)] w-[70%] tab-m:w-[90%] mt-[10px]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi
          quas atque? Quo quae et dicta repellendus optio incidunt totam, dolor
          similique perspiciatis excepturi harum, eius odit. Dignissimos, illo
          laudantium? Quo quae et dicta repellendus optio incidunt totam.
        </motion.p>
        <motion.div
          variants={item}
          className="flex tab:hidden tab-s:flex gap-[20px] phone:flex mt-6"
        >
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Hero;

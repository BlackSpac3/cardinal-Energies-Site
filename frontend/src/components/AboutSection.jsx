import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

import { assets } from "../assets/assets";

const AboutSection = () => {
  return (
    <div
      id="about-us-section"
      className="grid grid-cols-[1fr_0.8fr] gap-[5%]  bg-white m-body phone:flex flex-col items-start"
    >
      <motion.div
        variants={slideIn("left")}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
      >
        <h2 className="text-black font-semibold font-['Montserrat'] text-[36px] ">
          About Us
        </h2>
        <p className="w-[90%] mt-[15px] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod
          amet voluptatibus deleniti aliquid dolor vitae nobis porro modi eum,
          necessitatibus fugit qui cupiditate quia. Alias, voluptatibus?
          Pariatur, officia hic. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima quod amet voluptatibus deleniti aliquid dolor
          vitae nobis porro modi eum, necessitatibus fugit qui cupiditate quia.
          Alias, voluptatibus? Pariatur, officia hic. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima quod amet voluptatibus deleniti
          aliquid dolor vitae nobis porro modi eum, necessitatibus fugit qui
          cupiditate quia. Alias, voluptatibus? Pariatur, officia hic. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Minima quod amet
          voluptatibus deleniti aliquid dolor vitae nobis porro modi eum,
          necessitatibus fugit qui cupiditate quia. Alias, voluptatibus?
          Pariatur, officia hic.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("right")}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
        className=""
      >
        <img
          src={assets.about_us_thumbnail}
          alt=""
          className="w-[100%] h-auto  object-cover"
        />
      </motion.div>
    </div>
  );
};
export default AboutSection;

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

import { assets } from "../assets/assets";
import { styles } from "../utils/styles";

const AboutSection = () => {
  return (
    <div
      id="about-us-section"
      className=" gap-[2.5%] grid grid-cols-[1.2fr_0.8fr] tab-m:grid-cols-1 bg-white m-body phone:flex flex-col items-start"
    >
      <motion.div
        variants={slideIn("left")}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
        className=" mt-[30px] items-start"
      >
        <h2 className={styles.homePageSectionTitle}>About Us</h2>
        <p className="w-[90%]  tab-m:w-[100%] mt-[15px] text-justify">
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
      <div className="h-100% place-self-end">
        <motion.img
          variants={slideIn("right")}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          src={
            window.innerWidth > 700
              ? assets.about_us_thumbnail
              : assets.about_us_thumbnail1
          }
          alt=""
          className="w-[100%] mx-auto tab-m:hidden   object-cover"
        />
      </div>
    </div>
  );
};
export default AboutSection;

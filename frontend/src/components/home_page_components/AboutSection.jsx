import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { assets } from "../../assets/assets";
import { styles } from "../../utils/styles";

const AboutSection = () => {
  return (
    <div
      id="about-us-section"
      className=" gap-10 grid grid-cols-[1.2fr_0.8fr] tab-s:grid-cols-1 bg-white m-body tab-s:flex flex-col items-start"
    >
      <motion.div
        variants={slideIn("left")}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
        className=""
      >
        <h2 className={styles.homePageSectionTitle}>About Us</h2>
        <p className="w-[100%] line-clamp-[14] tab-m:line-clamp-[8] mt-5  ">
          At Cardinal Energies, we are dedicated to creating a sustainable
          future by maintaining a balanced energy portfolio. This includes oil,
          natural gas, and renewable energy solutions. Our expertise in
          traditional energy resources such as oil and natural gas provides a
          dependable foundation for worldwide energy needs. Simultaneously, our
          forward-thinking investments in renewable energy technologies drive
          innovation and sustainability.
          <br />
          <br /> We envision a future where energy is plentiful and
          environmentally responsible. By prioritizing efficiency, safety, and
          cutting-edge technology, Cardinal Energies is committed to delivering
          top-quality energy solutions while minimizing environmental impact. As
          we expand, we are constantly exploring new opportunities in solar,
          wind, and other renewable sectors to contribute to a cleaner and more
          sustainable energy landscape.
        </p>
      </motion.div>
      <div className="w-full aspect-square rounded-3xl overflow-hidden tab-s:hidden">
        <motion.img
          variants={slideIn("right")}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          src={
            window.innerWidth > 700
              ? assets.about_us_thumbnail
              : assets.about_us_thumbnail
          }
          alt=""
          className="w-[100%] mx-auto aspect-square  object-cover"
        />
      </div>
    </div>
  );
};
export default AboutSection;

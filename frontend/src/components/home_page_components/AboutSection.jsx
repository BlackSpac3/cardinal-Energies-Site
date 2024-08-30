import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

import { assets } from "../../assets/assets";
import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";
import MoreButton from "../MoreButton";

const AboutSection = () => {
  return (
    <div
      id="about-us-section"
      className=" gap-[7.5%] grid grid-cols-[1.2fr_0.8fr] tab-s:grid-cols-1 bg-white m-body phone:flex flex-col items-start"
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
        <p className="w-[100%] line-clamp-[11] tab-m:line-clamp-[8] mt-5  text-justify">
          Cardinal Energies is an innovative energy company with focus in the
          entire value chain in the oil and gas space covering the downstream,
          midstream and upstream sector. The company will operate across the
          entire spectrum of the oil & gas space by exploring the following key
          areas in the sector; petroleum trading, crude sales, Gas sales, key
          investment in marginal field or existing OML or OPL, storage solutions
          and etc. Nevertheless, our key focus as we commence operations will be
          in the downstream space. Cardinal energies shall expand it activity in
          the trading space by providing services that cover the entire supply
          value chain. The company will be involved in the large-scale export
          and import of petroleum products with the aim of becoming a leading
          supplier of petroleum products to Nigeria and West Africa.We will
          trade an extensive range of refined petroleum products and crude oil
          throughout Africa. Our product range will include Jet A1, Liquefied
          Petroleum Gas, Gasoline, Dual Purpose Kerosene, Diesel, Low/High Pour
          Fuel Oil, Naphtha, Base Oil and Bitumen. Cardinal energies will be
          responsible primarily for the supply of refined petroleum products
          into Nigeria, however the long term plan is to build the necessary
          capacity to supply petroleum products into new and emerging markets in
          Africa.
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
          className="w-[100%] mx-auto tab-s:hidden  object-cover"
        />
      </div>
    </div>
  );
};
export default AboutSection;

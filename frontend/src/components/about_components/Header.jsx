import { motion } from "framer-motion";
import { styles } from "../../utils/styles";

const Header = () => {
  return (
    <div>
      <div
        id="about-header"
        className="relative flex h-[25vw] tab-s:h-[30vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            ease: "easeOut",
            type: "spring",
          }}
          id="header-contents"
          className="absolute flex flex-col items-center place-self-center left-0 right-0 mx-auto tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
        >
          <h2
            id="header-title"
            className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px]"
          >
            WHO WE ARE
          </h2>
        </motion.div>
      </div>
      <div className="m-body">
        <div className="inline-block">
          <h2 className={styles.homePageSectionTitle}>About Us</h2>
          <div className="h-[2.5px] mt-1 w-full bg-primary"></div>
        </div>
        <p className="mt-10">
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
      </div>
    </div>
  );
};
export default Header;

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
      </div>
    </div>
  );
};
export default Header;

import { easeOut, motion } from "framer-motion";
import { styles } from "../../utils/styles";

const Header = () => {
  return (
    <div>
      <div
        id="about-header"
        className="relative flex h-[25vw] tab-s:h-[30vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
      >
        <div
          id="header-contents"
          className="absolute flex flex-col items-center place-self-center left-0 right-0 mx-auto tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
        >
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "easeOut",
              type: "spring",
            }}
            id="header-title"
            className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px]"
          >
            Articles & Blogs
          </motion.h2>
        </div>
      </div>
    </div>
  );
};
export default Header;

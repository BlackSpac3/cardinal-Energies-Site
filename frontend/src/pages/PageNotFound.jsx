import { styles } from "../utils/styles.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const PageNotFound = () => {
  return (
    <motion.div
      key={"page-not-found"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      className="m-body tab-s:flex-col flex gap-20 tab-s:gap-10 items-center justify-center  mx-auto "
    >
      <img src={assets.page404_image} alt="" className="w-[400px]" />
      <div className="flex flex-col items-center text-center">
        <h1 className={`${styles.homePageSectionTitle} text-5xl font-bold`}>
          Oops!
        </h1>
        <p className="text-gray-500 mt-5">
          The page you're looking for does not exist <br /> Please go back to
          home page.
        </p>
        <Link
          to="/"
          className="px-5 py-3 flex items-center rounded-full gap-2 bg-primary text-white shadow-md mt-10"
        >
          <p className="leading-none">Back to home</p>
          <i className="fi fi-rr-arrow-right"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default PageNotFound;

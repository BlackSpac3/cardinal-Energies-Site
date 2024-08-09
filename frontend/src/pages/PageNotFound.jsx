import { styles } from "../utils/styles.js";
import { motion } from "framer-motion";

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
      className="m-body text-center"
    >
      <h1 className={`${styles.homePageSectionTitle} mt-12`}>404 Error</h1>
      <p>Page Not Found</p>
    </motion.div>
  );
};

export default PageNotFound;

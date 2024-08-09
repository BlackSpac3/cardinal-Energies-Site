import CompanyValues from "../components/about_components/CompanyValues";
import Header from "../components/about_components/Header";
import MisionVision from "../components/about_components/MisionVision";

import { motion } from "framer-motion";
import Team from "../components/about_components/Team";

const About = () => {
  return (
    <motion.div
      key={"about-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
    >
      <Header />
      <MisionVision />
      <CompanyValues />
      <Team />
    </motion.div>
  );
};
export default About;

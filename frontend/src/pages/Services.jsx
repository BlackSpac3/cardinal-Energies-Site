import { motion } from "framer-motion";
import Header from "../components/service_components/Header";
import ServicesSection from "../components/service_components/ServicesSection";
import ReachTheTop from "../components/service_components/ReachTheTop";
import FAQs from "../components/service_components/FAQs";

const Services = () => {
  return (
    <motion.div
      key={"home-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      className="mt-[90px] tab-s:mt-0"
    >
      <Header />
      <ServicesSection />
      <ReachTheTop />
      <FAQs />
    </motion.div>
  );
};
export default Services;

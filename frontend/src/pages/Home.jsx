import AboutSection from "../components/home_page_components/AboutSection";
import Hero from "../components/home_page_components/Hero";
import OurBlogSection from "../components/home_page_components/OurBlogSection";
import OurGallerySection from "../components/home_page_components/OurGallerySection";
import ServiceSection from "../components/home_page_components/ServiceSection";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      key={"home-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      className=""
    >
      <Hero />
      <AboutSection />
      <ServiceSection />
      <OurBlogSection />
      <OurGallerySection />
    </motion.div>
  );
};
export default Home;

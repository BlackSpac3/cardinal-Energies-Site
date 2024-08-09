import Gallery_pics from "../components/gallery_page_components/Gallery_pics";
import Header from "../components/gallery_page_components/Header";
import { motion } from "framer-motion";

const GalleryPage = () => {
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
      <Gallery_pics />
    </motion.div>
  );
};
export default GalleryPage;

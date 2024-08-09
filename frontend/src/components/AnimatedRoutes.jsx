import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";

import { AnimatePresence } from "framer-motion";
import SingleBlogPage from "../pages/SingleBlogPage";
import PageNotFound from "../pages/PageNotFound";
import TeamPage from "../pages/TeamPage";
import GalleryPage from "../pages/GalleryPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="mt-[90px] tab-s:mt-0">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/our-gallery" element={<GalleryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
export default AnimatedRoutes;

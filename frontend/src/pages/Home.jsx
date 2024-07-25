import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import OurBlogSection from "../components/OurBlogSection";
import OurGallerySection from "../components/OurGallerySection";
import ServiceSection from "../components/ServiceSection";
import Suscribe from "../components/Suscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <OurBlogSection />
      <OurGallerySection />
      <Suscribe />
    </div>
  );
};
export default Home;

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const screen_width = () => {
    if (window.innerWidth < 700) {
      return true;
    } else {
      return false;
    }
  };
  const [isMobile, setIsMobile] = useState(screen_width());

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 700 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return (
    <div className="">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};
export default App;

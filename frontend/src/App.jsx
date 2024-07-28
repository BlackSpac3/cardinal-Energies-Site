import { useEffect, useState } from "react";
import { Route, Routes, useMatch, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

import Subscribe from "./components/Suscribe";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
      <AnimatedRoutes />

      <Subscribe />
      <Footer />
    </div>
  );
};
export default App;

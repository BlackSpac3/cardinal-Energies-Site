import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NavbarMobile from "./components/NavbarMobile";

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
  }, isMobile);
  return (
    <div className="">
      {isMobile ? <NavbarMobile /> : <Navbar />}

      <Home />
    </div>
  );
};
export default App;

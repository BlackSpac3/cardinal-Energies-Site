import { motion } from "framer-motion";

import { assets, navlinks } from "../assets/assets";
import { useState } from "react";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";

const Navbar = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const shadowTrigger = () => {
    if (window.scrollY > 40) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };

  window.addEventListener("scroll", () => shadowTrigger());

  return (
    <div
      className={`${
        navbarShadow ? "shadow-md py-[15px]" : "py-[20px]"
      } flex fixed w-[100%] top-0 z-20 bg-white justify-between px-[5vw] items-center duration-[0.2s]`}
    >
      <Link to="/">
        <img src={assets.logo} alt="" className="w-[110px]" />
      </Link>

      <ul className="flex gap-[30px]">
        {navlinks.map((link, index) => (
          <motion.p whileTap={{ scale: 0.9 }}>
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) => {
                return isActive
                  ? "text-primary border-b-[2px] border-primary hover:text-primary cursor-pointer"
                  : "text-[#737373] hover:text-[#525252] cursor-pointer";
              }}
            >
              {link.name}
            </NavLink>
          </motion.p>
        ))}
      </ul>

      <Link to="/contact-us">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setActiveLink("/contact-us");
          }}
          className="bg-primary text-white px-[20px] py-[10px] rounded-full"
        >
          Contact Us
        </motion.button>
      </Link>
    </div>
  );
};
export default Navbar;

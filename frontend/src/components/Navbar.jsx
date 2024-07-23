import { motion } from "framer-motion";

import { assets, navlinks } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [navbarShadow, setNavbarShadow] = useState(false);

  const nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  };

  const shadowTrigger = () => {
    if (window.scrollY > 40) {
      setNavbarShadow(true);
      console.log(navbarShadow, window.scrollY);
    } else {
      setNavbarShadow(false);
      console.log(navbarShadow, window.scrollY);
    }
  };
  window.addEventListener("scroll", () => shadowTrigger());
  return (
    <div
      className={`${
        navbarShadow ? "shadow-md py-[15px]" : "py-[20px]"
      } flex fixed w-[100%] top-0 z-20 bg-white phone:bg-transparent justify-between px-[5vw] items-center duration-[0.2s]`}
    >
      <img src={assets.logo} alt="" className="w-[110px]" />

      <img
        src={assets.menu_icon}
        alt=""
        className="hidden phone:block w-[25px]"
      />

      <ul className="flex gap-[30px] phone:hidden">
        {navlinks.map((link, index) => (
          <motion.a
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveLink(link._id);
            }}
            href={`#${link._id}`}
            className={` ${
              activeLink === link._id
                ? "text-primary border-b-[2px] border-primary hover:text-primary"
                : "text-[#737373] hover:text-[#525252]"
            }  cursor-pointer`}
          >
            {link.name}
          </motion.a>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary text-white px-[20px] py-[10px] rounded-full phone:hidden"
      >
        Contact Us
      </motion.button>
    </div>
  );
};
export default Navbar;

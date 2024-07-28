import { delay, easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { assets, navlinks } from "../assets/assets";
import { useState } from "react";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";

const Navbar = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      ease: easeInOut,
      transition: {
        duration: 0.2,
      },
    },
  };

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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`${
        navbarShadow ? "shadow-md py-[15px]" : "py-[20px]"
      } flex fixed w-[100%] top-0 z-20 bg-white justify-between px-[5vw] items-center duration-[0.2s]`}
    >
      <Link to="/">
        <motion.img
          variants={item}
          src={assets.logo}
          alt=""
          className="w-[110px]"
        />
      </Link>

      <ul className="flex gap-[30px]">
        {navlinks.map((link, index) => (
          <NavLink to={link.path} key={index}>
            {({ isActive }) => (
              <motion.div
                variants={item}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <p
                  className={
                    isActive
                      ? "text-primary hover:text-primary cursor-pointer"
                      : "text-[#737373] hover:text-[#525252] cursor-pointer"
                  }
                >
                  {link.name}
                </p>
                {isActive ? (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="w-full h-[2px] rounded-full bg-primary"
                  ></motion.div>
                ) : (
                  <></>
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </ul>

      <Link to="/contact-us">
        <motion.button
          variants={item}
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
    </motion.div>
  );
};
export default Navbar;

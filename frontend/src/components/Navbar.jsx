import { delay, easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { assets, navlinks, icons } from "../assets/assets";
import { useState } from "react";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";

const Navbar = () => {
  const [aboutMenuIsOpen, setAboutMenuIsOpen] = useState(true);
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
          src={assets.logo_black}
          alt=""
          className="w-[110px]"
        />
      </Link>

      <ul className="flex gap-[30px]">
        {navlinks.map((link, index) => (
          <NavLink to={link.path} key={index}>
            {({ isActive }) => (
              <div
                onMouseEnter={
                  link.path === "/about" ? () => setAboutMenuIsOpen(false) : {}
                }
                onMouseLeave={
                  link.path === "/about" ? () => setAboutMenuIsOpen(true) : {}
                }
                className="relative flex flex-col"
              >
                <motion.div
                  variants={item}
                  whileTap={{ scale: 0.9 }}
                  className=" flex flex-col items-center"
                >
                  <div className="flex gap-[5px]   items-center justify-between">
                    <p
                      className={
                        isActive
                          ? "text-primary hover:text-primary cursor-pointer"
                          : "text-[#737373] hover:text-[#525252] cursor-pointer"
                      }
                    >
                      {link.name}
                    </p>
                    <div
                      onClick={
                        aboutMenuIsOpen
                          ? () => setAboutMenuIsOpen(false)
                          : () => setAboutMenuIsOpen(true)
                      }
                      className={`${
                        link.path === "/about" ? "block" : "hidden"
                      }`}
                    >
                      <img
                        src={icons.expand_arrow_black}
                        alt=""
                        className={`${
                          !aboutMenuIsOpen ? "-rotate-180" : "rotate-0"
                        } w-[10px] durtion-100`}
                      />
                    </div>
                  </div>
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

                {link.path === "/about" ? (
                  <div
                    className={`${
                      aboutMenuIsOpen ? "h-0 p-0 my-0" : "h-fit"
                    } absolute top-[20px] left-[50%] w-[125px] -translate-x-[50%] bg-white shadow-md rounded-sm  overflow-hidden transition-all duration-200`}
                  >
                    <div className="flex flex-col  gap-[10px] m-4">
                      <div>
                        <Link to="our-team">Our Team</Link>
                      </div>
                      <hr />
                      <div>
                        <Link to="our-gallery">Our Gallery</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
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

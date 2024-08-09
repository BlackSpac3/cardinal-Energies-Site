import { useState } from "react";
import { Link } from "react-router-dom";

import { assets, icons, navlinks } from "../assets/assets";

const NavbarMobile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  const [aboutMenuIsOpen, setAboutMenuIsOpen] = useState(true);

  const shadowTrigger = () => {
    if (window.scrollY > 40) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };

  window.addEventListener("scroll", () => shadowTrigger());
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div
      className={`${
        navbarShadow ? "shadow-md bg-white " : ""
      } flex fixed w-[100%] top-0 z-20 bg-transparent justify-between px-[5vw] py-[20px] items-center duration-[0.1s]`}
    >
      <Link to="/">
        <img
          src={navbarShadow ? assets.logo_black : assets.logo_white}
          alt=""
          className="w-[110px]"
        />
      </Link>
      <div
        className={`${
          navIsOpen ? "block right-0" : "right-[-100vw]"
        } absolute bg-white h-[100vh] p-[20px] duration-[0.5s] w-[200px] top-0 shadow-[35px_0px_60px_-15px_rgba(0,0,0,70)]`}
      >
        <img
          onClick={() => setNavIsOpen(false)}
          src={icons.close_icon}
          alt=""
          className="w-[25px] mb-[50px]"
        />
        <ul className="flex flex-col gap-[10px]">
          {navlinks.map((link, index) => (
            <div className="">
              <div className="flex justify-between items-center">
                <Link
                  to={link.path}
                  onClick={() => {
                    setNavIsOpen(false);
                  }}
                  key={index}
                  className="text-[20px]"
                >
                  {link.name}
                </Link>
                <div
                  onClick={
                    aboutMenuIsOpen
                      ? () => setAboutMenuIsOpen(false)
                      : () => setAboutMenuIsOpen(true)
                  }
                  className={`${
                    link.path === "/about" ? "block" : "hidden"
                  } mr-2`}
                >
                  <img
                    src={icons.expand_arrow_black}
                    alt=""
                    className={`${
                      !aboutMenuIsOpen ? "-rotate-180" : "rotate-0"
                    } w-[16px] durtion-100`}
                  />
                </div>
              </div>
              {link.path === "/about" ? (
                <div
                  className={`${
                    aboutMenuIsOpen ? "h-0 p-0 my-0" : "h-fit"
                  } flex flex-col gap-[10px] my-[10px] w-full text-[18px] overflow-hidden duration-100`}
                >
                  <div>
                    <Link to="our-team">Our Team</Link>
                  </div>
                  <hr />
                  <div>
                    <Link to="our-gallery">Our Gallery</Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <hr className="mt-[10px]" />
            </div>
          ))}
          <Link to="/contact-us" className="text-[20px]">
            Contact Us
          </Link>
          <hr />
        </ul>
      </div>

      <div
        onClick={() => {
          setNavIsOpen(true);
        }}
        className="rounded-md bg-transparent p-2"
      >
        <img
          src={navbarShadow ? icons.menu_icon_black : icons.menu_icon_white}
          className="w-[22px]"
        />
      </div>
    </div>
  );
};
export default NavbarMobile;

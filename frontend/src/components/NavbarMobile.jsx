import { useState } from "react";
import { assets, navlinks } from "../assets/assets";

const NavbarMobile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
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
      <img src={assets.logo} alt="" className="w-[110px]" />
      <div
        className={`${
          navIsOpen ? "block right-0" : "right-[-100vw]"
        } absolute bg-white h-[100vh] p-[20px] duration-[0.5s] w-[200px] top-0 shadow-[35px_0px_60px_-15px_rgba(0,0,0,70)]`}
      >
        <img
          onClick={() => setNavIsOpen(false)}
          src={assets.close_icon}
          alt=""
          className="w-[25px] mb-[50px]"
        />
        <ul className="flex flex-col gap-[10px]">
          {navlinks.map((link, index) => (
            <>
              <a key={index} className="text-[20px]">
                {link.name}
              </a>
              <hr />
            </>
          ))}
        </ul>
      </div>

      <div
        onClick={() => {
          setNavIsOpen(true);
        }}
      >
        <img
          src={navbarShadow ? assets.menu_icon_black : assets.menu_icon_white}
          className="w-[25px]"
        />
      </div>
    </div>
  );
};
export default NavbarMobile;

import { Link } from "react-router-dom";

import { assets, icons } from "../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] "
    >
      <div
        id="footer-content"
        className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px] phone:flex phone:flex-col phone:gap-[35px] "
      >
        <div
          id="footer-content-left"
          className="flex flex-col items-start gap-[20px]"
        >
          <img src={assets.logo_white} alt="" className="w-[120px]" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
            quas quia quisquam dignissimos, nemo totam adipisci obcaecati sint
            suscipit deleniti enim fugit aliquid illum quaerat vero sed sapiente
            eum!
          </p>
          <div id="footer-social-icons" className="flex">
            <img
              src={icons.instagram_icon}
              alt="facebook"
              className="w-[40px] mr-[15px] cursor-pointer"
            />
            <img
              src={icons.twitter_icon}
              alt="twitter"
              className="w-[40px] mr-[15px] cursor-pointer"
            />
            <img
              src={icons.linkedin_icon}
              alt="linkedIn"
              className="w-[40px] mr-[15px] cursor-pointer"
            />
          </div>
        </div>
        <div
          id="footer-content-center"
          className="flex flex-col items-start gap-[20px]"
        >
          <h2 className="text-white font-semibold">COMPANY</h2>
          <ul>
            <Link
              to="/"
              className="block mb-[10px] cursor-pointer hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mb-[10px] cursor-pointer hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block mb-[10px] cursor-pointer hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/our-gallery"
              className="mb-[10px] cursor-pointer hover:text-white"
            >
              Our Gallery
            </Link>
          </ul>
        </div>
        <div
          id="footer-content-right"
          className="flex flex-col items-start gap-[20px]"
        >
          <h2 className="text-white font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px]">+234-904-031-9206</li>
            <li className="mb-[10px]">info@cardinalenergies.com</li>
            <li className="mb-[10px]">
              19b, Sinari Daranijo, <br /> Victoria Island, Lagos, <br />{" "}
              Nigeria.
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] mt-[20px] bg-[#808080] border-none" />
      <p id="footer-copyright" className="phone:text-center">
        Copyright 2024 © Cardinalenergies.com - All Right Reserved.
      </p>
    </div>
  );
};
export default Footer;

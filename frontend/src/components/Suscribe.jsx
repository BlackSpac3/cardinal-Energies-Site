import React from "react";
import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Suscribe = () => {
  return (
    <section className="relative bg-primary text-white  h-[25vw] flex justify-end phone:flex phone:flex-col phone:items-center phone:h-[130vw] phone:static phone:m-body phone:rounded-3xl">
      <img
        src={assets.subscribe_section_img_mobile}
        className="hidden phone:block w-[70%] mt-20"
      />
      <div
        id="subscribe-section-contents"
        className="w-[40%] phone:w-[80%] z-[1] tab-m:w-[50%] tab-m:mr-[3vw] my-auto phone:mr-0 mr-[7vw]"
      >
        <div className="phone:text-center flex flex-col phone:items-center">
          <h2 className="text-3xl tab:text-2xl font-semibold font-['Montserrat'] mb-2">
            Subscribe to our news letter
          </h2>
          <p className="text-sm tab:text-xs w-[90%] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas illo
            ex dolorem accusantium! Ipsum odio cumque eos.
          </p>
        </div>
        <div className="bg-white w-[90%] phone:w-full tab:text-sm text-black rounded-full p-1">
          <div className="grid grid-cols-[1fr_0.5fr] items-center">
            <div>
              <input
                className="pl-4 outline-0 w-full"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="place-self-end">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-black tab:text-sm text-white tab-m:px-5 tab-m:py-2 px-10 rounded-3xl py-3"
              >
                Suscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="phone:hidden bg-newsletter-subscribe bg-cover w-full z-[0] h-full absolute phone:static phone:h-[40%] phone:bg-center"></div>
    </section>
  );
};

export default Suscribe;

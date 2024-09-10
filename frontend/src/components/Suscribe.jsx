import React from "react";
import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Suscribe = () => {
  return (
    <section className="relative bg-primary text-white  h-[25vw] flex justify-end tab-s:flex tab-s:flex-col tab-s:items-center tab-s:h-[130vw] tab-s:static tab-s:m-body tab-s:rounded-3xl">
      <img
        src={assets.subscribe_section_img_mobile}
        className="hidden tab-s:block w-[70%] mt-20"
      />
      <div
        id="subscribe-section-contents"
        className="w-[40%] tab-s:w-[80%] z-[1]  my-auto tab-s:mr-0 mr-[7vw]"
      >
        <div className="tab-s:text-center flex flex-col tab-s:items-center">
          <h2 className="text-3xl tab:text-2xl font-semibold font-['Montserrat'] mb-2">
            Subscribe to our news letter
          </h2>
          <p className="text-sm w-[90%] mb-5">
            Want to stay updated on the latest news, innovations, and insights
            in the energy industry? Subscribe to our newsletter and be
            the first to know
          </p>
        </div>
        <div className="bg-white w-[90%] tab-s:w-full tab:text-sm text-black rounded-full p-1">
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
                className="bg-black tab:text-sm text-white  px-10 rounded-3xl py-3"
              >
                Suscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-s:hidden bg-newsletter-subscribe bg-cover w-full z-[0] h-full absolute tab-s:static tab-s:h-[40%] tab-s:bg-center"></div>
    </section>
  );
};

export default Suscribe;

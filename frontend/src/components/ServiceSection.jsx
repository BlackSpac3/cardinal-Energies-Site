import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import { assets, icons } from "../assets/assets";
import { services } from "../constants";

const ServiceSection = () => {
  return (
    <div className="flex flex-col m-body">
      <div id="service-section-header" className="">
        <div className="flex justify-between w-[100%] items-center phone:block">
          <div className="w-[60%] phone:w-full">
            <h2 className="text-black inline font-semibold font-['Montserrat'] text-[36px]">
              Our Services
            </h2>
            <p className="w-[100%] mt-[1vw] phone:w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              dolore dolor vero, beatae alias illo delectus quod et, impedit, in
              fuga? Deleniti fugit quibusdam atque molestias vel numquam iusto
              nihil?
            </p>
          </div>
          <Link to="/services">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mr-[1vw] inline-block phone:mt-3 "
            >
              <div className="flex items-center gap-[10px] cursor-pointer">
                <p className="text-black font-medium">Learn more</p>
                <img
                  src={icons.arrow_right_icon_black}
                  alt=""
                  className="w-[24px]"
                />
              </div>
              <div className="w-[100%] h-[2px] bg-primary mt-[2px] rounded-full"></div>
            </motion.div>
          </Link>
        </div>
      </div>
      <div
        id="service-contents"
        className="grid grid-cols-3 gap-[20px] mt-[8vw] phone:block"
      >
        {services.map((service, index) => (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            custom={index + 1}
            className={`${
              service.title === "Sell Energy" ? "bg-primary" : "bg-[#efefef]"
            } relative p-[30px] rounded-3xl shadow-md phone:mt-10`}
          >
            <motion.img
              whileHover={{ scale: 1.15 }}
              src={service.icon}
              className="absolute w-[70px] top-[-35px]  border-solid border-white border-[5px] rounded-full"
            />
            <div
              className={`${
                service.title === "Sell Energy" ? "text-white" : "text-black"
              }`}
            >
              <h2 className="text-lg font-medium mt-[15px]">{service.title}</h2>
              <p className="text-xs mt-[5px]">{service.desc}</p>

              <Link to="/services">
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="flex mt-[10px] items-center gap-[5px] cursor-pointer"
                >
                  <p className="text-xs font-medium">Learn more</p>
                  <img
                    src={
                      service.title === "Sell Energy"
                        ? icons.arrow_right_icon_white
                        : icons.arrow_right_icon_black
                    }
                    className="w-[17px]"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ServiceSection;

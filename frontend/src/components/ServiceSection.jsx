import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import { assets } from "../assets/assets";
import { services } from "../constants";

const ServiceSection = () => {
  return (
    <div className="flex flex-col m-body">
      <div
        id="service-section-header"
        className="flex justify-between w-[100%] items-center"
      >
        <h2 className="text-black font-semibold font-['Montserrat'] text-[36px]">
          Our Services
        </h2>
        <Link to="/services">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <p className="text-primary">View more</p>
            <img
              src={assets.arrow_right_icon_green}
              alt=""
              className="w-[26px]"
            />
          </div>
        </Link>
      </div>
      <div
        id="services-section-content"
        className="grid grid-cols-3 phone:grid-cols-1 gap-[20px] mt-[50px]"
      >
        {services.map((service, index) => (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index + 1}
            whileHover={{ scale: 1.05 }}
            className="border-solid border-[#e2e2e2] p-[5%] border-[2px] rounded-[20px] overflow-hidden"
          >
            <img
              src={assets.about_us_thumbnail1}
              alt=""
              className=" w-[100%] object-cover  rounded-[10px]"
            />
            <h2 className="text-lg font-medium mt-[15px]">{service.title}</h2>
            <p className="text-sm mt-[5px]">{service.desc}</p>
            <p className="text-xs inline text-primary pb-[2px] border-b-[1.5px] border-primary">
              Learn more
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ServiceSection;

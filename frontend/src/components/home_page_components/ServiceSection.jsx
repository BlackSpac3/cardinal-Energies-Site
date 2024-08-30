import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../../utils/motion";
import { assets, icons } from "../../assets/assets";
import { services } from "../../constants";
import { styles } from "../../utils/styles";
import MoreButton from "../MoreButton";

const ServiceSection = () => {
  return (
    <div className="flex flex-col m-body">
      <div id="service-section-header" className="">
        <div className="flex w-full justify-between items-center">
          <h2 className={`${styles.homePageSectionTitle}`}>Our Services</h2>
          <Link to="/services" className="mr-[3vw] phone:hidden ">
            <MoreButton>Learn More</MoreButton>
          </Link>
        </div>
        <p className="w-[60%] mt-5 phone:w-full">
          At Cardinal Energies, we are dedicated to providing innovative and
          sustainable energy solutions that empower businesses and communities.
          We specialize in renewable energy, solar, wind, natural gas, etc.,
          delivering reliable, cost-effective, and environmentally responsible
          power to meet your energy needs.
        </p>
      </div>
      <div
        id="service-contents"
        className="grid grid-cols-3 gap-[20px] mt-[8vw] phone:block"
      >
        {services.map((service, index) => (
          <div
            // variants={fadeIn}
            // initial="initial"
            // whileInView="animate"
            // whileHover={{ scale: 1.02 }}
            // viewport={{ once: true }}
            // custom={index + 1}
            className={`${
              service.title === "Sell Energy" ? "bg-primary" : "bg-[#efefef]"
            } relative p-[10%] rounded-3xl shadow-md phone:mt-14`}
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
              <h2 className="text-lg font-medium mt-4 tab-m:mt-5 phone:mt-4">
                {service.title}
              </h2>
              <p className="text-sm line-clamp-3 mt-1">{service.desc}</p>

              <Link to="/services" className="cursor-pointer">
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
                    className="w-[17px] cursor-pointer"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceSection;

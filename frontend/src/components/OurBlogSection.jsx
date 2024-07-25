import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import { assets } from "../assets/assets";
import { blogs } from "../constants";

const OurBlogSection = () => {
  return (
    <div>
      <div className="flex flex-col m-body">
        <div
          id="service-section-header"
          className="flex justify-between w-[100%] items-center"
        >
          <h2 className="text-black font-semibold font-['Montserrat'] text-[36px]">
            Articles & Blog
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
          className="grid grid-cols-3  phone:grid-cols-1 gap-[20px] mt-[50px]"
        >
          {blogs.map((blog, index) => (
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index + 1}
              className="border-solid p-[5%] border-[#e2e2e2]  border-[2px] rounded-3xl"
            >
              <img
                src={assets.about_us_thumbnail1}
                alt=""
                className=" w-[100%] object-cover  rounded-2xl"
              />
              <div>
                <h2 className="text-lg font-medium mt-[15px]">{blog.title}</h2>
                <p className="text-sm mt-[5px]">{blog.desc}</p>
              </div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer my-[5px]"
              >
                <p className="text-sm inline text-primary pb-[2px] border-b-[1.5px] border-primary">
                  Read more
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurBlogSection;

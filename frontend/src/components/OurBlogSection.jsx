import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../utils/motion";
import { assets, icons } from "../assets/assets";
import { blogs } from "../constants";
import { styles } from "../utils/styles";

const OurBlogSection = () => {
  return (
    <div>
      <div className="flex flex-col m-body">
        <div
          id="service-section-header"
          className="flex justify-between w-[100%] items-center phone:block"
        >
          <h2 className={`${styles.homePageSectionTitle} phone:text-center`}>
            Articles & Blog
          </h2>
          <Link to="/services">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mr-[3vw] inline-block phone:hidden"
            >
              <div className="flex items-center gap-[10px] cursor-pointer">
                <p className="text-black font-medium">View All</p>
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
        <div
          id="services-section-content"
          className="grid grid-cols-3  phone:grid-cols-1 gap-[20px] mt-14"
        >
          {blogs.map((blog, index) => (
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index + 1}
              className="border-solid p-[5%] tab-m:p-[6%] border-[#e2e2e2]  border-[2px] rounded-3xl"
            >
              <img
                src={assets.about_us_thumbnail1}
                alt=""
                className=" w-[100%] object-cover  rounded-2xl"
              />
              <div>
                <h2 className="text-lg line-clamp-1 font-medium mt-[15px]">
                  {blog.title}
                </h2>
                <p className="tab-m:line-clamp-3 text-sm tab-m:text-xs mt-1">
                  {blog.desc}
                </p>
              </div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer my-[5px]"
              >
                <p className="text-sm inline tab-m:text-xs text-primary pb-[2px] border-b-[1.5px] border-primary">
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

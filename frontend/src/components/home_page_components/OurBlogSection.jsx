import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../../utils/motion";
import { assets, icons } from "../../assets/assets";
import { blogs } from "../../constants";
import { styles } from "../../utils/styles";
import MoreButton from "../MoreButton";

const OurBlogSection = () => {
  return (
    <div className="m-body">
      <div className="flex flex-col">
        <div
          id="service-section-header"
          className="flex justify-between w-[100%] items-center phone:block"
        >
          <h2 className={`${styles.homePageSectionTitle} phone:text-center`}>
            Articles & Blog
          </h2>
          <Link to="/services" className="mr-[3vw] phone:hidden">
            <MoreButton>View all</MoreButton>
          </Link>
        </div>

        <motion.div
          id="services-section-content"
          className="grid grid-cols-3  phone:grid-cols-1 gap-[20px] mt-14 phone:mt-6"
        >
          {blogs.map((blog, index) => (
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              custom={index + 5}
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
        </motion.div>
      </div>
    </div>
  );
};
export default OurBlogSection;

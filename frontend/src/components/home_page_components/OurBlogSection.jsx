import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeIn } from "../../utils/motion";
import { assets, icons } from "../../assets/assets";
import { blogs } from "../../constants";
import { styles } from "../../utils/styles";
import MoreButton from "../MoreButton";
import BlogCard from "../BlogCard";

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
          {blogs.map((blog, index) => {
            if (index <= 2) {
              return (
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <BlogCard
                    id={blog.id}
                    thumbnail={blog.thumbnail}
                    title={blog.title}
                    desc={blog.desc}
                    date={blog.date}
                    category={blog.category}
                  />
                </motion.div>
              );
            }
          })}
        </motion.div>
      </div>
    </div>
  );
};
export default OurBlogSection;

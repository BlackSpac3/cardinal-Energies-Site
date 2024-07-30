import { motion } from "framer-motion";
import BlogCard from "../BlogCard";

import { assets } from "../../assets/assets";
// import { fadeIn } from "../../utils/motion";
import { blogs } from "../../constants";

const BlogsGrid = () => {
  const slideUp = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.25,
      },
    },
  };
  return (
    <div className="m-body">
      <div
        id="services-section-content"
        className="grid grid-cols-3  phone:grid-cols-1 gap-[20px] mt-14 phone:mt-6"
      >
        {blogs.map((blog, index) => (
          <BlogCard
            id={index}
            thumbnail={blog.thumbnail}
            title={blog.title}
            desc={blog.desc}
            date={blog.date}
            category={blog.category}
          />
        ))}
      </div>
    </div>
  );
};
export default BlogsGrid;

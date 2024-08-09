import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../constants";
import { styles } from "../utils/styles.js";
import { assets } from "../assets/assets";
import { useEffect } from "react";
import { motion } from "framer-motion";

const SingleBlogPage = () => {
  const { id } = useParams();
  const Navigate = useNavigate();

  const blog = blogs.find((blog) => String(blog.id) === id);

  if (!blog) {
    return useEffect(() => {
      Navigate("/pagenotfound");
    }, []);
  }

  return (
    <motion.section
      key={"single-blog-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      className=""
    >
      <div className="bg-slate-100 h-full text-center p-8 pb-20">
        <h1 className={`${styles.homePageSectionTitle} mt-12  pt-8`}>
          {blog.title}
        </h1>
        <div>
          <p>by</p>
          {/* <img src="" alt="" srcset="" /> */}
          <p className="">{blog.aurthor}</p>
        </div>
      </div>
      <div className="text-center mb-14">
        <img
          className="w-[50%] phone:w-[80%] m-auto relative -top-20 border-4 border-white"
          src={blog.thumbnail}
          alt=""
          srcset=""
        />
        <div className="-mt-14 w-[65%] m-auto phone:w-[90%]">
          <p className="text-left">{blog.content}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default SingleBlogPage;

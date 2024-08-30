import BlogsGrid from "../components/blog_components/BlogsGrid";
import FeaturedBlogs from "../components/blog_components/FeaturedBlogs";
import LatestBlog from "../components/blog_components/LatestBlog";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      key={"blog-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
    >
      <LatestBlog />
      <FeaturedBlogs />
      <BlogsGrid />
    </motion.div>
  );
};
export default Blog;

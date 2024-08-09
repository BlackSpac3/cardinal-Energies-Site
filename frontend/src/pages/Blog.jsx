import BlogsGrid from "../components/blog_components/BlogsGrid";
import Header from "../components/blog_components/Header";
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
      <Header />
      <BlogsGrid />
    </motion.div>
  );
};
export default Blog;

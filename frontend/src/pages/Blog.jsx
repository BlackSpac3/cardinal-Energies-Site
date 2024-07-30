import BlogsGrid from "../components/blog_components/BlogsGrid";
import Header from "../components/blog_components/Header";

const Blog = () => {
  return (
    <div className="mt-[90px] tab-s:mt-0">
      <Header />
      <BlogsGrid />
    </div>
  );
};
export default Blog;

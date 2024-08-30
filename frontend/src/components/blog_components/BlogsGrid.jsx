import BlogCard from "../BlogCard";
import ContentPageNavigation from "../ContentPageNavigation";
import axios from "axios";
import { url } from "../../assets/assets";
import { useState, useRef, useEffect } from "react";
import { filterPaginationData } from "../../utils/filter-pagination-data";
import { styles } from "../../utils/styles";
import BlogCardSkeleton from "../skeletons/BlogCardSkeleton";

const BlogsGrid = () => {
  const max = 9;
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

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.keyCode == 13 && query.length) {
      fetchBlogs({ query, page: 1 });
    }
  };

  const clearSearch = (e) => {
    setQuery(e.target.value);
    e.target.value == "" && fetchBlogs({ page: 1 });
  };

  const prevBttn = useRef(null);
  const nextBttn = useRef(null);

  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async ({ query, tags, page = 1, max }) => {
    setBlogs(null);
    let formatedData;
    await axios
      .post(`${url}/api/blog/list`, {
        query,
        tags,
        page,
        max,
        draft: false,
      })
      .then(async ({ data }) => {
        formatedData = await filterPaginationData({
          state: blogs,
          data: data.data,
          page: page,
          countRoute: "/api/blog/all-latest-blogs-count",
          data_to_send: { query, draft: false },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setBlogs(formatedData);
  };
  useEffect(() => {
    fetchBlogs({ query, page: 1, max: max });
  }, []);
  return (
    <div className="flex flex-col m-body">
      <header>
        <p className={styles.homePageSectionTitle}>All Posts</p>
      </header>
      <div className="flex flex-col gap-10 items-center mt-14">
        <div
          id="services-section-content"
          className="grid grid-cols-3  phone:grid-cols-1 gap-5 gap-y-14  phone:mt-6 w-full"
        >
          {!blogs ? (
            <BlogCardSkeleton cards={9} />
          ) : (
            blogs.results.map((blog, index) => (
              <BlogCard
                blog_id={blog.blog_id}
                banner={blog.banner}
                title={blog.title}
                desc={blog.desc}
                date={blog.publishedAt}
                tags={blog.tags}
                author={blog.author}
              />
            ))
          )}
        </div>
        <ContentPageNavigation
          state={blogs}
          fetchData={fetchBlogs}
          prev={prevBttn}
          next={nextBttn}
          query={query}
          max={max}
        />
      </div>
    </div>
  );
};
export default BlogsGrid;

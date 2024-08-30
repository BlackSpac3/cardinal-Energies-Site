import { easeOut, motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { url } from "../../assets/assets";
import axios from "axios";
import { useEffect, useState } from "react";
import FullImgBlogCard from "./FullImgBlogCard";
import LatestBlogSkeleton from "../skeletons/LatestBlogSkeleton";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState(null);
  const fetchBlogs = async () => {
    setBlogs(null);
    await axios
      .post(`${url}/api/blog/list`, {
        page: 1,
        max: 1,
        draft: false,
      })
      .then(async ({ data }) => {
        setBlogs(data.data);
        console.log("IN FETCH__________________");
        console.log(blogs);
        console.log("IN FETCH__________________");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBlogs();
    console.log("IN EFFECT__________________");
    console.log(blogs);
    console.log("IN EFFECT__________________");
  }, []);
  return (
    <div className="flex h-[40vw] tab-s:h-[70vh] phone-s:h-[100vh] mx-hero tab-s:mx-0 mb-[30px] tab-s:rounded-none rounded-3xl overflow-hidden">
      {!blogs ? (
        <LatestBlogSkeleton />
      ) : (
        blogs.length && (
          <FullImgBlogCard
            blog_id={blogs[0].blog_id}
            banner={blogs[0].banner}
            title={blogs[0].title}
            desc={blogs[0].desc}
            tags={blogs[0].tags}
          />
        )
      )}
    </div>
  );
};
export default LatestBlog;

import { useParams, useNavigate } from "react-router-dom";
import { styles } from "../utils/styles.js";
import { useEffect, useState } from "react";
import { url } from "../assets/assets.js";
import { motion } from "framer-motion";
import axios from "axios";
import { formatDate } from "../utils/index.js";
import Loading from "../components/Loading.jsx";
import BlogCard from "../components/BlogCard.jsx";
import BlogContent from "../components/blog_components/BlogContent.jsx";
import Skeleton from "react-loading-skeleton";

const SingleBlogPage = () => {
  const baseColor = "#e2e8f0";
  const { blog_id } = useParams();
  const blogStructure = {
    title: "",
    banner: false,
    content: [],
    tags: [],
    desc: "",
    author: false,
    publishedAt: "",
  };
  const [blog, setBlog] = useState(blogStructure);
  const [similarBlogs, setSimilarBlogs] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchBlog = async ({ blog_id }) => {
    const response = await axios.post(`${url}/api/blog/get-blog`, { blog_id });
    if (response.data.success) {
      setBlog(response.data.data);
      await axios
        .post(`${url}/api/blog/list`, {
          tags: response.data.data.tags,
          page: 1,
          max: 3,
          eliminate_blog: response.data.data.blog_id,
        })
        .then((res) => {
          setSimilarBlogs(res.data.data);
          console.log(res.data.data);

          setLoading(false);
        });
    } else {
      toast.error("Could not get blog");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlog({ blog_id });
  }, []);

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
      <div className="mt-[-90px] ">
        <div className="bg-slate-100 h-full p-8 pb-32 flex flex-col gap-7 items-center pt-[120px]">
          <h1
            className={`${styles.homePageSectionTitle} font-bold w-[60%] text-center capitalize`}
          >
            {blog.title || <Skeleton baseColor={baseColor} count={3} />}
          </h1>
          <div className="flex gap-5 items-center text-gray-500">
            {!blog.author ? (
              <div className="flex gap-3 items-center">
                <Skeleton circle baseColor={baseColor} width={30} height={30} />
                <p className="w-20 leading-none">
                  <Skeleton baseColor={baseColor} />
                </p>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <img
                  src={`${url}/profile-images/${blog.author.personal_info.profile_img}uploads/${blog.author.personal_info.profile_img}`}
                  alt=""
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <p className="capitalize">
                  {`${blog.author.personal_info.first_name} ${blog.author.personal_info.last_name}`}
                </p>
              </div>
            )}

            <div className="flex gap-3 items-center">
              <i className="fi fi-sr-calendar-day"></i>
              <p className={!blog.publishedAt ? "w-20" : "w-fit"}>
                {!blog.publishedAt ? (
                  <Skeleton baseColor={baseColor} />
                ) : (
                  formatDate(blog.publishedAt)
                )}
              </p>
            </div>

            <div className="flex gap-3 items-center ">
              <i className="fi fi-sr-folder-open"></i>
              <p
                className={`${!blog.tags.length ? "w-20" : "w-fit"} capitalize`}
              >
                {blog.tags[0] || <Skeleton baseColor={baseColor} />}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          {!blog.banner ? (
            <div className="w-[50%] h-[400px] object-cover phone:w-[80%] m-auto relative -top-20 border-4 border-white">
              <Skeleton baseColor={baseColor} width={"100%"} height={"100%"} />
            </div>
          ) : (
            <img
              className="w-[50%] h-[400px] object-cover phone:w-[80%] m-auto relative -top-20 border-4 border-white duration-100"
              src={`${url}/blog-images/${blog.banner}uploads/${blog.banner}`}
              alt={blog.title}
            />
          )}
          <div className="-mt-14 w-[65%] m-auto phone:w-[90%]">
            {blog.content.length &&
              blog.content[0].blocks.map((block, index) => (
                <div className="mt-4 blog-content">
                  <BlogContent block={block} />
                </div>
              ))}
          </div>

          {similarBlogs && (
            <div className="flex flex-col gap-5 my-10 w-[80%] mx-auto">
              <h2 className={`${styles.homePageSectionTitle} text-xl`}>
                Similar Posts
              </h2>
              <div className="grid grid-cols-3 gap-5 phone:grid-cols-1 gap-y-10">
                {similarBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    blog_id={blog.blog_id}
                    title={blog.title}
                    banner={blog.banner}
                    desc={blog.desc}
                    tags={blog.tags}
                    date={blog.publishedAt}
                    author={blog.author}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default SingleBlogPage;

import { useParams, useNavigate } from "react-router-dom";
import { styles } from "../utils/styles.js";
import { useEffect, useState } from "react";
import { url } from "../assets/assets.js";
import { motion } from "framer-motion";
import axios from "axios";
import { capitalize, formatDate } from "../utils/index.js";
import Loading from "../components/Loading.jsx";
import BlogCard from "../components/BlogCard.jsx";
import BlogContent from "../components/blog_components/BlogContent.jsx";

const SingleBlogPage = () => {
  const { blog_id } = useParams();
  const blogStructure = {
    title: "",
    banner: false,
    content: [],
    tags: [],
    desc: "",
    author: { personal_info: {} },
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
          tag: response.data.data.tags[0],
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

  return loading ? (
    <Loading />
  ) : (
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
      {blog && (
        <div className="mt-[-90px] ">
          <div className="bg-slate-100 h-full p-8 pb-32 flex flex-col gap-7 items-center pt-[120px]">
            <h1
              className={`${styles.homePageSectionTitle} font-bold w-[60%] text-center`}
            >
              {blog.title}
            </h1>
            <div className="flex gap-5 items-center text-gray-500">
              <div className="flex gap-3 items-center">
                <img
                  src={
                    `${url}/profile-images/` +
                    blog.author.personal_info.profile_img
                  }
                  alt=""
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <p className="">{`${capitalize(
                  blog.author.personal_info.first_name
                )} ${capitalize(blog.author.personal_info.last_name)}`}</p>
              </div>

              <div className="flex gap-3 items-center">
                <i className="fi fi-sr-calendar-day"></i>
                <p className="">{formatDate(blog.publishedAt)}</p>
              </div>

              <div className="flex gap-3 items-center ">
                <i className="fi fi-sr-folder-open"></i>
                <p className="">{capitalize(blog.tags[0])}</p>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <img
              className="w-[50%] h-[400px] object-cover phone:w-[80%] m-auto relative -top-20 border-4 border-white"
              src={`${url}/blog-images/` + blog.banner}
              alt={blog.title}
              srcset=""
            />
            <div className="-mt-14 w-[65%] m-auto phone:w-[90%]">
              {/* <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="blog-content"
              /> */}

              {blog.content[0].blocks.map((block, index) => (
                <div className="mt-4 blog-content">
                  <BlogContent block={block} />
                </div>
              ))}
            </div>

            {similarBlogs && (
              <div className="flex flex-col gap-5 my-10 w-[80%] mx-auto">
                <h2 className={`${styles.homePageSectionTitle} text-xl`}>
                  Related Blogs
                </h2>
                <div className="grid grid-cols-3 gap-5">
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
      )}
    </motion.section>
  );
};

export default SingleBlogPage;

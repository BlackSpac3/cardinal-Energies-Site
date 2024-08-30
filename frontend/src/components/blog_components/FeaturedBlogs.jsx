import { styles } from "../../utils/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import FullImgBlogCard from "./FullImgBlogCard";
import { url } from "../../assets/assets";
import MiniBlogCard from "./MiniBlogCard";
import FeaturedSectionSkeleton from "../skeletons/FeaturedSectionSkeleton";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const fetchBlogs = async () => {
    setBlogs(null);
    await axios
      .post(`${url}/api/blog/trending`, {})
      .then(async ({ data }) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="m-body">
      <header>
        <p className={styles.homePageSectionTitle}>Featured Posts</p>
      </header>
      {!blogs ? (
        <FeaturedSectionSkeleton />
      ) : (
        blogs.length == 3 && (
          <div className="grid grid-cols-2 phone:grid-cols-1 grid-rows-2 gap-5 mt-14 phone:mt-6">
            <div className="flex w-full col-span-1 row-span-2 rounded-xl overflow-hidden">
              <FullImgBlogCard
                blog_id={blogs[0].blog_id}
                banner={blogs[0].banner}
                title={blogs[0].title}
                tags={blogs[0].tags}
                h2="2xl"
                p="sm"
                w="90%"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <MiniBlogCard
                blog_id={blogs[1].blog_id}
                banner={blogs[1].banner}
                title={blogs[1].title}
                tags={blogs[1].tags}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <MiniBlogCard
                blog_id={blogs[2].blog_id || null}
                banner={blogs[2].banner}
                title={blogs[2].title}
                tags={blogs[2].tags}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default FeaturedBlogs;

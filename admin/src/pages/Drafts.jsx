import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import BlogCard from "../components/blog_page_components/BlogCard";
import { capitalize } from "../utils";
import { filterPaginationData } from "../utils/filter-pagination-data";
import ContentPages from "../components/ContentPages";
import Loading from "../components/Loading";
import SearchBox from "../components/SearchBox";
import BlogCardSkelenton from "../components/Skelentons/BlogCardSkelenton";

const Drafts = () => {
  const max = 9;
  const {
    url,
    userData: { user_id },
  } = useContext(UserContext);
  const [blogs, setBlogs] = useState(null);

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.keyCode == 13 && query.length) {
      fetchBlogs({ query, page: 1 });
    }
  };

  const clearSearch = (e) => {
    setQuery(e.target.value);
    e.target.value == "" && fetchBlogs({ page: 1, max });
  };

  const prevBttn = useRef(null);
  const nextBttn = useRef(null);

  const fetchBlogs = async ({
    query,
    category,
    page = 1,
    max,
    draft = true,
  }) => {
    setBlogs(null);
    let formatedData;
    const author_id = user_id;

    await axios
      .post(`${url}/api/blog/list`, {
        query,
        category,
        page,
        max,
        author_id,
        draft,
      })
      .then(async ({ data }) => {
        formatedData = await filterPaginationData({
          state: blogs,
          data: data.data,
          page: page,
          countRoute: "/api/blog/all-latest-blogs-count",
          data_to_send: { query, author_id },
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
    <div className="flex flex-col p-10 w-full gap-10 overflow-y-scroll">
      <div className="flex justify-between w-full gap-10 items-center">
        <div className="flex w-[50%]">
          <SearchBox
            onKeyDown={handleSearch}
            onChange={clearSearch}
            placeholder="Find blogs"
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-10 items-center w-full ">
          <div className="grid grid-cols-3 gap-5 duration-100 w-full">
            {blogs == null ? (
              <BlogCardSkelenton cards={9} />
            ) : (
              blogs.results.map((blog, index) => {
                const { first_name, last_name, profile_img } =
                  blog.author.personal_info;
                return (
                  <BlogCard
                    blog_id={blog.blog_id}
                    banner={blog.banner}
                    title={capitalize(blog.title)}
                    desc={blog.desc}
                    tags={blog.tags}
                    status="Published"
                    date={blog.publishedAt}
                    author={`${capitalize(first_name)} ${capitalize(
                      last_name
                    )}`}
                    author_profile_img={profile_img}
                  />
                );
              })
            )}
          </div>
          <ContentPages
            state={blogs}
            fetchData={fetchBlogs}
            prev={prevBttn}
            next={nextBttn}
            query={query}
            max={max}
          />
        </div>
      </div>
    </div>
  );
};
export default Drafts;

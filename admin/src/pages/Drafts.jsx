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
import NoDataMessage from "../components/NoDataMessage";

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
      fetchBlogs();
    }
  };

  const clearSearch = (e) => {
    setQuery(e.target.value);
    e.target.value == "" && fetchBlogs();
  };

  const prevBttn = useRef(null);
  const nextBttn = useRef(null);

  const fetchBlogs = async () => {
    setBlogs(null);
    let formatedData;
    const author_id = user_id;

    await axios
      .post(`${url}/api/blog/list`, {
        query,
        page: 1,
        max,
        author_id,
        draft: true,
      })
      .then(async ({ data }) => {
        formatedData = await filterPaginationData({
          state: blogs,
          data: data.data,
          page: 1,
          countRoute: "/api/blog/all-latest-blogs-count",
          data_to_send: { query, author_id, draft: true },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setBlogs(formatedData);
    console.log(formatedData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col py-10 px-[3vw] tab-m:px-[5vw] w-full gap-10 overflow-y-scroll">
      <div className="flex justify-between w-full gap-10 items-center">
        <div className="flex w-[50%] tab-s:w-full">
          <SearchBox
            onKeyDown={handleSearch}
            onChange={clearSearch}
            search={() => query.length && fetchBlogs()}
            placeholder="Find drafts"
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-10 items-center w-full ">
          <div className="grid grid-cols-3 tab-m:grid-cols-2 tab-s:grid-cols-1 gap-y-10 gap-5 duration-100 w-full">
            {!blogs ? (
              <BlogCardSkelenton cards={9} />
            ) : blogs.results.length ? (
              blogs.results.map((blog, index) => (
                <BlogCard
                  key={index}
                  blog_id={blog.blog_id}
                  banner={blog.banner}
                  title={capitalize(blog.title)}
                  desc={blog.desc}
                  tags={blog.tags}
                  status="Published"
                  date={blog.publishedAt}
                  author={blog.author}
                />
              ))
            ) : (
              <div className="col-span-3">
                <NoDataMessage message="No Drafts" />
              </div>
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

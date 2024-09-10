import MiniBlogCard from "../components/dashboard_components/MiniBlogCard";
import { capitalize } from "../utils";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";
import CurrentInfo from "../components/dashboard_components/CurrentInfo";
import RecentActivities from "../components/dashboard_components/RecentActivities";
import MiniBlogCardSkelenton from "../components/Skelentons/MiniBlogCardSkelenton";
import { Link } from "react-router-dom";
import NoDataMessage from "../components/NoDataMessage";

const Dashboard = () => {
  const {
    url,
    userData: { user_id },
  } = useContext(UserContext);

  const [blogs, setBlogs] = useState(null);
  const fetchBlogs = async () => {
    const res = await axios.post(`${url}/api/blog/list`, {
      page: 1,
      max: 5,
      author_id: user_id,
    });
    if (res.data.success) {
      setBlogs(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex flex-col w-full h-full overflow-hidden tab-m:overflow-scroll tab-m:h-fit ">
      <section className="grid grid-cols-[1fr,0.6fr] tab-m:flex tab-m:flex-col overflow-hidden tab-m:overflow-scroll px-[3vw] tab-m:gap-5 h-full ">
        <div className="flex flex-col gap-5 tab-m:gap-10 h-full tab-m:h-fit  overflow-hidden tab-m:pr-0 pr-5 pt-5">
          <CurrentInfo />

          <RecentActivities />
        </div>
        <div className="flex flex-col border-l tab-m:border-l-0 bg-white max-h-full w-full pl-5 tab-m:pl-0 pt-5 overflow-hidden">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-lg ">Your recent blogs</h1>
            <Link to="/blogs">
              <button className="text-xs border rounded-md px-3 py-1">
                View all
              </button>
            </Link>
          </div>
          <hr className="mt-3" />
          <div className="h-full w-full flex flex-col gap-2 overflow-y-scroll pt-3 pb-5 pr-2">
            {!blogs ? (
              <MiniBlogCardSkelenton cards={5} />
            ) : blogs.length ? (
              blogs.map((blog, index) => {
                const date = new Date(blog.publishedAt);
                return (
                  <MiniBlogCard
                    key={index}
                    banner={blog.banner}
                    title={capitalize(blog.title)}
                    desc={blog.desc}
                    date={date.toDateString().slice(3)}
                  />
                );
              })
            ) : (
              <div>
                <NoDataMessage message="No Blogs Made Yet" />
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Dashboard;

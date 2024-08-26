import MiniBlogCard from "../components/dashboard_components/MiniBlogCard";
import { capitalize } from "../utils";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { assets, icons } from "../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";
import { storeInSession } from "../common/session";

const Dashboard = () => {
  const {
    // userAuth: { user_id, email },
    url,
    userData: {
      user_id,
      first_name,
      last_name,
      profile_img,
      email,
      total_posts,
      total_reads,
      total_drafts,
      total_images,
      user_type,
    },
    userData,
    setUserData,
  } = useContext(UserContext);

  // const [info, setInfo] = useState({
  //   total_posts: 0,
  //   total_reads: 0,
  //   total_drafts: 0,
  //   total_images: 0,
  // });
  // const [userData, setUserData] = useState({});
  const info_tags = [
    {
      icon: "document",
      title: "Posts",
      amount: total_posts,
    },
    {
      icon: "check-double",
      title: "Reads",
      amount: total_reads,
    },
    {
      icon: "file-edit",
      title: "Drafts",
      amount: total_drafts,
    },
    {
      icon: "picture",
      title: "Images",
      amount: total_images,
    },
  ];
  const activities = [
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
    {
      icon: icons.add_image_green,
      activity: "Image Upload",
      content_title: "Jute Bags: an open market",
      date: "13/08/2024",
      author: "Toyin Jacobs",
      author_img: assets.user_test_img,
    },
  ];

  const [blogs, setBlogs] = useState([]);
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

  const getUserLatestData = async () => {
    const res = await axios.post(`${url}/api/user/get-user`, { email });

    if (res.data.success) {
      const data = res.data.data;
      let newUserData = { ...userData, ...data };
      storeInSession("user", JSON.stringify(newUserData));
      setUserData(newUserData);
      console;
    } else {
      toast.error("Error getting user");
    }
  };

  useEffect(() => {
    fetchBlogs();
    console.log(userData);
    getUserLatestData();
  }, []);
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <section className="grid grid-cols-[1fr,0.6fr] phone:flex phone:flex-col gap-5 overflow-hidden phone:overflow-auto py-5 px-[3vw]  phone:h-fit h-full">
        <div className="flex flex-col gap-5 h-full phone:h-fit overflow-hidden phone:overflow-auto">
          <div>
            <div className="mt-3">
              <h1 className="text-xl">{`Welcome, ${capitalize(
                first_name
              )}`}</h1>
              <p className="text-xs w-[60%] text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="grid grid-cols-4 phone:grid-cols-2 gap-2 mt-4">
              {info_tags.map((tag, index) => (
                <div
                  key={index}
                  className={`rounded-lg py-3 px-3 ${
                    (index === 0 && "bg-[#2fae6010] text-primary") ||
                    (index === 1 && "bg-[#2563eb10] text-blue-600") ||
                    (index === 2 && "bg-[#ea580610] text-orange-600") ||
                    (index === 3 && "bg-[#9333ea10] text-purple-600")
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center justify-center rounded-lg w-[24px] h-[24px] ${
                        (index === 0 && "bg-[#2fae6015] text-primary") ||
                        (index === 1 && "bg-[#2563eb15] text-blue-600") ||
                        (index === 2 && "bg-[#ea580615] text-orange-600") ||
                        (index === 3 && "bg-[#9333ea15] text-purple-600")
                      }`}
                    >
                      <i class={`fi fi-sr-${tag.icon} text-xs`}></i>
                    </div>
                    <p className="text-xs">{tag.title}</p>
                  </div>
                  <p className="text-2xl font-medium mt-3 px-1">{tag.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col  bg-white phone:overflow-auto phone:h-[50vh] h-full overflow-hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-lg">Recent Activities</h1>
              <select
                name="category"
                id="dashboard-select"
                className="border p-1 rounded-md text-xs"
              >
                <option value="">All</option>
                <option value="">Deleted Image</option>
                <option value="">Deleted Blog</option>
                <option value="">Image Upload</option>
                <option value="">New Employee</option>
                <option value="">Published Blog</option>
                <option value="">Removed Employee</option>
              </select>
            </div>
            <hr className="mt-4" />
            <div className="flex flex-col max-h-full phone:max-h-fit phone:overflow-auto overflow-hidden">
              <div className="max-h-full overflow-y-scroll phone:overflow-auto phone:max-h-fit text-neutral-700">
                <div className="grid grid-cols-[0.3fr_0.4fr_0.2fr_0.3fr] phone:grid-cols-[0.5fr_0.3fr_0.3fr] gap-2  py-2 text-xs">
                  <p className="">Activity</p>
                  <p className="phone:hidden">Title</p>
                  <p className="">Date</p>
                  <p>By</p>
                </div>
                <hr className="" />
                {activities.map((activity, index) => (
                  <>
                    <div className="grid grid-cols-[0.3fr_0.4fr_0.2fr_0.3fr] phone:grid-cols-[0.5fr_0.3fr_0.3fr] gap-2 py-5  text-xs items-center">
                      <div className="flex items-center gap-2 ">
                        <div className="flex items-center justify-center  bg-[#2fae6010] rounded-full w-[36px] h-[36px]">
                          <img
                            src={activity.icon}
                            alt=""
                            className="w-[16px] h-[16px] object-cover"
                          />
                        </div>

                        <p className="line-clamp-1">{activity.activity}</p>
                      </div>
                      <p className="line-clamp-1 phone:hidden">
                        {activity.content_title}
                      </p>
                      <p className="line-clamp-1">{activity.date}</p>
                      <div className="flex items-center gap-2">
                        <img
                          src={activity.author_img}
                          alt=""
                          className="w-[32px] h-[32px] phone:hidden object-cover rounded-full"
                        />

                        <p className="line-clamp-1">{activity.author}</p>
                      </div>
                    </div>
                    <hr className="" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-l bg-white p-5 max-h-full w-full overflow-hidden">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-lg ">Your recent blogs</h1>
            <button className="text-xs border rounded-md px-3 py-1">
              View all
            </button>
          </div>
          <hr className="mt-3" />
          <div className="h-full w-full flex flex-col gap-2 overflow-y-scroll pt-3">
            {blogs.map((blog, index) => {
              const date = new Date(blog.publishedAt);
              return (
                <MiniBlogCard
                  banner={blog.banner}
                  title={capitalize(blog.title)}
                  desc={blog.desc}
                  date={date.toDateString().slice(3)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;

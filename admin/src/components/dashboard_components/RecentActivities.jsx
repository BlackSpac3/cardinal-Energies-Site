import { assets, icons } from "../../assets/assets";

const RecentActivities = () => {
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
  return (
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
          <option value="">Published Blog</option>
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
          <div className="pb-5">
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
  );
};
export default RecentActivities;

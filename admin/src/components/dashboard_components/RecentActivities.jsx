import { useEffect, useState } from "react";
import { assets, icons } from "../../assets/assets";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Loading from "../Loading";
const RecentActivities = () => {
  const { url } = useContext(UserContext);
  const [activities, setActivities] = useState(null);

  const fetchActivities = async () => {
    axios
      .get(`${url}/activities`)
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <div className="flex flex-col  bg-white tab-s:overflow-auto tab-m:h-[40vh] h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">Recent Activities</h1>
      </div>
      <hr className="mt-4" />
      <div className="flex flex-col max-h-full tab-s:max-h-fit tab-s:overflow-auto overflow-hidden">
        <div className="max-h-full overflow-y-scroll tab-s:overflow-auto tab-s:max-h-fit text-neutral-700">
          <div className="grid grid-cols-[0.3fr_0.4fr_0.2fr_0.3fr] tab-s:grid-cols-[0.5fr_0.3fr_0.3fr] gap-2  py-2 text-xs">
            <p className="">Activity</p>
            <p className="tab-s:hidden">Title</p>
            <p className="">Date</p>
            <p>By</p>
          </div>
          <hr className="" />
          <div className="pb-5">
            {!activities ? (
              <Loading />
            ) : (
              activities.map((activity, index) => {
                const { first_name, last_name, profile_img } =
                  activity.author.personal_info;
                const date = new Date(activity.createdAt);
                const profile_imageURL = `${url}/profile-images/${profile_img}uploads/${profile_img}`;

                let icon;
                let icon_color;
                let type;

                if (activity.type == "blog_add") {
                  type = "New Blog";
                  icon = "document";
                } else if (activity.type == "blog_del") {
                  type = "Blog Deleted";
                  icon = "document-circle-wrong";
                } else if (activity.type == "img_add") {
                  type = "Image Uploaded";
                  icon = "add-image";
                } else if (activity.type == "img_del") {
                  type = "Image Deleted";
                  icon = "image-slash";
                }
                return (
                  <>
                    <div className="grid grid-cols-[0.3fr_0.4fr_0.2fr_0.3fr] tab-s:grid-cols-[0.5fr_0.3fr_0.3fr] gap-2 py-5  text-xs items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex items-center justify-center  ${
                            activity.type == "blog_add" ||
                            activity.type == "img_add"
                              ? "bg-primary text-primary"
                              : "bg-red-500 text-red-500"
                          } bg-opacity-10 rounded-full w-[32px] h-[32px]`}
                        >
                          <i class={`fi fi-rr-${icon}`}></i>
                        </div>

                        <p className="line-clamp-1">{type}</p>
                      </div>
                      <p className="line-clamp-1 tab-s:hidden">
                        {activity.title}
                      </p>
                      <p className="line-clamp-1">
                        {date.toLocaleDateString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <img
                          src={profile_imageURL}
                          alt=""
                          className="w-7 h-7 tab-s:hidden object-cover rounded-full"
                        />

                        <p className="line-clamp-1 capitalize">
                          {`${first_name} ${last_name}`}
                        </p>
                      </div>
                    </div>
                    <hr className="" />
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentActivities;

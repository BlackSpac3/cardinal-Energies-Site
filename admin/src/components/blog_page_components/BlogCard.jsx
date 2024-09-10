import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const BlogCard = ({ blog_id, banner, title, desc, tags, date, author }) => {
  const {
    url,
    userData: { user_type, user_id },
  } = useContext(UserContext);

  const navigate_to = useNavigate();

  const formattedDate = new Date(date);

  const reloadImg = (e) => {
    e.target.src = `${url}/blog-images/${banner}uploads/${banner}`;
  };

  const { first_name, last_name, profile_img } = author.personal_info;

  const navigate = () => {
    if (user_type == "admin") {
      return navigate_to(`/newblog/${blog_id}`);
    }
    if (author._id == user_id) {
      return navigate_to(`/newblog/${blog_id}`);
    }
  };
  return (
    <div onClick={navigate} className="w-full h-full">
      <div className="relative aspect-video rounded-md overflow-hidden">
        {tags.length ? (
          <p className="absolute left-2 top-2 bg-gray-700 bg-opacity-20 backdrop-blur-sm z-[1] rounded-full px-2 py-1 text-xs text-white capitalize ">
            {tags[0]}
          </p>
        ) : (
          <></>
        )}
        <img
          onError={reloadImg}
          loading="lazy"
          decoding="async"
          fetchpriority="high"
          src={
            banner == ""
              ? assets.blog_banner_default
              : `${url}/blog-images/${banner}uploads/${banner}`
          }
          alt=""
          className="w-full aspect-video object-cover rounded-md bg-gray-50 hover:scale-[1.15] overflow-hidden duration-200"
        />
      </div>

      <h2 className="text-base mt-2 font-medium line-clamp-1 leading-tight">
        {title}
      </h2>
      <p className="text-sm leading-tight line-clamp-3 text-gray-500 mt-1">
        {desc}
      </p>
      <div className="flex gap-2 items-center mt-3">
        <img
          src={`${url}/profile-images/${profile_img}uploads/${profile_img}`}
          alt=""
          className="w-6 h-6 object-cover rounded-full"
        />
        <p className="text-sm text-gray-700 capitalize  line-clamp-1">{`${first_name} ${last_name} • ${formattedDate
          .toDateString()
          .slice(3)}`}</p>
      </div>
    </div>
  );
};
export default BlogCard;

import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const BlogCard = ({
  blog_id,
  banner,
  title,
  desc,
  tags,
  date,
  author,
  author_profile_img,
}) => {
  const { url } = useContext(UserContext);
  const formattedDate = new Date(date);
  const reloadImg = (e) => {
    e.target.src = `${url}/blog-images/${banner}uploads/${banner}`;
  };
  return (
    <Link to={`/newblog/${blog_id}`} className="w-full">
      <div className="relative aspect-video rounded-md overflow-hidden">
        <p className="absolute left-2 top-2 bg-gray-700 bg-opacity-20 backdrop-blur-sm z-[1] rounded-full px-2 py-1 text-xs text-white capitalize ">
          {tags[0]}
        </p>
        <img
          onError={reloadImg}
          loading="lazy"
          decoding="async"
          fetchPriority="high"
          src={`${url}/blog-images/${banner}uploads/${banner}`}
          alt=""
          className="w-full aspect-video object-cover rounded-md bg-gray-50 hover:scale-[1.15] overflow-hidden duration-200"
        />
      </div>

      <h2 className="text-base mt-2 font-medium line-clamp-1 leading-none">
        {title}
      </h2>
      <p className="text-sm leading-tight line-clamp-3 text-gray-500 mt-1">
        {desc}
      </p>
      <div className="flex gap-2 items-center mt-3">
        <img
          src={`${url}/profile-images/${author_profile_img}uploads/${author_profile_img}`}
          alt=""
          className="w-6 h-6 object-cover rounded-full"
        />
        <p className="text-sm text-gray-700  line-clamp-1">{`${author} • ${formattedDate
          .toDateString()
          .slice(3)}`}</p>
      </div>
    </Link>
  );
};
export default BlogCard;

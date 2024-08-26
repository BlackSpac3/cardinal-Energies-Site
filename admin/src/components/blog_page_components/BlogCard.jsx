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
  return (
    <Link to={`/newblog/${blog_id}`} className="w-full">
      <div className="relative">
        <div className=" absolute left-2 top-2 bg-gray-500 bg-opacity-50 px-2 py-1 backdrop-blur-sm rounded-full">
          <p className="text-xs text-white ">{tags[0]}</p>
        </div>
        <img
          src={`${url}/blog-images/` + banner}
          alt=""
          className="w-full aspect-video object-cover rounded-md bg-gray-50"
        />
      </div>

      <h2 className="text-base mt-2 font-medium line-clamp-1 leading-none">
        {title}
      </h2>
      <p className="text-xs leading-tight line-clamp-3 text-gray-500 mt-1">
        {desc}
      </p>
      <div className="flex gap-2 items-center mt-3">
        <img
          src={`${url}/profile-images/` + author_profile_img}
          alt=""
          className="w-6 h-6 object-cover rounded-full"
        />
        <p className="text-xs text-gray-700  line-clamp-1">{`${author} • ${formattedDate
          .toDateString()
          .slice(3)}`}</p>
      </div>
    </Link>
  );
};
export default BlogCard;

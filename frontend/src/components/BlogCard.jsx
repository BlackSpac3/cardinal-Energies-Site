import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import { capitalize, formatDate } from "../utils";
import { url } from "../assets/assets";
const BlogCard = ({
  blog_id,
  banner,
  title,
  desc,
  tags = [],
  date,
  author,
}) => {
  const { first_name, last_name, profile_img } = author.personal_info;
  return (
    <Link to={`/blog/${blog_id}`}>
      <div className="w-full">
        <div className="relative">
          <div className=" absolute left-2 top-2 bg-[#00000050] px-2 py-1 backdrop-blur-sm rounded-full">
            <p className="text-xs text-white ">{tags[0]}</p>
          </div>
          <img
            src={`${url}/blog-images/` + banner}
            alt=""
            className=" w-[100%] h-[220px] object-cover  rounded-xl bg-gray-50"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg mt-1 line-clamp-1 font-medium">{title}</h2>
          <p className="line-clamp-3 text-xs text-gray-500  mt-1">{desc}</p>
          <div className="flex gap-2 items-center mt-4">
            <img
              src={`${url}/profile-images/` + profile_img}
              alt=""
              className="w-6 h-6 object-cover rounded-full"
            />
            <p className="text-xs text-gray-500  line-clamp-1">{`${capitalize(
              first_name
            )} ${capitalize(last_name)} • ${formatDate(date)}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;

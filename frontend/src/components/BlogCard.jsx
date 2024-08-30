import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import { formatDate } from "../utils";
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
    <Link to={`/blog/${blog_id}`} className="w-full">
      <div className="relative aspect-video rounded-xl overflow-hidden ">
        <p className="absolute left-2 top-2 bg-gray-700 bg-opacity-20 backdrop-blur-sm px-2 py-1 z-[1]  rounded-full text-xs text-white capitalize">
          {tags[0]}
        </p>

        <picture>
          <source type="image/webp" />
          <img
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            src={`${url}/blog-images/${banner}uploads/${banner}`}
            alt=""
            className=" w-full h-full  object-cover hover:scale-[1.15] duration-200 bg-gray-50 overflow-hidden"
          />
        </picture>
      </div>

      <div className="mt-4">
        <h2 className="text-lg mt-1 line-clamp-1 font-medium capitalize">
          {title}
        </h2>

        <p className="line-clamp-3 text-sm text-gray-500  mt-1">{desc}</p>
        <div className="flex gap-2 items-center mt-4">
          <img
            src={`${url}/profile-images/${profile_img}uploads/${profile_img}`}
            alt=""
            className="w-7 h-7 object-cover rounded-full"
          />
          <p className="text-sm text-gray-500  line-clamp-1 capitalize">{`${first_name} ${last_name} • ${formatDate(
            date
          )}`}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;

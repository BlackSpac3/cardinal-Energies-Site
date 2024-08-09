import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/motion";

const BlogCard = ({ id, thumbnail, title, desc, date, category }) => {
  console.log(thumbnail);
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-solid p-[2%] rounded-3xl">
        <img
          src={thumbnail}
          alt=""
          className=" w-[100%] object-cover  rounded-2xl"
        />
        <div>
          <h2 className="text-lg line-clamp-1 font-medium mt-[15px]">
            {title}
          </h2>
          <p className="tab-m:line-clamp-3 text-sm tab-m:text-xs mt-1">
            {desc}
          </p>
        </div>
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer my-[5px]"
        >
          <p className="text-sm inline tab-m:text-xs text-primary pb-[2px] border-b-[1.5px] border-primary">
            Read more
          </p>
        </motion.div>
      </div>
    </Link>
  );
};
export default BlogCard;

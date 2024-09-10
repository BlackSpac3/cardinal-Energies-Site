import { Link } from "react-router-dom";
import { url } from "../../assets/assets";
const FullImgBlogCard = ({
  blog_id,
  banner,
  title,
  desc,
  tags,
  h2 = "4xl",
  p = "base",
  w = "70%",
}) => {
  return (
    <div
      id=""
      className="relative flex justify-end flex-col bg-gray-50 text-white overflow-hidden w-full h-full"
    >
      <img
        loading="lazy"
        decoding="async"
        fetchpriority="high"
        src={`${url}/blog-images/${banner}uploads/${banner}`}
        alt=""
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000070] to-[#00000000] z-1"></div>

      <div className=" p-[5%] z-10">
        <div className={`flex flex-col items-start w-[${w}] tab-s:w-[100%]`}>
          <p
            className={`text-${p} px-4 py-2 capitalize leading-none bg-gray-700 bg-opacity-20 border-white border-2 backdrop-blur backdrop-filter rounded-full`}
          >
            {tags[0]}
          </p>
          <Link to={`/blog/${blog_id}`}>
            <h2
              className={`text-${h2} capitalize font-medium line-clamp-3 mt-4`}
            >
              <span className="bg-gradient-to-r from-white to-white bg-[length:0px_2px] hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {title}
              </span>
            </h2>
          </Link>
          <p className={`text-${p} mt-2 tab-s:hidden`}>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default FullImgBlogCard;

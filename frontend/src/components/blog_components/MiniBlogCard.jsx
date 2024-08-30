import { url } from "../../assets/assets";
import { Link } from "react-router-dom";
const MiniBlogCard = ({ blog_id, banner, title, desc, tags }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <img
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        src={`${url}/blog-images/${banner}uploads/${banner}`}
        alt=""
        className="w-full h-full col-span-4 object-cover aspect-square rounded-xl"
      />

      <div className="col-span-8 w-full">
        <span className="uppercase text-primary font-semibold text-sm">
          {tags[0]}
        </span>
        <Link to={`/blog/${blog_id}`} className="inline-block my-1">
          <h2 className="text-lg capitalize font-semibold leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_2px] hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
export default MiniBlogCard;

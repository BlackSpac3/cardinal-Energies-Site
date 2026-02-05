import { assets } from "@assets/assets";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="w-[75%] tab:w-[90%] flex gap-20 tab-s:flex-col tab-s:gap-10 items-center justify-center">
        <Image
          src={assets.blog_not_found_illustration}
          className="w-[420px] h-auto select-none"
        />
        <div className="flex flex-col items-center text-center">
          <p className="section-big-text">No Blog Found!</p>
          <p className="text-gray-500 mt-5">
            The blog you're searching for may have been deleted or doesn't
            exist. Please check the URL or explore our latest posts.
          </p>
          <Link
            href="/blogs"
            className="px-5 py-3 flex items-center rounded-full gap-2 bg-primary hover:bg-secondary text-white  mt-10 duration-75"
          >
            <p className="leading-none">Latest blogs</p>
            <i className="fi fi-rr-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;

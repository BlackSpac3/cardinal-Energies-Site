import { assets, icons } from "../assets/assets";

import { capitalize } from "../utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = ({ title, setSidebarIsOpen }) => {
  const {
    url,
    userData: {
      first_name,
      last_name,
      profile_img,

      total_posts,
      total_reads,
      total_drafts,
      total_images,
      type,
    },
  } = useContext(UserContext);
  const img = `${url}/profile-images/${profile_img}uploads/${profile_img}`;

  return (
    <div className="flex justify-between items-center py-3 px-[3vw] border-b duration-100">
      <div className="flex gap-5 items-center">
        <div
          onClick={() => setSidebarIsOpen(true)}
          className="flex items-center justify-center h-full aspect-square hidden tab-m:block"
        >
          <i className="fi fi-rr-menu-burger "></i>
        </div>
        <h2 className="text-xl leading-none">{title}</h2>
      </div>

      <div
        id="profile-card"
        className="flex items-center gap-2 cursor-pointer relative rounded-full"
        onClick={() => setShowEditProfile(true)}
      >
        <img
          src={img}
          className="w-[30px] h-[30px] object-cover rounded-full"
        />

        <div className="flex items-start gap-2 tab-m:hidden">
          <p className="text-sm capitalize leading-none line-clamp-1">{`${first_name} ${last_name}`}</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

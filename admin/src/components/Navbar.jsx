import { assets, icons } from "../assets/assets";

import { capitalize } from "../utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = ({ title, setShowEditProfile }) => {
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
  const img = `${url}/profile-images/` + profile_img;
  console.log(profile_img);

  return (
    <div className="flex justify-between items-center py-3 pl-[3vw] pr-[4vw] border-b duration-100">
      <h2 className="text-xl">{title}</h2>

      <div
        id="profile-card"
        className="flex items-center gap-3 cursor-pointer relative rounded-full"
        onClick={() => setShowEditProfile(true)}
      >
        <div className="relative">
          <img
            src={img}
            className="w-[30px] h-[30px] object-cover rounded-full"
          />
          <img
            src={assets.verified_badge}
            alt=""
            className="w-[15px] h-[15px] absolute bottom-0 right-[-4px]"
          />
        </div>
        <div className="flex items-start gap-2">
          <p className="text-[12px] leading-none line-clamp-1">{`${capitalize(
            first_name
          )} ${capitalize(last_name)}`}</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

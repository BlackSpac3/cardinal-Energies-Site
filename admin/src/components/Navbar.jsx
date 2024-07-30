import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img id="logo" src={assets.logo} alt="" className="w-[max(10%,80px)]" />
      <img
        id="profile-img"
        src={assets.profile_img}
        alt=""
        className="w-[36px]"
      />
    </div>
  );
};
export default Navbar;

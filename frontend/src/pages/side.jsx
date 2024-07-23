import { assets, navlinks } from "../assets/assets";

const side = () => {
  return (
    <div>
      <div className="bg-white h-[100vh]">
        <img src={assets.close_icon} alt="" className="w-[110px]" />
        <ul className="hidden phone:flex flex-col ">
          {navlinks.map((link, index) => (
            <a>{link.name}</a>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default side;

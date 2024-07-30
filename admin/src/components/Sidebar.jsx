import { NavLink } from "react-router-dom";
import { icons } from "../assets/assets";

const Sidebar = () => {
  const sidebarOptions = [
    { icon: icons.create_black, title: "Create blog", path: "/newblog" },
    { icon: icons.list_black, title: "View blogs", path: "/blogs" },
    { icon: icons.list_black, title: "Order blog", path: "" },
  ];
  return (
    <div className="w-[18%] min-h-[100vh] border-solid border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]">
      <div
        id="sidebar-options"
        className="pt-[50px] pl-[20%] flex flex-col gap-5"
      >
        {sidebarOptions.map((option, index) => (
          <NavLink
            to={option.path}
            id="sidebar-option"
            className="flex items-end gap-3 border-[1px] border-[#a9a9a9] border-r-0 py-2 px-3 rounded-s-xl cursor-pointer"
          >
            <img src={option.icon} alt="" className="w-[20px]" />
            <p className="tab-m:hidden">{option.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;

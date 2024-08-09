import { NavLink, Outlet } from "react-router-dom";
import { assets, icons } from "../assets/assets";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar = () => {
  const {
    userAuth: { first_name, last_name, email, user_type },
    setUserAuth,
  } = useContext(UserContext);
  const sidebarOptions = [
    {
      black_icon: icons.dashboard_black,
      white_icon: icons.dashboard_white,
      green_icon: icons.dashboard_green,
      title: "Dashboard",
      path: "/",
    },
    {
      black_icon: icons.create_black,
      white_icon: icons.create_white,
      green_icon: icons.create_green,
      title: "Create blog",
      path: "/newblog",
    },
    {
      black_icon: icons.list_black,
      white_icon: icons.list_white,
      green_icon: icons.list_green,
      title: "View blogs",
      path: "/blogs",
    },
    {
      black_icon: icons.gallery_black,
      white_icon: icons.gallery_white,
      green_icon: icons.gallery_green,
      title: "Gallery",
      path: "gallery",
    },
    {
      black_icon: icons.team_black,
      white_icon: icons.team_white,
      green_icon: icons.team_green,
      title: "Team Members",
      path: "/team",
    },
  ];
  console.log(email);
  const logout = () => {
    setUserAuth({ access_token: null });
    sessionStorage.clear();
  };
  return (
    <>
      <div className=" flex flex-col min-h-[100vh] border-r-[1px] w-[14%] shrink-0 text-[1vw] ">
        <div id="logo-div" className="place-self-center py-5">
          <img src={assets.logo_black} alt="" className="w-[100px]" />
        </div>

        <div
          id="sidebar-menu"
          className="flex flex-col gap-5
         h-full my-5"
        >
          <div className="flex flex-col items-center gap-2 rounded-lg">
            <img src={assets.profile_img} alt="" className="w-[54px]" />
            <div className="text-center">
              <p className="text-[12px] line-clamp-1 font-bold">{`${first_name} ${last_name}`}</p>
              <p className="text-[11px] line-clamp-1 text-gray-400">
                {email.split("@")[0]}
              </p>
            </div>
            <div>
              <button className=" border-[1px] px-3 py-1 rounded-lg ">
                <div className="flex gap-1 items-center opacity-60">
                  <img src={icons.edit_black} alt="" className="w-[12px]" />
                  <p className="text-[10px]">Edit profile</p>
                </div>
              </button>
            </div>
          </div>

          <div
            id="sidebar-options"
            className="flex flex-col place-self-start w-full"
          >
            {/* <p className="mx-3 font-medium mb-2">Menu</p> */}
            {sidebarOptions.map((option, index) => (
              <NavLink to={option.path} id="sidebar-option" className="mx-3">
                {({ isActive }) => (
                  <div
                    className={`${
                      isActive ? "bg-[#2fae6010] text-primary py-3" : "py-2"
                    } flex gap-2  items-center px-3 cursor-pointer duration-75 rounded-lg`}
                  >
                    <img
                      src={isActive ? option.green_icon : option.black_icon}
                      alt=""
                      className="w-[16px]"
                    />
                    <p className="tab-m:hidden">{option.title}</p>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
          <div
            id="logout-bttn"
            className="flex flex-col h-full items-center justify-end my-5"
          >
            <button className="flex items-center gap-1" onClick={logout}>
              <img src={icons.logout_black} className="w-[16px] rotate-180" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Sidebar;

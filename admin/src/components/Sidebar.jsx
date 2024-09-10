import { NavLink, Outlet } from "react-router-dom";
import { assets, icons } from "../assets/assets";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar = ({ setPageTitle, sidebarIsOpen, setSidebarIsOpen }) => {
  const {
    userData: { user_type },
    setUserData,
  } = useContext(UserContext);

  const sidebarOptions = [
    {
      icon: "home",
      title: "Home",
      path: "/",
    },
    {
      icon: "edit",
      title: "Write",
      path: "/newblog",
    },
    {
      icon: "document",
      title: "Blogs",
      path: "/blogs",
    },
    {
      icon: "file-edit",
      title: "Drafts",
      path: "/drafts",
    },
    {
      icon: "picture",
      title: "Gallery",
      path: "/gallery",
    },
    {
      icon: "users",
      title: "Employees",
      path: "/employees",
    },
    {
      icon: "newsletter-subscribe",
      title: "Subsrcibers",
      path: "/subsrcibers",
    },
  ];

  const settingsOptions = [
    {
      icon: "user-pen",
      title: "Edit Profile",
      path: "/edit-profile",
    },
    {
      icon: "lock",
      title: "Change Password",
      path: "/change-password",
    },
    {
      icon: "users",
      title: "Manage Users",
      path: "/manage-users",
    },
  ];
  const logout = () => {
    setUserData({ access_token: null });
    sessionStorage.clear();
  };
  return (
    <>
      <div
        className={`${
          sidebarIsOpen
            ? "tab-m:left-0 shadow-[0px_0px_10px_-5px_rgba(0,0,0,10)]"
            : "tab-m:-left-full"
        } tab-m:absolute top-0 bg-white flex flex-col h-screen z-[100] border-r w-[15rem] max-w-[15xrem] text-xs tab-m:text-base overflow-y-auto duration-200`}
      >
        <div
          id="logo-div"
          className="flex justify-center  tab-m:justify-between items-center px-5 py-5"
        >
          <img src={assets.logo_black} alt="" className="w-[100px] " />
          <div
            onClick={() => setSidebarIsOpen(false)}
            className="hidden tab-m:flex h-full aspect-square  justify-center items-center rounded-full bg-gray-100 p-2"
          >
            <i className="fi fi-rr-angle-left text-base"></i>
          </div>
        </div>

        <div
          id="sidebar-menu"
          className="flex flex-col gap-5
         h-full my-5"
        >
          <div
            id="sidebar-options"
            className="flex flex-col gap-5 place-self-start w-full"
          >
            <div id="dashboard-options-section" className="flex flex-col gap-1">
              <div className="flex flex-col gap-2 pl-3">
                <h2>Dashboard</h2>
                <hr />
              </div>
              <div className="flex flex-col">
                {sidebarOptions.map((option, index) => {
                  if (
                    (option.path == "/employees" ||
                      option.path == "/subsrcibers") &&
                    user_type != "admin"
                  ) {
                    return null;
                  } else {
                    return (
                      <NavLink
                        key={index}
                        to={option.path}
                        id="dashboard-options"
                        className=""
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        {({ isActive }) => {
                          isActive && setPageTitle(option.title);
                          return (
                            <div
                              key={index}
                              className={`${
                                isActive
                                  ? "bg-[#2fae6010] text-primary border-r-primary tab-m:py-5 py-3"
                                  : "py-2 tab-m:py-3 opacity-70 hover:opacity-100  border-r-transparent"
                              } flex gap-2 items-center px-5 cursor-pointer duration-75 border-r-[2px]`}
                            >
                              <i className={`fi fi-rr-${option.icon}`}></i>
                              <p className="leading-none">{option.title}</p>
                            </div>
                          );
                        }}
                      </NavLink>
                    );
                  }
                })}
              </div>
            </div>

            <div id="settings-options-section" className="flex flex-col gap-1">
              <div className="flex flex-col gap-2 pl-3">
                <h2>Settings</h2>
                <hr />
              </div>
              <div id="settings-options" className="flex flex-col">
                {settingsOptions.map((option, index) => {
                  if (option.path == "/manage-users" && user_type != "admin") {
                    return null;
                  } else {
                    return (
                      <NavLink
                        key={index}
                        to={option.path}
                        id="sidebar-option"
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        {({ isActive }) => {
                          isActive && setPageTitle(option.title);
                          return (
                            <div
                              key={index}
                              className={`${
                                isActive
                                  ? "bg-[#2fae6010] text-primary border-r-primary tab-m:py-5 py-3"
                                  : "py-2 tab-m:py-3 opacity-70 hover:opacity-100  border-r-transparent"
                              } flex gap-2 items-center px-5 cursor-pointer duration-75 border-r-[2px]`}
                            >
                              <i className={`fi fi-rr-${option.icon}`}></i>
                              <p className="leading-none">{option.title}</p>
                            </div>
                          );
                        }}
                      </NavLink>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div
            id="logout-bttn"
            className="flex flex-col h-full items-center justify-end my-5"
          >
            <button className="flex items-center gap-1" onClick={logout}>
              <i className="fi fi-rr-exit -rotate-180"></i>
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

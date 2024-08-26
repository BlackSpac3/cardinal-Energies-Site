import { NavLink, Outlet } from "react-router-dom";
import { assets, icons } from "../assets/assets";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar = ({ setPageTitle }) => {
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
      <div className="phone:hidden flex flex-col min-h-[100vh] border-r w-[14%] shrink-0 text-[1vw]">
        <div id="logo-div" className="place-self-center py-5">
          <img src={assets.logo_black} alt="" className="w-[100px]" />
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
                  if (option.path == "/employees" && user_type != "admin") {
                    return null;
                  } else {
                    return (
                      <NavLink
                        to={option.path}
                        id="dashboard-options"
                        className=""
                      >
                        {({ isActive }) => {
                          isActive && setPageTitle(option.title);
                          return (
                            <div
                              key={index}
                              className={`${
                                isActive
                                  ? "bg-[#2fae6010] text-primary border-r-primary py-3"
                                  : "py-2 opacity-70 hover:opacity-100  border-r-transparent"
                              } flex gap-2 items-center px-5 cursor-pointer duration-75 border-r-[2px]`}
                            >
                              <i class={`fi fi-rr-${option.icon}`}></i>
                              <p className="tab-m:hidden leading-none">
                                {option.title}
                              </p>
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
                        to={option.path}
                        id="sidebar-option"
                        className=""
                      >
                        {({ isActive }) => {
                          isActive && setPageTitle(option.title);
                          return (
                            <div
                              className={`${
                                isActive
                                  ? "bg-[#2fae6010] text-primary border-r-primary py-3"
                                  : "py-2 opacity-70 hover:opacity-100  border-r-transparent"
                              } flex gap-2 items-center px-5 cursor-pointer duration-75 border-r-[2px]`}
                            >
                              <i class={`fi fi-rr-${option.icon}`}></i>
                              <p className="tab-m:hidden leading-none">
                                {option.title}
                              </p>
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
              <i class="fi fi-rr-exit -rotate-180"></i>
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

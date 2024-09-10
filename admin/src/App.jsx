import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Blogs from "./pages/Blogs";
import LogInPopup from "./pages/LogInPopup";
import Dashboard from "./pages/Dashboard";
import { lookInSession } from "./common/session";
import { UserContext } from "./context/UserContext";
import Gallery from "./pages/Gallery";
import CreateBlog from "./pages/CreateBlog";
import CreateBlogContextProvider from "./context/CreateBlogContext";
import Drafts from "./pages/Drafts";
import ChangePassword from "./pages/ChangePassword";
import EditProfile from "./pages/EditProfile";
import ManageUsers from "./pages/ManageUsers";
import Employees from "./pages/Employees";

const App = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [pageTitle, setPageTitle] = useState("");

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession && setUserData(JSON.parse(userInSession));
  }, []);

  return (
    <>
      <Toaster />

      {userData.access_token ? (
        <div className="flex h-[100vh] overflow-hidden">
          <Sidebar
            setPageTitle={setPageTitle}
            sidebarIsOpen={sidebarIsOpen}
            setSidebarIsOpen={setSidebarIsOpen}
          />
          <div className="flex flex-col w-full">
            <Navbar title={pageTitle} setSidebarIsOpen={setSidebarIsOpen} />
            <div className="flex h-[100vh] overflow-hidden tab-m:overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/newblog"
                  element={
                    <CreateBlogContextProvider>
                      <CreateBlog />
                    </CreateBlogContextProvider>
                  }
                />
                <Route
                  path="/newblog/:blog_id"
                  element={
                    <CreateBlogContextProvider>
                      <CreateBlog />
                    </CreateBlogContextProvider>
                  }
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                <Route path="*" element={<h1>404 Page</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <LogInPopup setSidebarIsOpen={setSidebarIsOpen} />
      )}
    </>
  );
};
export default App;

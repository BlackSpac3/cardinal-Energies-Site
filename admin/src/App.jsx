import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { styles } from "./utils/styles";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import LogInPopup from "./pages/LogInPopup";
import Dashboard from "./pages/Dashboard";
import { lookInSession } from "./common/session";
import { UserContext } from "./context/UserContext";
// import EditProfile from "./components/EditProfile";
import Gallery from "./pages/Gallery";
import CreateBlog2 from "./pages/CreateBlog2";
import CreateBlogContextProvider from "./context/CreateBlogContext";
import Drafts from "./pages/Drafts";
import ChangePassword from "./pages/ChangePassword";
import EditProfile from "./pages/EditProfile";
import ManageUsers from "./pages/ManageUsers";
import AddUserPopUp from "./components/AddUserPopUp";
const App = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [addUserPopUp, setAddUserPopUp] = useState(false);

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession && setUserData(JSON.parse(userInSession));
    console.log(userData);
  }, []);

  return (
    <>
      <Toaster />
      {addUserPopUp ? (
        <AddUserPopUp setAddUserPopUp={setAddUserPopUp} />
      ) : (
        <></>
      )}

      {userData.access_token ? (
        <div className="flex h-[100vh] overflow-hidden">
          <Sidebar setPageTitle={setPageTitle} />
          <div className="flex flex-col w-full">
            <Navbar title={pageTitle} />
            <div className="flex h-[100vh] overflow-hidden phone:overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/newblog"
                  element={
                    <CreateBlogContextProvider>
                      <CreateBlog2 />
                    </CreateBlogContextProvider>
                  }
                />
                <Route
                  path="/newblog/:blog_id"
                  element={
                    <CreateBlogContextProvider>
                      <CreateBlog2 />
                    </CreateBlogContextProvider>
                  }
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route
                  path="/manage-users"
                  element={<ManageUsers showAddUserForm={setAddUserPopUp} />}
                />
                <Route path="*" element={<h1>404 Page</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <LogInPopup />
      )}
    </>
  );
};
export default App;

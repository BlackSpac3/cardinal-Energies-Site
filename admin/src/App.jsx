import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { styles } from "./utils/styles";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import LogInPopup from "./pages/LogInPopup";
import Dashboard from "./pages/Dashboard";
import { lookInSession } from "./common/session";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { userAuth, setUserAuth } = useContext(UserContext);
  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession && setUserAuth(JSON.parse(userInSession));
  }, []);
  return (
    <>
      <ToastContainer />

      {!userAuth.access_token ? (
        <LogInPopup />
      ) : (
        <div className="flex h-[100vh] overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/newblog" element={<CreateBlog />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      )}
    </>
  );
};
export default App;

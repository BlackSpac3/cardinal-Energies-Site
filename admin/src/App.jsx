import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { styles } from "./utils/styles";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr className={styles.hr} />
      <div id="app-content" className="flex">
        <Sidebar />
        <Routes>
          <Route path="/newblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;

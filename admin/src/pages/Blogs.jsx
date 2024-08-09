import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

const Blogs = () => {
  const { url } = useContext(UserContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/blog/list`);
    console.log(res.data.data);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div>
      <div>
        {list.map((item, index) => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  );
};
export default Blogs;

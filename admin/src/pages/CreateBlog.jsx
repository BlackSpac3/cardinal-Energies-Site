import { useState } from "react";
import BlogEditor from "../components/create_blog_page_components/BlogEditor";
import PublishForm from "../components/create_blog_page_components/PublishForm";
import { CreateBlogContext } from "../context/CreateBlogContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const CreateBlog = () => {
  let { blog_id } = useParams();
  const [loading, setLoading] = useState(true);
  const { editorState, blog, setBlog } = useContext(CreateBlogContext);
  const { url } = useContext(UserContext);

  useEffect(() => {
    if (!blog_id) {
      return setLoading(false);
    }
    axios
      .post(`${url}/api/blog/get-blog`, { blog_id, mode: "edit" })
      .then((response) => {
        setBlog(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((err) => {
        setBlog(null);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : editorState == "editor" ? (
    <BlogEditor />
  ) : (
    <PublishForm />
  );
};
export default CreateBlog;

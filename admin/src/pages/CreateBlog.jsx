import { useEffect, useState, useContext } from "react";

import { assets, icons } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import TextEditor from "../components/TextEditor";
import AddThumbnail from "../components/AddThumbnail";

const CreateBlog = () => {
  const { url, userAuth } = useContext(UserContext);
  const inputTextAreaStyle =
    "p-[10px] border-[1px] border-[#cccccc] rounded-md outline-none";

  const [textEditorValue, setTextEditorValue] = useState();

  function handleTextEditorValue(val) {
    setTextEditorValue(val);
  }

  const [thumbnail, setThumbnail] = useState();

  function handleThumbnail(val) {
    setThumbnail(val);
  }

  const [data, setData] = useState({
    title: "",
    desc: "",
    category: "Energy",
  });

  useEffect(() => {
    console.log(textEditorValue);
  }, [textEditorValue]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const date = new Date();
    const formData = new FormData();

    formData.append("thumbnail", thumbnail);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("category", data.category);
    formData.append("content", textEditorValue);
    // formData.append("date", date.toLocaleDateString("en-GB"));

    const response = await axios.post(`${url}/api/blog/add`, formData, {
      headers: { Authorization: `Bearer ${userAuth.access_token}` },
    });
    if (response.data.success) {
      setData({
        title: "",
        desc: "",
        price: "",
        category: "Energy",
      });
      setThumbnail(false);
      toast.success(response.data.message);
    } else {
      console.log(response.data);
      toast.error(response.data.message);
    }
  };

  return (
    <form
      id="create-blog"
      onSubmit={onSubmitHandler}
      className="flex flex-col w-[100%] h-[100vh]  text-base overflow-hidden"
    >
      <div className="flex justify-between items-center w-full py-3 px-[2vw] border-b-[1px] ">
        <h2 className="text-[20px]">Create new blog</h2>
        <button
          type="submit"
          className="bg-primary text-white w-[100px] rounded-md col-span-2 py-2 shadow-md"
        >
          Post
        </button>
      </div>
      <div className="flex flex-col h-[100%] overflow-y-scroll">
        <div className="flex flex-col h-[100%] my-5 mx-16">
          <div className="grid grid-cols-2 gap-2">
            <AddThumbnail setData={handleThumbnail} />
            <div className="flex flex-col h-full">
              <select
                onChange={onChangeHandler}
                name="category"
                id=""
                className={`${inputTextAreaStyle} text-gray-400`}
                defaultValue="default"
              >
                <option value="default" disabled hidden>
                  Category
                </option>
                <option value="Solar-Energy">Solar Energy</option>
                <option value="Oil-Industry">Oil-Industry</option>
                <option value="Sustainability">Sustainability</option>
              </select>

              <textarea
                onChange={onChangeHandler}
                value={data.desc}
                name="desc"
                placeholder="Description"
                required
                className={`${inputTextAreaStyle} w-full h-full mt-2`}
              />
            </div>
          </div>

          <input
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            name="title"
            placeholder="Title"
            className={`${inputTextAreaStyle} font-semibold w-full my-2`}
          />

          <div id="blog-body" className="flex flex-col h-[350px]">
            <TextEditor sendData={handleTextEditorValue} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateBlog;

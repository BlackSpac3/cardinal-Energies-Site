import { useEffect, useState, useContext } from "react";

import { assets, icons } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import TextEditor from "../components/TextEditor";
import AddBanner from "../components/AddBanner";

const CreateBlog = () => {
  const { url, userData: access_token } = useContext(UserContext);
  const inputTextAreaStyle = "p-[10px] border-[1px] rounded-md outline-none";

  const [textEditorValue, setTextEditorValue] = useState();

  function handleTextEditorValue(val) {
    setTextEditorValue(val);
  }

  const [banner, setBanner] = useState();

  function handleBanner(val) {
    setBanner(val);
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
    const formData = new FormData();

    formData.append("banner", banner);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("category", data.category);
    formData.append("content", textEditorValue);

    const response = await axios.post(`${url}/api/blog/add`, formData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (response.data.success) {
      setData({
        title: "",
        desc: "",
        price: "",
        category: "Energy",
      });
      setBanner(false);
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
      className="flex flex-col w-full h-full  text-base overflow-hidden"
    >
      <div className="flex gap-2 items-center justify-between mx-[5vw] py-2 border-b">
        <input
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          name="title"
          placeholder="Title"
          className={`${inputTextAreaStyle} font-medium border-none rounded-none`}
        />
        <div className="flex gap-3">
          <button className="border text-gray-400 px-5 text-xs rounded-md py-2">
            Save Draft
          </button>

          <button
            type="submit"
            className="bg-primary text-white px-5 text-xs rounded-md py-2"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-col h-[100%] overflow-y-scroll">
        <div className="flex flex-col h-[100%] my-5 mx-16">
          <div className="grid grid-cols-2 gap-2">
            <AddBanner setData={handleBanner} />
            <div className="flex flex-col h-full">
              <select
                onChange={onChangeHandler}
                name="category"
                id="create-blog-category-field"
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

          <div id="blog-body" className="flex flex-col h-[350px] mt-2">
            <TextEditor sendData={handleTextEditorValue} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateBlog;

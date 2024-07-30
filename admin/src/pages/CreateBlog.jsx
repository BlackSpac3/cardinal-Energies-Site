import { useEffect, useState } from "react";
import { assets, icons } from "../assets/assets";

const CreateBlog = () => {
  const inputAndLabelDivStyle = "flex flex-col gap-3";
  const inputLabelStyle = "";
  const inputTextAreaStyle = "p-[10px] border-[1px] rounded-md";

  const [thumbnail, setThumbnail] = useState(false);
  const [data, setData] = useState({
    title: "",
    desc: "",
    price: "",
    category: "Uncategorized",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div
      id="create-blog"
      className="w-[70%] ml-[max(5vw,25px)] mt-14 text-[#6d6d6d] text-base]"
    >
      <form className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div id="add-img-upload" className={inputAndLabelDivStyle}>
            <label htmlFor="image">
              <div className="flex flex-col place-content-center bg-[#efefef] rounded-md h-[200px] overflow-hidden cursor-pointer">
                {thumbnail ? (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(thumbnail)}
                      className="h-full object-cover"
                    />
                    {/* <div className="absolute bg-white w-full h-full top-0 left-0 opacity-50">
                      <div>
                        <img src="" alt="" />
                      </div>
                    </div> */}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={icons.upload_img_black}
                      alt=""
                      className="w-[30px]"
                    />
                    <p>Upload Image</p>
                  </div>
                )}
              </div>
            </label>
            <input
              onChange={(e) => setThumbnail(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
          <div
            id="add-title"
            className={`${inputAndLabelDivStyle} ${inputLabelStyle}`}
          >
            <p>Blog Title</p>
            <input
              onChange={onChangeHandler}
              value={data.title}
              type="text"
              name="title"
              placeholder="Type here"
              className={inputTextAreaStyle}
            />
          </div>
          <div
            id="blog-desc"
            className={`${inputAndLabelDivStyle} ${inputLabelStyle}`}
          >
            <p>Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.desc}
              name="desc"
              placeholder="Describe blog here"
              required
              className={`${inputTextAreaStyle} h-full`}
            />
          </div>
          <div id="add-category" className={inputAndLabelDivStyle}>
            <p>Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              id=""
              className={inputTextAreaStyle}
            >
              <option value="Uncategorized">Uncategorized</option>
              <option value="Solar-Energy">Solar Energy</option>
              <option value="Oil-Industry">Oil-Industry</option>
              <option value="Sustainability">Sustainability</option>
            </select>
          </div>
        </div>
        <div>
          <div
            id="blog-body"
            className={`${inputAndLabelDivStyle} ${inputLabelStyle} h-full`}
          >
            <p>Content</p>
            <textarea
              name="content"
              placeholder="Blog Content here"
              required
              className={`${inputTextAreaStyle} h-full `}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary rounded-md col-span-2 text-white py-3 "
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default CreateBlog;

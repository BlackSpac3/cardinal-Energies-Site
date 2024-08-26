import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CreateBlogContext } from "../../context/CreateBlogContext";
import { styles } from "../../utils/styles";
import { blogImgs, capitalize } from "../../utils";
import Tags from "./Tags";
import toast from "react-hot-toast";
import axios from "axios";
const PublishForm = () => {
  const characterLimit = 200;
  const tagLimit = 5;
  const formFieldDivStyle = "flex flex-col gap-2 w-full";
  const inputStyle = `${styles.inputBox} px-3 py-2 `;
  const labelStyle = "text-gray-500 text-sm";
  const navigate = useNavigate();
  const {
    url,
    userData: { access_token, first_name, last_name, profile_img },
  } = useContext(UserContext);

  const { blog_id } = useParams();

  let {
    blog,
    blog: { title, banner, content, tags, desc },
    setBlog,
    textEditor,
    setTextEditor,
    setEditorState,
  } = useContext(CreateBlogContext);

  const handleCloseEvent = () => {
    setEditorState("editor");
  };
  const today = new Date();

  const handleBlogTitleChange = (e) => {
    let input = e.target;
    setBlog({ ...blog, title: input.value });
  };

  const handleBlogDescChangeEvent = (e) => {
    let input = e.target;
    setBlog({ ...blog, desc: input.value });
  };

  const handleBlogDescKeyDown = (e) => {
    e.keyCode == 13 && e.preventDefault();
  };

  const handleTagsInputKeyDown = (e) => {
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();

      let tag = e.target.value.toLowerCase();

      if (tags.length < tagLimit) {
        if (!tags.includes(tag) && tag.length) {
          setBlog({ ...blog, tags: [...tags, tag] });
        }
      } else {
        toast.error(`You can only add ${tagLimit} tags`, {
          id: "taglimit-error",
        });
      }
      e.target.value = "";
    }
  };

  const save = async (e) => {
    console.log("saving...");
    console.log(content);
    const formData = new FormData();

    formData.append("content", JSON.stringify(blog.content));

    let loadingToast = toast.loading("Publishing...");

    blog_id && formData.append("id", blog_id);

    formData.append("banner", banner);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("tags", JSON.stringify(tags));
    formData.append("draft", false);

    const response = await axios.post(`${url}/api/blog/create`, formData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.data.success) {
      e.target.disabled = false;
      toast.dismiss(loadingToast);
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/blogs");
      }, 750);
    } else {
      e.target.disabled = false;
      toast.dismiss(loadingToast);
      toast.error(response.data.message);
    }
  };

  const publishBlog = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    if (!title.length) {
      e.target.disabled = false;
      return toast.error("Give your blog a title to publish", {
        id: "publish-form-no-title-error",
      });
    }

    if (!desc.length || desc.length > characterLimit) {
      e.target.disabled = false;
      return toast.error(
        `Write a description about your blog within ${characterLimit} characters to publish`,
        {
          id: "publish-form-no-desc-error",
        }
      );
    }

    if (!tags.length || tags.length > tagLimit) {
      e.target.disabled = false;
      return toast.error(`Add at least 1 tag to help us rank your blog`, {
        id: "publish-form-no-tag-error",
      });
    }

    let loadingToast = toast.loading("Publishing...");

    const formData = new FormData();

    blog_id && formData.append("id", blog_id);
    formData.append("content", JSON.stringify(content));

    formData.append("banner", banner);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("tags", JSON.stringify(tags));
    formData.append("draft", false);

    const response = await axios.post(`${url}/api/blog/create`, formData, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.data.success) {
      e.target.disabled = false;
      toast.dismiss(loadingToast);
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/blogs");
      }, 750);
    } else {
      e.target.disabled = false;
      toast.dismiss(loadingToast);
      toast.error(response.data.message);
    }
  };

  const bannerFormat = (img) => {
    try {
      return URL.createObjectURL(img);
    } catch (error) {
      return `${url}/blog-images/` + img;
    }
  };

  return (
    <section className="flex flex-col w-full overflow-hidden">
      <nav className="w-full px-[3vw]">
        <div className="flex gap-2 items-center py-2 border-b">
          <button onClick={handleCloseEvent} className="">
            <i className="fi fi-rr-angle-left"></i>
          </button>
          <p className="text-lg">Preview</p>
        </div>
      </nav>

      <section className="overflow-y-scroll">
        <div className="grid grid-cols-2 gap-5 w-[90%] mx-auto py-5 ">
          <div className="w-full">
            <div className="relative w-full aspect-video overflow-hidden rounded-md">
              {tags.length != 0 && (
                <div className="absolute left-2 top-2 bg-gray-600 bg-opacity-50 px-4 py-2 backdrop-blur-sm rounded-full text-white text-sm">
                  <p>{capitalize(tags[0])}</p>
                </div>
              )}
              <img
                src={bannerFormat(banner)}
                alt=""
                className="w-full aspect-video object-cover rounded-md"
              />
            </div>
            <h1 className="text-xl font-medium line-clamp-2 mt-2">{title}</h1>
            <p className="break-words text-sm text-gray-700 mt-1">{desc}</p>
            <div className="flex gap-2 items-center mt-4">
              <img
                src={`${url}/profile-images/` + profile_img}
                className="w-8 h-8"
              />
              <p className="leading-none">{`${capitalize(
                first_name
              )} ${capitalize(last_name)} • ${today
                .toDateString()
                .slice(3)}`}</p>
            </div>
          </div>

          <form className="flex flex-col items-start w-full gap-8">
            <div className="form-field-div">
              <label className="form-label">Blog Title</label>
              <input
                type="text"
                placeholder="Blog Title"
                defaultValue={title}
                className={inputStyle}
                onChange={handleBlogTitleChange}
              />
            </div>

            <div className="form-field-div">
              <label htmlFor="" className="form-label">
                Short description about your blog
              </label>
              <textarea
                defaultValue={desc}
                maxLength={characterLimit}
                name="desc"
                id="create-blog-desc-textarea"
                className={`${inputStyle} h-40 resize-none leading-7`}
                onChange={handleBlogDescChangeEvent}
                onKeyDown={handleBlogDescKeyDown}
              ></textarea>
              <p className="text-end text-xs text-gray-500">
                {characterLimit - desc.length} characters left
              </p>
            </div>

            <div className="form-field-div">
              <label className="form-label">
                Topics - ( Helps in searching and ranking your blog post )
              </label>
              <div
                className={` relative flex flex-col gap-2 px-3 py-2 bg-gray-100 rounded-md`}
              >
                <input
                  type="text"
                  name="tags"
                  placeholder="Topics"
                  className={`px-3 py-2 rounded-md bg-white sticky outline-none  w-full`}
                  onKeyDown={handleTagsInputKeyDown}
                />
                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag, index) => (
                    <Tags tag={tag} tagIndex={index} key={index} />
                  ))}
                </div>
              </div>
              <p className="text-end text-xs text-gray-500">
                {tagLimit - tags.length}{" "}
                {tagLimit - tags.length == 1 ? "tag" : "tags"} left
              </p>
            </div>
            <button onClick={publishBlog} className="bttn place-self-end">
              Publish
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};
export default PublishForm;

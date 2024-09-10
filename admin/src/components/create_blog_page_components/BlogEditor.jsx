import { assets } from "../../assets/assets";
import { useContext } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { CreateBlogContext } from "../../context/CreateBlogContext";
import { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { tools } from "./BlogEditorTools";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

import { blogImgs, capitalize } from "../../utils";
import { useRef } from "react";
import ConfirmDelDialog from "../ConfirmDelDialog";

const BlogEditor = () => {
  const { blog_id } = useParams();

  const navigate = useNavigate();
  const confirmDelModalIdName = "confirm-delete-blog-modal";
  let {
    blog,
    blog: { title, banner, content, tags, desc },
    setBlog,
    textEditor,
    setTextEditor,
    setEditorState,
  } = useContext(CreateBlogContext);

  const {
    userData: { access_token, user_type },
    url,
  } = useContext(UserContext);

  const handleBannerUpload = (e) => {
    const img = e.target.files[0];

    if (img) {
      if (img.size > 1024 * 1024 * 6) {
        toast.error("Image should be less than 6MB");
      } else {
        toast.success("Uploaded 👍 ");
        setBlog({ ...blog, banner: img });
      }
    }
  };

  useEffect(() => {
    setTextEditor(
      new EditorJS({
        holder: "textEditor",
        data: Array.isArray(content) ? content[0] : content,
        tools: tools,
        placeholder: "Let's write an awesome story ",
      })
    );
  }, []);

  const handleTitleKeyDown = (e) => {
    e.keyCode == 13 && e.preventDefault();
  };

  const handleTitleChange = (e) => {
    let input = e.target;

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setBlog({ ...blog, title: input.value });
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    e.target.disabled = true;

    if (!title.length) {
      e.target.disabled = false;
      return toast.error("Give your blog a title to save draft", {
        id: "editor-no-title-error",
      });
    }

    if (textEditor.isReady) {
      textEditor.save().then((data) => {
        data.blocks.map((block, index) => {
          if (block.type == "image") {
            delete block[index];
            toast.error("Images in blog content will not be saved with draft", {
              id: "cant-save-image-in-draft",
            });
          }
        });

        let loadingToast = toast.loading("Saving Draft...");
        const formData = new FormData();

        blog_id && formData.append("id", blog_id);

        formData.append("banner", banner);
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("tags", JSON.stringify(tags));
        formData.append("content", JSON.stringify(blog.content));
        formData.append("draft", true);

        axios
          .post(`${url}/api/blog/create`, formData, {
            headers: { Authorization: `Bearer ${access_token}` },
          })
          .then((response) => {
            e.target.disabled = false;
            toast.dismiss(loadingToast);
            toast.success("Saved");

            setTimeout(() => {
              navigate("/drafts");
            }, 750);
          })
          .catch((err) => {
            console.log(err);
            e.target.disabled = false;
            toast.dismiss(loadingToast);
            toast.error("An error occured");
          });
      });
    }
  };

  const bannerFormat = (img) => {
    try {
      return URL.createObjectURL(img);
    } catch (error) {
      return `${url}/blog-images/${img}uploads/${img}`;
    }
  };

  const handlePublishEvent = (e) => {
    if (!title) {
      return toast.error("Add a title to your blog");
    }
    if (!banner) {
      return toast.error("Upload a blog banner");
    }
    if (textEditor.isReady) {
      textEditor
        .save()
        .then(async (data) => {
          if (!data.blocks.length) {
            toast.error("Write content for your blog", { id: "content-error" });
          } else {
            const loadingToast = toast.loading("Uploading Images...");
            await data.blocks.map((block, block_index) => {
              if (block.type == "image") {
                blogImgs.map((img, index) => {
                  const file = new FormData();
                  file.append("image", img.file);

                  if (img.id == block.data.file.id) {
                    axios
                      .post(`${url}/api/blog/create/add-image`, file)
                      .then((res) => {
                        block.data.file.url = res.data.file.url;
                        toast.success("Images Uploaded 👍", {
                          id: "blog-content-image-upload-sucessful",
                        });
                      });
                  }
                });
              }
            });
            toast.dismiss(loadingToast);
            setBlog({ ...blog, content: data });
            console.log(content);
            setEditorState("publish");
          }
        })
        .cath((err) => {
          console.log(err);
        });
    }
  };

  const deleteBlog = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Deleting...", { id: "deleting-blog" });

    try {
      const res = await axios.post(
        `${url}/api/blog/remove`,
        { blog_id, draft: blog.draft },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      toast.dismiss(loadingToast);
      toast.success(res.data.message, { id: "blog-deleted-successfully" });
      navigate("/blogs");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong somewhere", {
        id: "something-went-wrong-somewhere",
      });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <nav className="w-full px-[3vw]">
        <div className="flex w-full  gap-2 items-start py-2 border-b ">
          {blog_id && (user_type == "admin" || blog.draft) && (
            <button
              onClick={() =>
                document.getElementById(confirmDelModalIdName).showModal()
              }
              className="bttn bg-red-500 text-xs"
            >
              Delete
            </button>
          )}
          <textarea
            defaultValue={title}
            name="title"
            id=""
            rows="1"
            placeholder="Title"
            className="text-2xl font-medium w-full resize-none outline-none leading-tight placeholder:opacity-40 px-2"
            onKeyDown={handleTitleKeyDown}
            onFocus={handleTitleChange}
            onChange={handleTitleChange}
          ></textarea>

          <div className="flex gap-3 min-w-fit text-xs">
            <button onClick={handleSaveDraft} className="bttn-outline">
              Save Draft
            </button>

            <button onClick={handlePublishEvent} className="bttn bg-primary">
              Publish
            </button>
          </div>
        </div>
      </nav>

      <section className="overflow-y-scroll">
        <div className="flex flex-col py-5 gap-5 mx-auto max-w-[80%] tab-m:max-w-[90%]">
          <div className="relative aspect-video bg-white border-2 overflow-hidden">
            <label htmlFor="upload-banner">
              <img
                src={banner ? bannerFormat(banner) : assets.blog_banner_default}
                alt=""
                className="w-full h-full object-cover"
              />
              <input
                id="upload-banner"
                type="file"
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handleBannerUpload}
              />
            </label>
          </div>
          <hr />
          <div id="textEditor" className="editor"></div>
        </div>
      </section>

      <ConfirmDelDialog
        id_name={confirmDelModalIdName}
        delfunc={deleteBlog}
        toaster={true}
        warningText="This blog will be permanently deleted, and this action cannot be
            reversed."
      />
    </div>
  );
};
export default BlogEditor;

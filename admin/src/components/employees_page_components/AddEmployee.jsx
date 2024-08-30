import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { styles } from "../../utils/styles";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const AddEmployee = ({ setEmployeesPage }) => {
  const {
    url,
    userData: { access_token },
  } = useContext(UserContext);
  const imgRef = useRef(null);
  const submitBttnRef = useRef(null);
  const characterLimit = 400;
  const [charactersleft, setCharactersLeft] = useState(characterLimit);
  const inputStyle = `${styles.inputBox} px-3 py-2 `;
  const handleDescChangeEvent = (e) => {
    setCharactersLeft(characterLimit - e.target.value.length);
  };

  const previewEmployeeImg = (e) => {
    const img = e.target.files[0];
    imgRef.current.src = URL.createObjectURL(img);
  };
  const addEmployee = async (e) => {
    e.preventDefault();
    submitBttnRef.current.disabled = true;

    const formData = new FormData(e.target);

    if (!formData.get("img").name) {
      submitBttnRef.current.disabled = false;
      return toast.error("Please add employee's image", {
        id: "no-employee-image-selected",
      });
    }

    if (!formData.get("name")) {
      submitBttnRef.current.disabled = false;
      return toast.error("Please name employee", { id: "no-employee-name" });
    }

    if (!formData.get("role")) {
      submitBttnRef.current.disabled = false;
      return toast.error("Please add the employees role", {
        id: "no-employee-role",
      });
    }

    if (!formData.get("desc") || formData.get("desc").length > characterLimit) {
      submitBttnRef.current.disabled = false;
      return toast.error(
        `Please write a short description of the employee under ${characterLimit} characters`,
        {
          id: "no-employee-desc",
        }
      );
    }
    if (!formData.get("dept")) {
      submitBttnRef.current.disabled = false;
      return toast.error("Please name employee", { id: "no-employee-name" });
    }

    const loadingToast = toast.loading("Adding Employee...");
    try {
      const res = await axios.post(`${url}/api/employee/add`, formData, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      toast.dismiss(loadingToast);
      toast.success(res.data.message, { id: "image-upload-successfull" });
      submitBttnRef.current.disabled = false;
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast);
      toast.error(error.response.data.message);
      submitBttnRef.current.disabled = false;
    }
  };
  return (
    <section className="flex flex-col w-full overflow-hidden">
      <nav className="w-full px-[3vw]">
        <div className="flex gap-2 items-center py-2 border-b">
          <button onClick={() => setEmployeesPage("view")} className="">
            <i className="fi fi-rr-angle-left"></i>
          </button>
          <p className="text-lg">Add Employee</p>
        </div>
      </nav>

      <section className="overflow-y-scroll">
        <form
          onSubmit={addEmployee}
          className="grid grid-cols-2 gap-5 w-[90%] mx-auto py-5 "
        >
          <div className="w-full">
            <label htmlFor="add-employee-form-img-field">
              <div className="relative w-full aspect-square overflow-hidden rounded-md">
                <img
                  ref={imgRef}
                  src={assets.blog_banner_default}
                  alt=""
                  className="w-full aspect-square  object-cover rounded-md"
                />
              </div>
            </label>
            <input
              type="file"
              name="img"
              id="add-employee-form-img-field"
              accept=".jpeg, .png, .jpg"
              hidden
              onChange={previewEmployeeImg}
            />
          </div>

          <div className="flex flex-col items-start w-full gap-5">
            <div className="form-field-div">
              <label
                htmlFor="add-employee-form-name-field"
                className="form-label"
              >
                Full Name
              </label>
              <input
                name="name"
                id="add-employee-form-name-field"
                type="text"
                placeholder="John Doe"
                className={inputStyle}
                // onChange={handleBlogTitleChange}
              />
            </div>

            <div className="flex gap-2 w-full">
              <div className="form-field-div">
                <label
                  htmlFor="add-employee-form-role-field"
                  className="form-label"
                >
                  Job title
                </label>
                <input
                  name="role"
                  id="add-employee-form-role-field"
                  type="text"
                  placeholder="Manager"
                  className={inputStyle}
                />
              </div>

              <div className="form-field-div max-w-fit">
                <label
                  htmlFor="add-employee-form-dept-field"
                  className="form-label"
                >
                  Department
                </label>
                <select
                  name="dept"
                  id="add-employee-form-role-field"
                  className={inputStyle}
                >
                  <option value="board">Board of Directors</option>
                  <option value="management">Management</option>
                </select>
              </div>
            </div>

            <div className="form-field-div">
              <label
                htmlFor="add-employee-form-desc-field"
                className="form-label"
              >
                Description
              </label>
              <textarea
                maxLength={characterLimit}
                name="desc"
                id="add-employee-form-desc-field"
                className={`${inputStyle} h-40 resize-none leading-7`}
                onChange={handleDescChangeEvent}
              ></textarea>
              <p className="text-end text-xs text-gray-500">
                {charactersleft} characters left
              </p>
            </div>

            <button
              ref={submitBttnRef}
              type="submit"
              className="bttn bg-primary place-self-end"
            >
              Add Employee
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default AddEmployee;

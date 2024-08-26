import { useContext, useEffect, useRef, useState } from "react";
import { styles } from "../utils/styles";
import { UserContext } from "../context/UserContext";
import { capitalize } from "../utils";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserPopUp = ({ setAddUserPopUp }) => {
  const navigate = useNavigate();
  const { url } = useContext(UserContext);
  const nameLimit = 3;
  const inputStyle = "border rounded-md px-3 py-2 w-full text-sm outline-none";
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_type: "user",
  });

  let { first_name, last_name, email, user_type } = formData;

  const submitBttnRef = useRef(null);

  const handleInputFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    if (first_name.length < nameLimit || last_name.length < nameLimit) {
      return toast.error("User must have a first and last name", {
        id: "no-user-name-err",
      });
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please provide a valid email", {
        id: "invalid-email-err",
      });
    }

    const loadingToast = toast.loading("Adding User...");

    try {
      const res = await axios.post(`${url}/api/user/register`, formData);
      toast.dismiss(loadingToast);
      toast.success(res.data.message);
      navigate(0);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (first_name.length < nameLimit || last_name.length < nameLimit) {
      submitBttnRef.current.disabled = true;
    } else if (!emailRegex.test(email)) {
      submitBttnRef.current.disabled = true;
    } else {
      submitBttnRef.current.disabled = false;
    }
  }, [formData]);

  return (
    <div className="flex justify-center absolute bg-[#00000070] backdrop-filter backdrop-blur-sm w-full h-full z-20">
      <div className="flex flex-col gap-5 w-[35%] bg-white place-self-center p-7 rounded-xl">
        <div className="flex items-start     justify-between">
          <div className="flex gap-2 items-center w-full">
            <img
              src={`${url}/profile-images/default.png`}
              alt=""
              className="w-[76px] h-[76px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <p className="text-base">{`${capitalize(
                !first_name ? "John" : first_name
              )} ${capitalize(!last_name ? "Doe" : last_name)}`}</p>
              <p className=" text-gray-500 text-xs">
                {!email ? "johndoe@example.com" : email}
              </p>
            </div>
          </div>
          <select
            name="user_type"
            id=""
            defaultValue={user_type}
            className="border rounded-md px-2 py-1 text-sm"
            onChange={handleInputFieldChange}
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <hr />
          <div className="grid grid-cols-[0.5fr_1fr]">
            <label className="form-label">Name</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="first_name"
                className={inputStyle}
                placeholder="John"
                onChange={handleInputFieldChange}
              />
              <input
                type="text"
                name="last_name"
                className={inputStyle}
                placeholder="Doe"
                onChange={handleInputFieldChange}
              />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-[0.5fr_1fr]">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={inputStyle}
              placeholder="johndoe@example.com"
              onChange={handleInputFieldChange}
            />
          </div>
          <hr />
        </div>

        <div className="flex gap-2 place-self-end text-sm">
          <button
            onClick={() => setAddUserPopUp(false)}
            className="bttn-outline"
          >
            Cancel
          </button>
          <button ref={submitBttnRef} onClick={addUser} className="bttn">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddUserPopUp;

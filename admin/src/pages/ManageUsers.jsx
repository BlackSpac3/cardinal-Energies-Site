import { useContext, useState, useEffect, useRef } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";
import { capitalize } from "../utils";
import { assets } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";
import { styles } from "../utils/styles";
import { useNavigate } from "react-router-dom";
const ManageUsers = ({ showAddUserForm }) => {
  const navigate = useNavigate();
  const addUserModalRef = useRef(null);
  const confirmDelModal = useRef(null);
  const submitBttnRef = useRef(null);
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
  const gridCols = "grid grid-cols-[2fr_2fr_0.5fr_0.5fr_0.5fr_0.5fr] gap-5";
  const {
    url,
    userData: { access_token },
  } = useContext(UserContext);
  const [editState, setEditState] = useState([false, -1, ""]);
  const [users, setUsers] = useState(null);

  const handleInputFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const fetchUsers = async () => {
    setUsers(null);
    try {
      console.log("here");
      const res = await axios.post(
        `${url}/api/user/list-users`,
        {},
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.message);
    }
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

  const delUser = async (id) => {
    console.log(id);
    try {
      const res = await axios.post(
        `${url}/api/user/remove-user`,
        { del_user: id },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
    } catch (error) {}
  };
  useEffect(() => {
    fetchUsers();
  }, []);

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
    <section className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-between w-full gap-10 items-center px-10 pt-10">
        <div className="flex w-[50%]">
          <SearchBox
            // onKeyDown={handleSearch}
            // onChange={clearSearch}
            placeholder="Find blogs"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            //   onChange={changeBy}
            name="by"
            id="blog-page-by-field"
            className="border p-1 rounded-md text-xs leading-none"
            // defaultValue="all"
          >
            <option value="all">All</option>
            <option value="by me">By Me</option>
          </select>
          <button
            onClick={() => addUserModalRef.current.showModal()}
            className="bttn text-xs bg-primary"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="px-10 mr-[5px] pt-5">
        <div className={`${gridCols}  py-3 text-sm  `}>
          <p className="border-r">User</p>
          <p className="border-r">Email</p>
          <p className="border-r">Reads</p>
          <p className="border-r">Posts</p>
          <p className="">User Type</p>
          {/* <p>Remove</p> */}
        </div>
        <hr />
      </div>

      {!users ? (
        <Loading />
      ) : (
        <div className="w-full overflow-y-scroll">
          <div className="px-10 pb-10">
            {users.map((user, index) => {
              const {
                _id,
                personal_info: { first_name, last_name, email, profile_img },
                account_info: { total_reads, total_posts, type },
              } = user;
              return (
                <div className="border-b">
                  <div className={`${gridCols} py-3 text-sm items-center`}>
                    <div className="flex gap-2 items-center">
                      <img
                        src={`${url}/profile-images/${profile_img}uploads/${profile_img}`}
                        alt=""
                        className="w-8 h-8 rounded-full bg-gray-50 object-cover"
                      />
                      <p>{`${capitalize(first_name)} ${capitalize(
                        last_name
                      )}`}</p>
                    </div>
                    <p>{email}</p>
                    <p>{total_reads}</p>
                    <p>{total_posts}</p>

                    {editState[0] && editState[1] == index ? (
                      <select
                        name=""
                        id=""
                        defaultValue={type}
                        className=" cursor-pointer mr-1 border max-w-fit outline-none rounded-md"
                      >
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                      </select>
                    ) : (
                      <p>{type}</p>
                    )}

                    {editState[0] && editState[1] == index ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditState([false, -1, ""])}
                          title="Cancel"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 bg-opacity-10"
                        >
                          <i className="fi fi-rr-cross text-xs text-gray-500"></i>
                        </button>

                        <button
                          onClick={() => confirmDelModal.current.showModal()}
                          title="Delete"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 bg-opacity-10"
                        >
                          <i className="fi fi-rr-trash text-red-600"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <button
                          title="Edit"
                          onClick={() => setEditState([true, index, user._id])}
                          className="flex items-center gap-1 justify-center h-8 px-4 rounded-full bg-gray-500  text-gray-500 bg-opacity-10 text-xs"
                        >
                          <p>Edit</p>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <dialog
        ref={addUserModalRef}
        className="rounded-xl w-[35%] place-self-center"
      >
        <Toaster />
        <form className="flex flex-col gap-5  p-7 ">
          <div className="flex items-start justify-between">
            <div className="flex gap-2 items-center w-full">
              <img
                src={`${url}/profile-images/default.pnguploads/default.png`}
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
            <button formMethod="dialog" className="bttn-outline">
              Cancel
            </button>
            <button
              ref={submitBttnRef}
              onClick={addUser}
              className="bttn bg-primary"
            >
              Add User
            </button>
          </div>
        </form>
      </dialog>

      <dialog
        ref={confirmDelModal}
        className="place-self-center rounded-xl text-sm"
      >
        <Toaster />
        <div className="flex flex-col w-[320px] items-center gap-3 p-6">
          <i className="fi fi-rr-triangle-warning text-red-400 text-4xl"></i>
          <h2 className="text-lg leading-none font-medium">Are you sure?</h2>
          <p className=" text-gray-500 text-center">
            All user data will be permanently erased, and this action cannot be
            reversed.
          </p>
          <div className="flex gap-3 w-full mt-2">
            <button
              onClick={() => confirmDelModal.current.close()}
              className="bttn-outline w-full"
            >
              Cancel
            </button>
            <button
              onClick={() => delUser(editState[2])}
              className="bttn w-full bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};
export default ManageUsers;

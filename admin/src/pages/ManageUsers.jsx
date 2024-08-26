import { useContext, useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";
import { capitalize } from "../utils";
const ManageUsers = ({ showAddUserForm }) => {
  const gridCols = "grid grid-cols-[2fr_2fr_0.5fr_0.5fr_0.5fr_0.5fr] gap-5";
  const { url } = useContext(UserContext);
  const [editState, setEditState] = useState([false, null]);
  const [users, setUsers] = useState(null);
  const fetchUsers = async () => {
    setUsers(null);
    try {
      const res = await axios.post(`${url}/api/user/list-users`);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return !users ? (
    <Loading />
  ) : (
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
            onClick={() => showAddUserForm(true)}
            className="bttn text-xs"
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
      <div className="w-full overflow-y-scroll">
        <div className="px-10 pb-10">
          {users.map((user, index) => {
            const {
              personal_info: { first_name, last_name, email, profile_img },
              account_info: { total_reads, total_posts, type },
            } = user;
            return (
              <div className="border-b">
                <div className={`${gridCols} py-3 text-sm items-center`}>
                  <div className="flex gap-2 items-center">
                    <img
                      src={`${url}/profile-images/${profile_img}`}
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
                      className=" cursor-pointer mr-1 border py-1 max-w-fit outline-none rounded-md"
                    >
                      <option value="admin">admin</option>
                      <option value="user">user</option>
                    </select>
                  ) : (
                    <p>{type}</p>
                  )}

                  <div className="relative">
                    <div
                      className={`${
                        editState[0] && editState[1] == index
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      } duration-150 absolute my-auto top-0 bottom-0 left-0 right-0 flex items-center gap-2`}
                    >
                      <button
                        onClick={() => setEditState([false, null])}
                        title="Cancel"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 bg-opacity-10"
                      >
                        <i className="fi fi-rr-cross text-xs text-gray-500"></i>
                      </button>

                      <button
                        title="Delete"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 bg-opacity-10"
                      >
                        <i className="fi fi-rr-trash text-red-600"></i>
                      </button>
                    </div>
                    <div
                      className={`${
                        editState[0] && editState[1] == index
                          ? "opacity-0 z-0"
                          : "opacity-100 z-10"
                      } absolute my-auto top-0 bottom-0 left-0 right-0 flex items-center duration-150`}
                    >
                      <button
                        title="Edit"
                        onClick={() => setEditState([true, index])}
                        className="flex items-center gap-1 justify-center h-8 px-4 rounded-full bg-gray-500  text-gray-500 bg-opacity-10 text-xs"
                      >
                        <p>Edit</p>
                      </button>
                    </div>
                  </div>

                  {/* )} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ManageUsers;

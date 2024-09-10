import { useState, useContext, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { assets } from "../assets/assets";
import { styles } from "../utils/styles";
import { capitalize } from "../utils";
import toast from "react-hot-toast";
import { storeInSession } from "../common/session";

const EditProfile = () => {
  const inputStyle = `${styles.inputBox} px-3 py-2 `;
  const bioLimit = 150;
  const profileImgRef = useRef(null);
  const submitBttnRef = useRef(null);
  const [charactersleft, setCharactersLeft] = useState(bioLimit);
  const [profileImg, setProfileImg] = useState(null);
  let {
    userData: {
      access_token,
      user_id,
      email,
      first_name,
      last_name,
      profile_img,
      bio,
    },
    url,
    userData,
    setUserData,
  } = useContext(UserContext);

  const handleBioCharacterChange = (e) => {
    const input = e.target.value;
    setCharactersLeft(bioLimit - input.length);
  };

  const handleProfileImgUpload = (e) => {
    const img = e.target.files[0];
    profileImgRef.current.src = URL.createObjectURL(img);
    setProfileImg(img);
  };

  const removeProfileImg = (e) => {
    e.preventDefault();
    profile_img = "default.png";
    setProfileImg(null);
    profileImgRef.current.src = `${url}/profile-images/${profile_img}uploads/${profile_img}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    if (!profileImg) {
      formData.append("profile_img", profile_img);
    } else {
      formData.append("profile_img", profileImg);
    }

    if (
      formData.get("first_name").length < 2 ||
      formData.get("last_name").length < 2
    ) {
      return toast.error("Name cannot be less than 2 characters", {
        id: "short-name-error",
      });
    }
    if (formData.get("bio").length > bioLimit) {
      return toast.error(`Bio should not be more than ${bioLimit} characters`);
    }

    const loadingToast = toast.loading("Updating...");

    try {
      const res = await axios.post(`${url}/api/user/update-user`, formData, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const newData = res.data.data;
      let newUserData = { ...userData, ...newData };
      console.log(newUserData);
      storeInSession("user", JSON.stringify(newUserData));
      setUserData(newUserData);

      toast.dismiss(loadingToast);
      toast.success(res.data.message, { id: "profile-update-successfull" });
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="flex flex-col w-full overflow-hidden">
      <div className="overflow-y-scroll">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row items-center lg:items-start py-10 gap-8 lg:gap-10 mx-auto w-[60%] tab:w-[90%]"
        >
          <div className="flex items-start gap-10 ">
            <div className="flex flex-col gap-3 items-center">
              <label
                htmlFor="uploadProfileImg"
                className="relative flex h-32 w-32 bg-gray-100 rounded-full overflow-hidden"
              >
                <div className="w-full h-full absolute top-0 left-0   flex items-center justify-center  bg-[#000000] bg-opacity-20 rounded-full cursor-pointer opacity-0 hover:opacity-100 duration-200">
                  <i class="fi fi-sr-pencil text-white text-[24px]"></i>
                </div>
                <img
                  ref={profileImgRef}
                  src={`${url}/profile-images/${profile_img}uploads/${profile_img}`}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </label>
              <input
                type="file"
                id="uploadProfileImg"
                accept=".jpeg, .jpg, .png "
                onChange={handleProfileImgUpload}
                hidden
              />
              <button
                onClick={removeProfileImg}
                className="rounded-full bg-gray-100 px-5 py-2 text-xs"
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 w-full">
            <div className="flex gap-2 items-start w-full">
              <div className="form-field-div">
                <label htmlFor="first-name-input-field" className="form-label">
                  First name
                </label>
                <input
                  id="first-name-input-field"
                  name="first_name"
                  Value={first_name}
                  type="text"
                  placeholder="John"
                  className={inputStyle}
                />
              </div>
              <div className="form-field-div">
                <label htmlFor="last-name-input-field" className="form-label">
                  Last name
                </label>
                <input
                  id="last-name-input-field"
                  type="text"
                  name="last_name"
                  Value={last_name}
                  placeholder="Doe"
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="form-field-div">
              <label htmlFor="email-input-field" className="form-label">
                Email
              </label>
              <input
                id="email-input-field"
                name="email"
                Value={email}
                type="text"
                placeholder="johndoe@example.com"
                className={inputStyle}
              />
            </div>
            <div className="form-field-div">
              <label htmlFor="bio-input-field" className="form-label">
                Bio
              </label>

              <textarea
                id="bio-input-field"
                name="bio"
                defaultValue={bio}
                className={`${styles.inputBox} py-2 px-4 resize-none lg:40 leading-7`}
                placeholder="Write about yourself"
                maxLength={bioLimit}
                onChange={handleBioCharacterChange}
                rows={6}
              />
              <p className="form-label place-self-end">{`${charactersleft} characters left`}</p>
            </div>

            <button
              ref={submitBttnRef}
              type="submit"
              className="bttn bg-primary text-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default EditProfile;

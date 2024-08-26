import { useState, useContext, useEffect } from "react";
import { assets, icons } from "../assets/assets.js";
import { UserContext } from "../context/UserContext.jsx";
import axios from "axios";
import { toast } from "react-hot-toast";
import TextBox from "../components/TextBox.jsx";
import { storeInSession } from "../common/session.jsx";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const LogInPopup = () => {
  const submitBttn = useRef(null);
  const navigate = useNavigate();
  const { url, userData, setUserData } = useContext(UserContext);
  const linkStyle = "text-primary font-medium cursor-pointer";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    submitBttn.current.disabled = true;

    try {
      const response = await axios.post(`${url}/api/user/login`, data);
      if (response.data.success) {
        storeInSession("user", JSON.stringify(response.data.user));
        toast.success("Login Successful");
        navigate("/");

        setUserData(response.data.user);
        console.log(userData);
        console.log(sessionStorage.user);
      } else {
        console.log(response.data);
        toast.error(response.data.message);
      }
      submitBttn.current.disabled = false;
    } catch (error) {
      toast.error("An unknown error occured");
      submitBttn.current.disabled = false;
    }
  };

  return (
    <section
      id="login-pop-up"
      className="absolute bg-white z-20 w-[100%] h-[100%]  grid grid-cols-[0.5fr_1fr] portrait:grid-cols-1 animate-[fadeIn,1.5s]"
    >
      <div className="flex flex-col">
        <div className="p-5">
          <img src={assets.logo_black} alt="logo" className="w-[120px]" />
        </div>
        <div className="flex flex-col mt-10">
          <form
            onSubmit={onSubmitHandler}
            id="login-popup-container"
            className="flex flex-col gap-5 place-self-center w-[90%] bg-white  py-[25px] px-[30px] rounded-[8px] text-[14px] "
          >
            <div
              id="login-popup-title"
              className="flex justify-between items-center text-black "
            >
              <h2 className="font-bold text-[30px]">Login</h2>
            </div>
            <div id="login-popup-input" className="flex flex-col gap-2 mt-2">
              <TextBox
                id_name="email-input"
                onChange={onChangeHandler}
                type="email"
                name="email"
                value={data.email}
                placeholder="Your email"
                icon="envelope"
              />
              <TextBox
                id_name="password-input"
                type="password"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                placeholder="Password"
                icon="lock"
                content={data.password}
              />
            </div>
            <button ref={submitBttn} type="submit" className="bttn-wide">
              Login
            </button>

            <div className="flex w-[100%] justify-center">
              <p className="">
                Forgot password?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className={linkStyle}
                >
                  Click here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-full portrait:hidden">
        <img
          src={assets.login_banner}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default LogInPopup;

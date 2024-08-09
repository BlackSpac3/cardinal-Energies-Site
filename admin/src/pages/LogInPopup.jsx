import { useState, useContext, useEffect } from "react";
import { assets, icons } from "../assets/assets.js";
import { UserContext } from "../context/UserContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import TextBox from "../components/TextBox.jsx";
import { storeInSession } from "../common/session.jsx";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const LogInPopup = () => {
  const submitBttn = useRef(null);
  const navigate = useNavigate();
  const { url, userAuth, setUserAuth } = useContext(UserContext);
  const linkStyle = "text-primary font-medium cursor-pointer";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

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

        setUserAuth(response.data.user);
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
                onChange={onChangeHandler}
                type="email"
                name="email"
                value={data.email}
                placeholder="Your email"
                img={icons.email}
              />
              <TextBox
                type="password"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                placeholder="Password"
                img={icons.password}
                content={data.password}
              />
            </div>
            <button
              ref={submitBttn}
              type="submit"
              className="py-[15px] bg-primary rounded-md text-white text-[15px]  cursor-pointer duration-[50ms] disabled:bg-gray-100 disabled:text-[#9CA3AF]"
            >
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

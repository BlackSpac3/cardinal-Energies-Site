import { useEffect } from "react";
import TextBox from "../components/TextBox";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ChangePassword = () => {
  const {
    url,
    userData: { access_token },
  } = useContext(UserContext);
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
  const [validLength, setValidLength] = useState(false);
  const submitBttn = useRef(null);
  const [data, setData] = useState({
    currPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const { currPassword, newPassword } = data;

    newPassword.length < 8 ? setValidLength(false) : setValidLength(true);

    if (!currPassword || !passwordRegex.test(newPassword)) {
      submitBttn.current.disabled = true;
    } else {
      submitBttn.current.disabled = false;
    }
  }, [data]);

  const checkIcon = "fi fi-sr-check text-primary text-[10px] duration-100";
  const crossIcon = "fi fi-sr-cross text-red-600 text-[10px] duration-100";

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    submitBttn.current.disabled = true;
    const { currPassword, newPassword } = data;

    if (!currPassword.length || !newPassword.length) {
      submitBttn.current.disabled = false;
      return toast.error("Fill in all fields");
    }

    if (!passwordRegex.test(newPassword)) {
      submitBttn.current.disabled = false;
      return toast.error("Set stronger password");
    }

    const loadingtoast = toast.loading("Updating...");

    const response = await axios.post(`${url}/api/user/change-password`, data, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.data.success) {
      toast.dismiss(loadingtoast);
      submitBttn.current.disabled = false;
      toast.success(response.data.message);
      setData({
        currPassword: "",
        newPassword: "",
      });
    } else {
      toast.dismiss(loadingtoast);
      submitBttn.current.disabled = false;
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="flex flex-col w-[40%] tab-m:w-[90%] mx-auto m-10 gap-5 text-sm"
      >
        <div className="flex flex-col gap-2 w-full">
          <TextBox
            id_name="current-password-input"
            onChange={onChangeHandler}
            type="password"
            name="currPassword"
            value={data.currPassword}
            placeholder="Current Password"
            icon="unlock"
            content={data.currPassword}
          />

          <TextBox
            id_name="new-password-input"
            onChange={onChangeHandler}
            type="password"
            name="newPassword"
            value={data.newPassword}
            placeholder="New Password"
            icon="unlock"
            content={data.newPassword}
          />

          <div className="flex flex-col gap-1 mt-1 text-xs text-gray-500 pl-3">
            <p>Password must include:</p>

            <div className="flex flex-col gap-1 pl-2">
              <div className="flex gap-2">
                <i className={validLength ? checkIcon : crossIcon}></i>
                <p
                  className={
                    validLength
                      ? "text-primary duration-100"
                      : "text-red-600 duration-100"
                  }
                >
                  At least 8 characters
                </p>
              </div>

              <div className="flex gap-2">
                <i
                  className={
                    /[0-9]/.test(data.newPassword) ? checkIcon : crossIcon
                  }
                ></i>
                <p
                  className={
                    /[0-9]/.test(data.newPassword)
                      ? "text-primary duration-100"
                      : "text-red-600 duration-100"
                  }
                >
                  At least one number (0 - 9)
                </p>
              </div>

              <div className="flex gap-2">
                <i
                  className={
                    /[A-Z]/.test(data.newPassword) ? checkIcon : crossIcon
                  }
                ></i>
                <p
                  className={
                    /[A-Z]/.test(data.newPassword)
                      ? "text-primary duration-100"
                      : "text-red-600 duration-100"
                  }
                >
                  At least one uppercase letter (A - Z)
                </p>
              </div>

              <div className="flex gap-2">
                <i
                  className={
                    /[!@#$%^&*]/.test(data.newPassword) ? checkIcon : crossIcon
                  }
                ></i>
                <p
                  className={
                    /[!@#$%^&*]/.test(data.newPassword)
                      ? "text-primary duration-100"
                      : "text-red-600 duration-100"
                  }
                >
                  At least one special character (!@#$%^&*)
                </p>
              </div>
            </div>
          </div>
        </div>
        <button ref={submitBttn} type="submit" className="bttn-wide">
          Change Password
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;

import { useState } from "react";
import { icons } from "../assets/assets";

const TextBox = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  img,
  content,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type === "password" ? (passwordVisible ? "text" : type) : type}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        className="p-4 pl-12 rounded-md bg-gray-50 hover:bg-transparent hover:border-[#e5e7eb] border-[1px] border-gray-50 w-full"
      />
      <img
        src={img}
        alt={name}
        className="absolute w-[20px] left-4 top-1/2 -translate-y-1/2"
      />

      {type === "password" ? (
        <img
          onClick={() =>
            passwordVisible
              ? setPasswordVisible(false)
              : setPasswordVisible(true)
          }
          src={passwordVisible ? icons.hide_eye : icons.open_eye}
          className={`${
            content ? "" : "hidden"
          } absolute w-[18px] right-4 top-1/2 -translate-y-1/2 cursor-pointer`}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default TextBox;

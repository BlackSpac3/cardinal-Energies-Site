import { useContext } from "react";
import { assets } from "../../assets/assets";
import { UserContext } from "../../context/UserContext";

const MiniBlogCard = ({ banner, title, desc, date }) => {
  const { url } = useContext(UserContext);
  return (
    <div className="flex gap-2 cursor-pointer w-full">
      <img
        className="w-[200px] h-[100px] rounded-md object-cover object-center overflow-hidden"
        src={`${url}/blog-images/` + banner}
        alt=""
        srcset=""
      />
      <div className="py-1 w-full">
        <h1 className="text-sm line-clamp-1">{title}</h1>
        <p className=" line-clamp-3 text-xs">{desc}</p>
        <p className="text-gray-500 text-xs mt-1">{!date ? "Draft" : date}</p>
      </div>
    </div>
  );
};

export default MiniBlogCard;

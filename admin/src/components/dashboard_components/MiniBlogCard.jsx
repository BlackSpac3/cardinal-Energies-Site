import { useContext } from "react";
import { assets } from "../../assets/assets";
import { UserContext } from "../../context/UserContext";

const MiniBlogCard = ({ key, banner, title, desc, date }) => {
  const { url } = useContext(UserContext);
  return (
    <div key={key} className="flex gap-2 items-center cursor-pointer w-full">
      <div className="py-1 w-full">
        <h2 className="text-sm line-clamp-1 font-medium">{title}</h2>
        <p className=" line-clamp-3 text-xs text-gray-500 mt-1">{desc}</p>
        <p className="text-gray-500 text-xs mt-1">{!date ? "Draft" : date}</p>
      </div>
      <img
        className="w-[35%] tab-m:aspect-video phone:aspect-square aspect-square rounded-md object-cover object-center overflow-hidden"
        src={`${url}/blog-images/${banner}uploads/${banner}`}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default MiniBlogCard;

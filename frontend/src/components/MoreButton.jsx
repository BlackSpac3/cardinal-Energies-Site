import { motion } from "framer-motion";

import { icons } from "../assets/assets";

const MoreButton = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="flex items-center gap-[10px] cursor-pointer">
        <p className="text-black font-medium">{children}</p>
        <img src={icons.arrow_right_icon_black} alt="" className="w-[24px]" />
      </div>
      <div className="w-[100%] h-[2px] bg-primary mt-[2px] rounded-full"></div>
    </motion.div>
  );
};
export default MoreButton;

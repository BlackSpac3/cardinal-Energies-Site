import { motion } from "framer-motion";
const MoreButton = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="flex items-center gap-[10px] cursor-pointer text-black">
        <p className="font-medium leading-none">{children}</p>
        <i className="fi fi-rs-arrow-right text-xl"></i>
      </div>
      <div className="w-[100%] h-[2px] bg-primary mt-[2px] rounded-full"></div>
    </motion.div>
  );
};
export default MoreButton;

"use client";
import { motion } from "framer-motion";

const CompanyProfile = () => {
  return (
    <section className="py-7 bg-gray-50">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="">Download our Company Profile</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="font-['Montserrat'] bg-primary hover:bg-secondary text-white  px-[25px] py-[10px] rounded-full "
        >
          Download
        </motion.button>
      </div>
    </section>
  );
};

export default CompanyProfile;

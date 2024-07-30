import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../../utils/styles";
import { assets, icons } from "../../assets/assets";

const Team = () => {
  return (
    <section className="m-body">
      <div className="flex justify-between items-center text-black font-semibold text-lg">
        <h1 className={`${styles.homePageSectionTitle}`}>
          Message from our CEO
        </h1>
        <NavLink to="/#" className="text-primary">
          See all team members
        </NavLink>
      </div>
      <div className="grid grid-cols-[0.8fr_1fr]  items-end  gap-7 my-10 phone:block">
        <div className="">
          <div className="flex justify-between ">
            <div></div>
            <img
              className="h-10 relative top-5 right-5"
              src={icons.qoute_green}
              alt=""
            />
          </div>
          <div className="bg-gray-100 p-8 w-[100%] rounded-lg">
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem
              tempore rerum, amet beatae voluptas magnam veniam impedit
              reiciendis deleniti aperiam consequatur vitae vel in laboriosam
              voluptatem omnis perspiciatis ex magni eaque praesentium odit
              iste. Voluptatum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem
              tempore rerum, amet beatae voluptas magnam veniam impedit
              reiciendis deleniti aperiam consequatur vitae vel in laboriosam
              voluptatem omnis perspiciatis ex magni eaque praesentium odit
              iste. Voluptatum?
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            className="h-[40vw] phone:h-[80vw] w-full object-cover object-top rounded-lg"
            src={assets.ceo_img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

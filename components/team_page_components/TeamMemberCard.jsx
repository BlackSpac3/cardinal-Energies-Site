"use client";

import { ClientAppContext } from "@context/ClientAppContext";
import { useContext } from "react";

const TeamMemberCard = ({ img, name, job_title, desc }) => {
  const { setEmpModal } = useContext(ClientAppContext);

  return (
    <div
      onClick={() => {
        document.getElementById("employee-detail-modal").showModal();
        setEmpModal({ name, img_url: img, role: job_title, desc });
      }}
      className=" border rounded-md w-full h-full bg-white cursor-pointer"
    >
      <div>
        <img
          className="aspect-[5/4] w-[100%] rounded-t-md object-cover object-top"
          src={img}
          alt={name}
        />
        <div className="flex flex-col gap-2 p-3 ">
          <div className="flex flex-col">
            <h2 className="font-medium text-gray-500 capitalize">{name}</h2>
            <p className="text-primary text-sm line-clamp-1 capitalize">
              {job_title}
            </p>
          </div>
          <p className="text-gray-500 text-sm text-jusify font-light line-clamp-6">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeamMemberCard;

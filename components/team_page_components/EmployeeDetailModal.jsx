"use client";

import { ClientAppContext } from "@context/ClientAppContext";
import Image from "next/image";
import { useContext, useEffect } from "react";

const EmployeeDetailModal = () => {
  const { empModal, setEmpModal } = useContext(ClientAppContext);
  console.log(empModal);

  const close = () => {
    const dialog = document.getElementById("employee-detail-modal");
    setEmpModal(null);
    dialog.close();
  };

  useEffect(() => {
    const dialog = document.getElementById("employee-detail-modal");

    const clickHandler = (e) => {
      if (e.target === dialog) {
        close();
      }
    };

    const keydownHandler = (e) => {
      if (e.keyCode === 27) {
        e.preventDefault();
        close();
      }
    };

    dialog.addEventListener("keydown", keydownHandler);
    dialog.addEventListener("click", clickHandler);
    return () => {
      dialog.removeEventListener("keydown", keydownHandler);
      dialog.removeEventListener("click", clickHandler);
    };
  }, []);
  return (
    <dialog
      id="employee-detail-modal"
      className="  mx-auto my-auto px-4  outline-none bg-transparent "
    >
      <div className="relative rounded-lg  bg-white flex h-fit w-full max-w-[480px] flex-col gap-5 overflow-hidden p-7">
        <div
          onClick={() =>
            document.getElementById("employee-detail-modal").close()
          }
          className="group  absolute right-5 top-5 cursor-pointer rounded-md p-1 opacity-40 transition-all hover:bg-gray-50 hover:opacity-100"
        >
          <i className="fi fi-rr-cross-small text-lg transition-all group-active:scale-50"></i>
          {/* <X className="size-5 transition-all group-active:scale-50" /> */}
        </div>

        <div className="flex items-center gap-5">
          <Image
            src={empModal?.img_url}
            alt={empModal?.name}
            sizes="100vw"
            width={0}
            height={0}
            className="h-[80px] bg-gray-50 min-h-[80px] w-[80px] min-w-[80px] select-none rounded-full object-cover object-top"
          />
          <div>
            <p className="text-lg font-medium leading-none">{empModal?.name}</p>
            <p className="text-primary">{empModal?.role}</p>
          </div>
        </div>

        <hr />
        <div>
          <p className="overflow-hidden text-sm text-gray-400">
            {empModal?.desc}
          </p>
        </div>
      </div>
    </dialog>
  );
};
export default EmployeeDetailModal;

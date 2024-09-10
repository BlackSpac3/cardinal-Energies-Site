import { Toaster } from "react-hot-toast";

const ConfirmDelDialog = ({ id_name, delfunc, warningText, toaster }) => {
  return (
    <dialog id={id_name} className="mx-auto my-auto rounded-md text-sm">
      {toaster && <Toaster />}
      <div className="flex flex-col w-[320px] items-center gap-3 p-6">
        <i className="fi fi-rr-triangle-warning text-red-400 text-4xl"></i>
        <h2 className="text-lg leading-none font-medium">Are you sure?</h2>
        <p className=" text-gray-500 text-center">{warningText}</p>
        <div className="flex gap-3 w-full mt-2">
          <button
            onClick={() => document.getElementById(id_name).close()}
            className="bttn-outline w-full"
          >
            Cancel
          </button>
          <button onClick={delfunc} className="bttn w-full bg-red-500">
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
};
export default ConfirmDelDialog;

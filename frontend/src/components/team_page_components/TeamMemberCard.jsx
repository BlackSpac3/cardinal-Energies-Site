import { url } from "../../assets/assets";

const TeamMemberCard = ({ img, name, job_title, desc }) => {
  return (
    <div className="shadow-md rounded-md w-full h-full">
      <div>
        <img
          className="h-64 w-[100%] rounded-t-md object-cover object-top"
          src={`${url}/employee-images/${img}uploads/${img}`}
          alt={name}
        />
        <div className="flex flex-col gap-2 p-5 ">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg capitalize">{name}</h1>
            <p className="text-sm text-primary capitalize">{job_title}</p>
          </div>
          <p className="text-xs mb-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default TeamMemberCard;

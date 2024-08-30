import { useContext, useEffect, useRef, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Loading from "../Loading";

const ViewEmployees = ({ setEmployeesPage }) => {
  const { url } = useContext(UserContext);
  const [boardMembers, setBoardMembers] = useState(null);
  const [management, setManagement] = useState(null);

  const fetchBoardMembers = async () => {
    setBoardMembers(null);
    try {
      const res = await axios.post(`${url}/api/employee/list`, {
        dept: "board",
      });
      setBoardMembers(res.data.data);
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const fetchManagementTeam = async () => {
    setBoardMembers(null);
    try {
      const res = await axios.post(`${url}/api/employee/list`, {
        dept: "management",
      });
      setManagement(res.data.data);
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  useEffect(() => {
    fetchBoardMembers();
    fetchManagementTeam();
  }, []);
  return (
    <section className="w-full h-full overflow-hidden py-5 px-[3vw]">
      <div className="w-full h-full grid grid-rows-2 gap-5 overflow-hidden">
        <div className="flex flex-col w-full h-full overflow-hidden">
          <header className="w-full flex justify-between">
            <h2 className="font-medium">Board of Directors</h2>
            <button
              onClick={() => setEmployeesPage("add")}
              className="bttn text-xs bg-primary"
            >
              Add Employee
            </button>
          </header>

          <div className="flex relative pt-3 pb-2 gap-2 w-full h-full overflow-y-hidden overflow-x-scroll">
            {!boardMembers ? (
              <Loading />
            ) : (
              boardMembers.map((member, index) => (
                <div key={index} className="flex h-full flex-col min-w-fit">
                  <EmployeeCard
                    img={member.img}
                    name={member.name}
                    role={member.role}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <h2 className="font-medium">Management</h2>

          <div className="flex pt-3 pb-2 gap-2 h-full overflow-y-hidden overflow-x-scroll">
            {!management ? (
              <Loading />
            ) : (
              management.map((member, index) => (
                <div key={index} className="flex h-full flex-col min-w-fit">
                  <EmployeeCard
                    img={member.img}
                    name={member.name}
                    role={member.role}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ViewEmployees;

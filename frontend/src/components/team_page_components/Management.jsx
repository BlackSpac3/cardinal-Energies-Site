import { useEffect, useState } from "react";
import Loading from "../Loading";
import { styles } from "../../utils/styles.js";
import TeamMemberCard from "./TeamMemberCard";
import axios from "axios";
import { url } from "../../assets/assets.js";

const Management = () => {
  const [management, setManagement] = useState(null);
  const fetchManagementTeam = async () => {
    setManagement(null);
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
    fetchManagementTeam();
  }, []);
  return (
    <section className="m-body">
      <h1 className={`${styles.homePageSectionTitle} text-center my-16`}>
        Management
      </h1>

      <div className="grid grid-cols-3 phone:grid-cols-1 gap-[20px] m-auto  h-full my-20">
        {!management ? (
          <Loading />
        ) : (
          management.map((member, index) => (
            <div key={index}>
              <TeamMemberCard
                img={member.img}
                name={member.name}
                job_title={member.role}
                desc={member.desc}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Management;

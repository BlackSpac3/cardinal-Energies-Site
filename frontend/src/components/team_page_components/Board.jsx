import React, { useEffect, useState } from "react";
import { styles } from "../../utils/styles.js";
import { assets } from "../../assets/assets";
import TeamMemberCard from "./TeamMemberCard.jsx";
import { url } from "../../assets/assets";
import axios from "axios";
import Loading from "../Loading.jsx";

const Board = () => {
  const [boardMembers, setBoardMembers] = useState(null);

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

  useEffect(() => {
    fetchBoardMembers();
  }, []);
  return (
    <section className="m-body">
      <div className={`${styles.homePageSectionTitle} text-center my-16`}>
        Board of Directors
      </div>
      {!boardMembers ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="w-[350px]">
            <TeamMemberCard
              img={boardMembers[0].img}
              name={boardMembers[0].name}
              job_title={boardMembers[0].role}
              desc={boardMembers[0].desc}
            />
          </div>

          <div className="grid grid-cols-3 phone:grid-cols-1 gap-5">
            {boardMembers.map((member, index) => {
              if (index !== 0) {
                return (
                  <div key={index}>
                    <TeamMemberCard
                      img={member.img}
                      name={member.name}
                      job_title={member.role}
                      desc={member.desc}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Board;

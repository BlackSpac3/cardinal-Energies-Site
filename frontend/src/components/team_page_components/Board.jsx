import React from "react";
import { styles } from "../../utils/styles.js";
import { assets } from "../../assets/assets";
import TeamMemberCard from "./TeamMemberCard.jsx";

const Board = () => {
  const boardMembers = [
    {
      name: "David Olurin Jnr.",
      job_tite: "CEO",
      desc: "David is an astute business professional with over twenty years of successful business experience in various sectors including commodity trading. His Professional background has given him a huge leverage to sit as the chief executive of Cardinal Torch. He is an Alumni of the Metropolitan school of business management London (MSBM) and the Lagos business School (LBS).",
    },
    {
      name: "Abimbola Olurin",
      job_tite: "Non-Executive Director",
      desc: "Abimbola is a thorough bred economist with her specialty in Project Management. Governance and Leadership ensuring successful deliveries on each with her wealth of experience, she will contribute to the strategy building and growth of Cardinal Torch positively",
    },
    {
      name: "Bamitele Akindele",
      job_tite: "Non-Executive Director",
      desc: "B. Akindele is a renowed logistics expert with a well grounded experience in info-technology and trucking operations. He is familar with the Nigerian logistics business terrain. He is an Alumni of both the University of kent and the Univerisity of London School of Economics. He ably represents Prof.Raﬁu Ayoola on the board of Cardinal Torch.",
    },
    {
      name: "Michael Orimobi",
      job_tite: "Non-Executive Director",
      desc: "Michael is a capital markets & finance lawyer with years of experience and expertise in capital & money markets, corporate finance, project finance and structured finance transactions. He is a global business leader and philanthropist. He is the founder of TOLG – a global law firm and a director in several thriving businesses across the globe.",
    },
  ];
  return (
    <section className="m-body">
      <div className={`${styles.homePageSectionTitle} text-center my-16`}>
        Board of Directors
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-[350px]">
          <TeamMemberCard
            name={boardMembers[0].name}
            job_title={boardMembers[0].job_tite}
            desc={boardMembers[0].desc}
          />
        </div>

        <div className="grid grid-cols-3 phone:grid-cols-1 gap-5">
          {boardMembers.map((member, index) => {
            if (index !== 0) {
              return (
                <TeamMemberCard
                  name={member.name}
                  job_title={member.job_tite}
                  desc={member.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Board;

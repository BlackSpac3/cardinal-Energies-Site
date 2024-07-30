import React from "react";
import { styles } from "../../utils/styles";

const CompanyValues = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci  est repellendus ipsum amet, cum perferendis? Quisquam, architecto!",
    },
    {
      title: "Responsibility",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci  est repellendus ipsum amet, cum perferendis? Quisquam, architecto!",
    },
    {
      title: "Innovation",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci  est repellendus ipsum amet, cum perferendis? Quisquam, architecto!",
    },
    {
      title: "Sustainability",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci  est repellendus ipsum amet, cum perferendis? Quisquam, architecto!",
    },
  ];
  return (
    <section className="bg-section-bg-1 bg-center bg-no-repeat bg-cover h-full py-6">
      <div className="m-body">
        <h1 className={`${styles.homePageSectionTitle} text-white`}>
          Our Company Values
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-10  text-white phone:grid-cols-1">
          {values.map((value, index) => (
            <div className="p-6 h-full w-full bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white">
              <h1 className="text-white font-semibold text-2xl mb-1">
                {value.title}
              </h1>
              <p>{value.desc}</p>
              <button>Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;

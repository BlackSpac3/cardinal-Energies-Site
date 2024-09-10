import React from "react";
import { styles } from "../../utils/styles";

const CompanyValues = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Integrity is the cornerstone of everything we do. We are committed to conducting our business with the highest standards of honesty, transparency, and ethical behavior.",
    },
    {
      title: "Responsibility",
      desc: "As a responsible corporate citizen, we strive to benefit our clients, employees, communities, and the planet by making ethical, sustainable decisions focused on long-term value creation.",
    },
    {
      title: "Innovation",
      desc: "Our commitment to innovation fuels our ability to deliver superior products and services that exceed expectations and lead the industry.",
    },
    {
      title: "Sustainability",
      desc: "We are dedicated to fostering environmental stewardship and creating long-term value through sustainable practices.",
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
            <div
              key={index}
              className="p-6 h-full w-full bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white"
            >
              <h1 className="text-white font-semibold text-xl mb-1">
                {value.title}
              </h1>
              <p className="text-sm">{value.desc}</p>
              {/* <button>Learn more</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;

import { animate, motion } from "framer-motion";

import { styles } from "../../utils/styles";
import { icons } from "../../assets/assets";

const ReachTheTop = () => {
  const skills = [
    { name: "Professionality", percentage: "90%" },
    { name: "Quality", percentage: "90%" },
    { name: "Expertise", percentage: "90%" },
  ];
  return (
    <section className="bg-section-bg-1 bg-cover bg-center bg-no-repeat">
      <div
        id="section-contents"
        className=" p-[7vw] grid grid-cols-[0.8fr_1fr] gap-10 items-center text-white"
      >
        <div>
          <h2 className={`${styles.homePageSectionTitle} text-white`}>
            Reach The Top With Cardinal Energies
          </h2>
          <p className="my-5 text-[#dddddd]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            commodi fugiat dolorem alias blanditiis soluta accusantium
            dignissimos voluptates tenetur harum.
          </p>
          <div className="text-[#dddddd] flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <img src={icons.check_icon_green} className="h-[16px]" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={icons.check_icon_green} className="h-[16px]" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={icons.check_icon_green} className="h-[16px]" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {skills.map((skill, index) => (
            <div className="">
              <p className="text-base mb-3">{skill.name}</p>
              <div className="w-full h-[5px] bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  transition={{
                    delay: 0.3 * index + 0.2,
                    duration: 0.75,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  className="relative h-full bg-primary rounded-full"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeOut",
                      delay: 0.3 * index + 0.2,
                    }}
                    viewport={{ once: true }}
                    id="tooltip"
                    className="progress-tooltip z-[1] absolute right-[-15px] top-[-35px] py-[2px] px-[6px] rounded-md bg-primary text-sm before:content-[''] before:absolute before:left-0 before:right-0 before:mx-auto before:bottom-[-2px] before:h-[10px] before:w-[10px] before:z-[-1] before:bg-primary before:rotate-45 "
                  >
                    {skill.percentage}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReachTheTop;

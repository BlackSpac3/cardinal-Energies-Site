import { assets, icons } from "../../assets/assets";
import { styles } from "../../utils/styles";

const MisionVision = () => {
  const cardStyles =
    "flex flex-col items-center w-full p-[10%] rounded-3xl shadow-md";
  const cardTitleStyles = "text-2xl font-medium mt-3";
  const cardDescStyles = "text-xs mt-1";
  return (
    <section className="grid grid-cols-2 m-body gap-3 phone:flex phone:flex-col">
      <div>
        <h2 className={styles.homePageSectionTitle}>At Cardinal Energies</h2>
        <p className="mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          molestiae aperiam nam veniam sed quibusdam autem enim maxime nobis
          modi corporis optio corrupti rem dolor, fugit nihil eum possimus
          consequatur.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center phone:flex phone:flex-col">
        <div className={`${cardStyles} bg-[#efefef]`}>
          <img src={icons.vision_icon} className="w-[40px]" />
          <h2 className={`${cardTitleStyles}`}>Vision</h2>
          <p className={cardDescStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            animi, non dolores ad nostrum ratione, eligendi aspernatur impedit
            incidunt corporis odit molestias! Consectetur?
          </p>
        </div>

        <div className={`${cardStyles} bg-primary text-white`}>
          <img src={icons.mission_icon} className="w-[40px]" />
          <h2 className={`${cardTitleStyles}`}>Mission</h2>
          <p className={cardDescStyles}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, magni
            architecto nulla iure dolores debitis provident exercitationem id
            earum modi expedita, distinctio natus.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MisionVision;

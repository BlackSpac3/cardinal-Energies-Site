import { motion } from "framer-motion";
import { styles } from "../../utils/styles";

const Header = () => {
  return (
    <div>
      <div
        id="about-header"
        className="relative flex h-[25vw] tab-s:h-[30vh] phone-s:h-[100vh] mx-hero rounded-3xl   tab-s:mx-0 mb-[30px] bg-header bg-no-repeat bg-cover bg-center  tab-s:rounded-none"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            ease: "easeOut",
            type: "spring",
          }}
          id="header-contents"
          className="absolute flex flex-col items-center place-self-center left-0 right-0 mx-auto tab-s:left-[0vw] tab-s:mx-[7vw] tab-s:bottom-[20vw] phone-s:bottom-[30vw]"
        >
          <h2
            id="header-title"
            className="font-['Montserrat'] font-semibold text-white text-[max(4vw,20px)]/tight tab-s:text-[28px]"
          >
            WHO WE ARE
          </h2>
        </motion.div>
      </div>
      <div className="m-body">
        <div className="inline-block">
          <h2 className={styles.homePageSectionTitle}>About Us</h2>
          <div className="h-[2.5px] mt-1 w-full bg-primary"></div>
        </div>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          cumque fugit commodi velit pariatur, necessitatibus eius vitae officia
          magnam in illum incidunt doloribus, esse deleniti obcaecati! Aliquid
          saepe sint dolor mollitia, optio possimus sequi delectus rerum
          deserunt adipisci blanditiis tempora magnam perspiciatis facilis
          officiis tenetur excepturi ab facere autem molestias! Qui nemo,
          molestiae eaque ducimus molestias obcaecati, soluta eligendi nulla
          porro incidunt sed a, at ipsum odio cum quod repellendus magnam libero
          maxime quae? Impedit quibusdam autem facere, vel qui inventore
          tenetur, ducimus ratione eaque sapiente quam, debitis quo officiis
          quis rem. Consequatur ut ex fuga. Corporis ipsam repellat aut dolore
          inventore. Ipsum explicabo nisi quis voluptatum nemo molestias maiores
          culpa perferendis dignissimos temporibus debitis eligendi, a molestiae
          quos corporis dolores impedit velit vitae incidunt. Quasi quo rerum
          temporibus aut. Nulla repellat provident assumenda id. Repellendus
          possimus minima beatae voluptatum accusantium rem voluptas impedit
          quisquam? Corrupti, non? Inventore, nesciunt corrupti!
        </p>
      </div>
    </div>
  );
};
export default Header;

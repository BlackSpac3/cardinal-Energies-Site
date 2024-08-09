import { motion } from "framer-motion";
import Board from "../components/team_page_components/Board";
import Header from "../components/team_page_components/Header";
import Management from "../components/team_page_components/Management";

const TeamPage = () => {
  return (
    <motion.div
      key={"about-page"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
    >
      <Header />
      <Board />
      <Management />
    </motion.div>
  );
};
export default TeamPage;

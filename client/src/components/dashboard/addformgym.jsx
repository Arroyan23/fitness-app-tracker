import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

// halaman untuk merespon klik akan menambahkan form ke dalam halaman berupa menambahkan data
export const ButtonFormGym = ({ liftedDesc, setGymForm, setRunForm }) => {
  const handleClickLift = () => {
    if (liftedDesc == "gym") {
      setRunForm(false);
      setGymForm(true);
    } else {
      setGymForm(false);
      setRunForm(true);
    }
  };
  return (
    <>
      <motion.div
        className="w-[45rem] h-16 bg-gray-300 rounded-xl mt-8 cursor-pointer hover:bg-gray-700 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={handleClickLift}
      >
        <div className="flex items-center h-full space-x-3">
          <FontAwesomeIcon icon="fa-solid fa-plus" className="ml-3" />
          <h1>Add Your Exercise Today</h1>
        </div>
      </motion.div>
    </>
  );
};

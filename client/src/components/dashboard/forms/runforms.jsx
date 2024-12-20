// form untuk menambahkan data dalam project
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
export const FormRunAdd = ({ liftFormAction }) => {
  const handleClickCancel = () => {
    liftFormAction(false);
  };

  const [runType, setRunType] = useState("");
  const [runDate, setRunDate] = useState("");
  const [runDesc, setRunDesc] = useState("");
  const [runCalories, setRunCalories] = useState("");

  // menambahkan fungsi
  const onClickAddDatabase = async () => {
    try {
      const responses = await axios.post(
        "http://localhost:5000/add-run-data",
        {
          runType,
          runDate,
          runDesc,
          runCalories,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token-gym-tracker"),
          },
        }
      );
      // setelah selesai upload refresh halaman dengan
      alert("Data berhasil di unggah ke dalam database");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(`Something When Error: \n${error}`);
    }
  };

  return (
    <>
      <div className=" w-96 bg-white border-2 rounded-xl border-slate-600 py-3 px-4 absolute top-1/3 left-1/3">
        <h1 className="text-xl font-semibold">
          Add Your Running Excercise Today
        </h1>
        <hr className="mt-2 border-t-2 border-gray-600 w-44" />
        {/* untuk inputan dan memasukkan ke dalam database */}
        <div className="">
          <div className="mt-4">
            <label className="font-semibold">Nama Latihan Lari</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              placeholder="ex: Sunday Morning Run"
              onChange={(e) => setRunType(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Tanggal Latihan</label>
            <br />
            <input
              type="date"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              value={runDate}
              onChange={(e) => setRunDate(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Deskripsi Latihan</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setRunDesc(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Kalori yang Dihabiskan</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setRunCalories(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center space-x-8 mt-6 text-white">
            <motion.button
              className="bg-sky-400 px-7 py-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={onClickAddDatabase}
            >
              Submit
            </motion.button>
            <motion.button
              className="bg-red-500 px-7 py-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={handleClickCancel}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

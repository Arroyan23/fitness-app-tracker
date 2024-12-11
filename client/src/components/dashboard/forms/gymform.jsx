// halaman untuk form gym
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

export const GymFormAdd = ({ liftCancelForm }) => {
  const handleClickCancel = () => {
    liftCancelForm(false);
  };
  // menyimpan inputan ke dalam useState
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");
  const [exerciseDesc, setExerciseDesc] = useState("");
  const [caloriesBurn, setCaloriesBurn] = useState("");

  // fungsi untuk menambahkan ke dalam database
  const onClickSaveGymData = async (e) => {
    e.preventDefault();
    try {
      const responses = await axios.post(
        "http://localhost:5000/add-priv-data-gym",
        { exerciseType, exerciseDate, exerciseDesc, caloriesBurn },
        {
          headers: {
            Authorization: localStorage.getItem("token-gym-tracker"),
          },
        }
      );
      console.log("Berhasil Menambahkan ke dalam database FRONT END");

      alert("Berhasil!");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(`Something when error : ${error}`);
    }
  };
  return (
    <>
      <div className=" w-96 bg-white border-2 rounded-xl border-slate-600 py-3 px-4 absolute top-1/3 left-1/3">
        <h1 className="text-xl font-semibold">Add Your Gym Excercise Today</h1>
        <hr className="mt-2 border-t-2 border-gray-600 w-44" />
        {/* untuk inputan dan memasukkan ke dalam database */}
        <div className="muhammad-sammy">
          <div className="mt-4">
            <label className="font-semibold">Tipe Latihan</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setExerciseType(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Tanggal Latihan</label>
            <br />
            <input
              type="date"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setExerciseDate(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Deskripsi Latihan</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setExerciseDesc(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* untuk tanggal */}
            <label className="font-semibold">Kalori yang Dihabiskan</label>
            <br />
            <input
              type="text"
              className="focus:outline-none border-b-2 border-gray-700 w-full pb-1"
              onChange={(e) => setCaloriesBurn(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center space-x-8 mt-6 text-white">
            <motion.button
              className="bg-sky-400 px-7 py-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={onClickSaveGymData}
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

import { useEffect, useState } from "react";
import { GymCard } from "./gymcard";
import axios from "axios";

// halaman untuk konfigurasi data gym
export const GymData = () => {
  const [detailInformation, setDetailInformation] = useState([]);
  // mengambil data dari gym database menggunakan use Effect
  useEffect(() => {
    const fetchInfoApi = async () => {
      try {
        const responses = await axios.get(
          "http://localhost:5000/get-priv-data",
          {
            headers: {
              Authorization: localStorage.getItem("token-gym-tracker"),
            },
          }
        );

        // masukkan ke dalam data di useState
        setDetailInformation(responses.data);
      } catch (error) {
        console.log(`Something when error : ${error}`);
      }
    };

    fetchInfoApi();
  }, []);
  return (
    <>
      <div className="h-96 w-[45rem] bg-white rounded-lg border-2 mt-10 py-2 px-4 shadow-xl">
        <h1 className="text-xl font-semibold">Gym Data Tracker</h1>
        <hr className="mt-2 w-32 border-t-2 border-gray-700" />
        {/* masukkan ke dalam kartu kartu di dalam kotaknya */}
        <div className="mt-3">
          {detailInformation.map((e, i) => (
            <GymCard
              numberSort={i}
              exerType={e.exerciseType}
              dateExer={e.exerciseDate}
              descExer={e.exerciseDesc}
              burnExer={e.caloriesBurn}
              uniqueId={e._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

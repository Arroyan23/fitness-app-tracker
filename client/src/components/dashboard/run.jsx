import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RunDataComponents } from "./runcard";
import axios from "axios";
import { useEffect, useState } from "react";

// halaman untuk men track data untuk lari
export const RunData = () => {
  // membuat fungsi untuk menampilkan data
  const [runDataTable, setRunDataTable] = useState([]);
  useEffect(() => {
    const fetchDataApi = async () => {
      //untuk mengambil data
      try {
        const responses = await axios.get(
          "http://localhost:5000/get-private-run-data",
          {
            headers: {
              Authorization: localStorage.getItem("token-gym-tracker"),
            },
          }
        );

        //masukkan ke dalam use State
        setRunDataTable(responses.data);
      } catch (error) {
        console.log(`Something when error: ${error}`);
      }
    };
    fetchDataApi();
  }, []);
  return (
    <>
      <div className="bg-white w-[45rem] h-96 rounded-lg border-2 mt-10 py-2 px-4 shadow-xl">
        <div className="flex items-center space-x-3 text-gray-600">
          <FontAwesomeIcon
            icon="fa-solid fa-person-running"
            className="text-xl"
          />
          <h1 className="text-xl font-semibold">Run Data Tracker</h1>
        </div>
        <hr className="border-t-2 border-gray-600 mt-2 w-32" />
        {runDataTable.map((e, i) => {
          return (
            <RunDataComponents
              index={i}
              runType={e.runType}
              runDate={e.runDate}
              runDesc={e.runDesc}
              runCalories={e.runCalories}
              uniqueObjectId={e._id}
            />
          );
        })}
      </div>
    </>
  );
};

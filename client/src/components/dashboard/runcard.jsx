// untuk konfigurasi halaman card bagian lari data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DetailInformation } from "./detailinfo";
export const RunDataComponents = ({
  index,
  runType,
  runDate,
  runDesc,
  runCalories,
  uniqueObjectId,
}) => {
  const [detail, setDetail] = useState(false);
  const handleSetDetail = () => {
    setDetail(true);
  };
  return (
    <>
      <div className="bg-gray-300 rounded-xl px-4 py-2 mt-2">
        {/* untuk susunan card dan detailnya */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">{index + 1}</p>
          <h1 className="flex-1 ml-3 font-semibold">
            {runType} | {runDate}
          </h1>
          <button
            className="bg-gray-600 py-2 px-4 text-white rounded-xl"
            onClick={handleSetDetail}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-info" className="mr-2" />
            Detail
          </button>
        </div>
      </div>
      {/* menambahkan kotak detail yang muncul ketika detail di klik */}
      {detail && (
        <DetailInformation
          runOrGym="Run"
          liftDetailSet={(value) => setDetail(value)}
          exerciseType={runType}
          gymDate={runDate}
          gymDesc={runDesc}
          burningGym={runCalories}
          objectIdUnique={uniqueObjectId}
        />
      )}
    </>
  );
};

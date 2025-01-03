// halaman untuk mengatur keseharian dan data track di dalam gym nya
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DetailInformation } from "./detailinfo";
import { useState } from "react";
export const GymCard = ({
  numberSort,
  exerType,
  dateExer,
  descExer,
  burnExer,
  uniqueId,
}) => {
  const [detailInformation, setDetailInformation] = useState(false);
  const [type, setType] = useState();
  const handleDetail = () => {
    setDetailInformation(true);
  };

  return (
    <>
      <div className="bg-gray-300 rounded-xl px-4 py-2 mt-2">
        {/* untuk susunan card dan detailnya */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">{numberSort + 1}</p>
          <h1 className="flex-1 ml-3 font-semibold">
            {exerType} | {dateExer}
          </h1>
          <button
            className="bg-gray-600 py-2 px-4 text-white rounded-xl"
            onClick={handleDetail}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-info" className="mr-2" />
            Detail
          </button>
        </div>
      </div>
      {/* untuk memunculkan data di gym berupa card yang absolute */}
      {detailInformation && (
        <DetailInformation
          liftDetailSet={(value) => setDetailInformation(value)}
          exerciseType={exerType}
          gymDate={dateExer}
          gymDesc={descExer}
          burningGym={burnExer}
          objectIdUnique={uniqueId}
          runOrGym="Gym"
        />
      )}
    </>
  );
};

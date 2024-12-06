import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RunDataComponents } from "./runcard";

// halaman untuk men track data untuk lari
export const RunData = () => {
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
        <RunDataComponents />
      </div>
    </>
  );
};

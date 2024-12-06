// untuk konfigurasi halaman card bagian lari data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const RunDataComponents = () => {
  return (
    <>
      <div className="bg-gray-300 rounded-xl px-4 py-2 mt-2">
        {/* untuk susunan card dan detailnya */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">1</p>
          <h1 className="flex-1 ml-3 font-semibold">Morning Run | (Tanggal)</h1>
          <button className="bg-gray-600 py-2 px-4 text-white rounded-xl">
            <FontAwesomeIcon icon="fa-solid fa-circle-info" className="mr-2" />
            Detail
          </button>
        </div>
      </div>
    </>
  );
};

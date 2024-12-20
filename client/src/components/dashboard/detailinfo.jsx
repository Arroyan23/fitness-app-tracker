// halaman untuk menginformasikan halaman detail dari inputnya
import axios from "axios";
export const DetailInformation = ({
  liftDetailSet,
  exerciseType,
  gymDate,
  gymDesc,
  burningGym,
  objectIdUnique,
}) => {
  const handleCloseDetail = () => {
    liftDetailSet(false);
  };

  // menambahkan fungsi hapus
  const onClickDeleteOnBackEnd = async () => {
    try {
      const responses = await axios.delete(
        `http://localhost:5000/delete-id/${objectIdUnique}`
      );
      console.log("Berhasil menghapus di dalam front end");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(`Gagal menghapus data dari front end: \n${error}`);
    }
  };
  return (
    <>
      <div className="w-96 h-96 bg-white rounded-lg border-2 border-gray-600 absolute top-20 left-1/3">
        {/* bisa dipakai untuk informasi gym bisa untuk informasi yang running */}
        <div className="h-full w-full px-4 py-3 relative">
          <h1 className="text-xl font-semibold">
            Informasi Gym (Masukkan Sesuai Dengan kategorinya)
          </h1>
          <hr className="border-t-2 border-gray-600 mt-2 w-48" />
          {/* masukkan data data dari database yang ada di gym di ambil detailnya */}
          <div className="mt-4 font-semibold">
            <p>
              1. Tipe Latihan: <br /> {exerciseType}
            </p>
            <p>
              2. Tanggal Latihan: <br /> {gymDate}
            </p>
            <p>
              3. Deskripsi Latihan: <br /> {gymDesc}
            </p>
            <p>
              4. Calories Burn: <br /> {burningGym}
            </p>
          </div>
          {/* menambah fungsi untuk men delete data dari yang diberikan */}
          <div className="flex mt-5 space-x-4">
            <button
              className="bg-red-500  bottom-12 w-full py-2 font-semibold text-white rounded-lg"
              onClick={onClickDeleteOnBackEnd}
            >
              Delete
            </button>
            <button
              className="bg-sky-400 w-full py-2 font-semibold text-white rounded-lg"
              onClick={handleCloseDetail}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

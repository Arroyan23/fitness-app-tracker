// halaman untuk menginformasikan halaman detail dari inputnya
export const DetailInformation = ({ liftDetailSet }) => {
  const handleCloseDetail = () => {
    liftDetailSet(false);
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
            <p>1. Tipe Latihan: </p>
            <p>2. Tanggal Latihan: </p>
            <p>3. Deskripsi Latihan: </p>
            <p>4. Calories Burn: </p>
          </div>
          <button
            className="bg-sky-400 absolute bottom-5 w-full py-2 font-semibold text-white
            left-0"
            onClick={handleCloseDetail}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

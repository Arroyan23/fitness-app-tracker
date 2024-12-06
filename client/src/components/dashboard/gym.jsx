import { GymCard } from "./gymcard";

// halaman untuk konfigurasi data gym
export const GymData = () => {
  return (
    <>
      <div className="h-96 w-[45rem] bg-white rounded-lg border-2 mt-10 py-2 px-4 shadow-xl">
        <h1 className="text-xl font-semibold">Gym Data Tracker</h1>
        <hr className="mt-2 w-32 border-t-2 border-gray-700" />
        {/* masukkan ke dalam kartu kartu di dalam kotaknya */}
        <div className="mt-3">
          <GymCard />
        </div>
      </div>
    </>
  );
};

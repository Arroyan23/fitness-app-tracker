import { useState } from "react";
import { ButtonFormGym } from "../components/dashboard/addformgym";
import { GymData } from "../components/dashboard/gym";
import { RunData } from "../components/dashboard/run";
import { GymFormAdd } from "../components/dashboard/forms/gymform";
import { FormRunAdd } from "../components/dashboard/forms/runforms";

// halaman untuk konfigurasi halaman dashboard
export const DashboardPage = () => {
  const [gymForm, setGymForm] = useState(false);
  const [runForm, setRunForm] = useState(false);
  return (
    <div className="">
      <h1 className="text-xl font-bold">
        Welcome to the best fitness App tracker in the world
      </h1>
      {/* membuat fungsi untuk tracking data gym hari ini dan seterusnya*/}
      <div className="flex items-center space-x-5">
        <GymData />
        <RunData />
      </div>
      {/* untuk kedua tombol */}
      <div className="flex items-center space-x-5">
        <ButtonFormGym
          liftedDesc="gym"
          setGymForm={(value) => setGymForm(value)}
          setRunForm={(value) => setRunForm(value)}
        />
        {/* ketika di klik akan menghasilkan 2 form berbeda */}
        <ButtonFormGym
          liftedDesc="run"
          setRunForm={(value) => setRunForm(value)}
          setGymForm={(value) => setGymForm(value)}
        />
      </div>
      {/* untuk memunculkan kedua fungsi */}
      {gymForm && <GymFormAdd liftCancelForm={(value) => setGymForm(value)} />}

      {runForm && <FormRunAdd liftFormAction={(value) => setRunForm(value)} />}
    </div>
  );
};

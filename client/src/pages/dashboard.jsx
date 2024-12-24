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
      <div className="2xl:flex 2xl:items-center 2xl:space-x-5">
        <div className="not-flex">
          <GymData />
          <ButtonFormGym
            liftedDesc="gym"
            setGymForm={(value) => setGymForm(value)}
            setRunForm={(value) => setRunForm(value)}
          />
        </div>
        <div className="not-flex">
          <RunData />
          <ButtonFormGym
            liftedDesc="run"
            setRunForm={(value) => setRunForm(value)}
            setGymForm={(value) => setGymForm(value)}
          />
        </div>
      </div>
      {/* untuk memunculkan kedua fungsi */}
      {gymForm && <GymFormAdd liftCancelForm={(value) => setGymForm(value)} />}

      {runForm && <FormRunAdd liftFormAction={(value) => setRunForm(value)} />}
    </div>
  );
};

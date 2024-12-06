import { Outlet } from "react-router-dom";
import { TopNavBar } from "./topnav";
import { SideNavComponents } from "../components/sidenav/menu";

// halaman untuk nav bagian dashboard
export const DashboardNavbar = () => {
  return (
    <>
      <TopNavBar />
      <div className="fixed ml-4 my-4 rounded-xl h-[calc(100vh-48px)] w-80 bg-white shadow-xl border-2 px-5">
        <div className="mt-6">
          <h1 className="text-xl text-center font-bold">Fitness App Tracker</h1>
        </div>
        <div className="mt-10">
          <SideNavComponents />
          <SideNavComponents />
        </div>
      </div>
      <div className="absolute top-20 container mx-auto left-[23rem]">
        <Outlet />
      </div>
    </>
  );
};

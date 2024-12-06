import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// halaman untuk konfigurasi menu di bagian side nav
export const SideNavComponents = () => {
  return (
    <>
      <div className="flex items-center space-x-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-slate-200 cursor-pointer text-lg">
        <FontAwesomeIcon icon="fa-solid fa-home" />
        <h1 className="font-semibold">Dashboard</h1>
      </div>
    </>
  );
};

// halaman untuk top navigasi pada dashboard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserInfoCard } from "../components/topnav/userinfo";
import { useEffect, useState } from "react";
import axios from "axios";

export const TopNavBar = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [usherName, setUsherName] = useState();

  // handle click fitur untuk menampilkan user
  const handleClickUserInfo = () => {
    setUserInfo(!userInfo);
  };

  useEffect(() => {
    const fetchUsernameInfo = async () => {
      try {
        const responses = await axios.get(
          "http://localhost:5000/get-user-username",
          {
            headers: {
              Authorization: localStorage.getItem("token-gym-tracker"),
            },
          }
        );
        // masukkan data username ke dalam situ
        setUsherName(responses.data.username);
      } catch (error) {
        console.log(`Something When Error: ${error}`);
      }
    };
    fetchUsernameInfo();
  });

  return (
    <>
      <div className="container mx-auto bg-transparent h-12 absolute left-[23rem] top-4 flex justify-between items-center ">
        <div>
          <p>
            <span className="text-slate-400">Dashboard</span> / Home
          </p>
          <h1 className="font-bold text-lg">Home</h1>
        </div>
        {/* bagian icon setting dan sebagainya */}
        <div
          className="mr-20 flex items-center space-x-3 cursor-pointer hover:bg-gray-400 hover:text-white py-1 px-3 rounded-lg text-gray-500"
          onClick={handleClickUserInfo}
        >
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <p className="font-semibold">{usherName}</p>
        </div>
        {/* nyalakan jika tombol user di klik */}
        {userInfo && <UserInfoCard ushernameName={usherName} />}
      </div>
    </>
  );
};

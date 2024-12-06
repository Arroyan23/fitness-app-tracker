// component untuk user info spt logout dan sebagainya
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const UserInfoCard = () => {
  return (
    <>
      <div className="absolute w-36 bg-white top-12 right-20 py-2 text-center rounded-lg">
        <h1>Nama User</h1>
        <div className="flex items-center space-x-2 justify-center hover:bg-gray-400">
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          <h2>Log Out</h2>
        </div>
      </div>
    </>
  );
};

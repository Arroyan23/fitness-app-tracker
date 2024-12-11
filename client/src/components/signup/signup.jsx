import axios from "axios";
import { useState } from "react";

export const SignUpFormComponent = () => {
  // menyimpan data berdasarkan typingan di input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // membuat fungsi untuk berinteraksi dengan back end
  const onClickBackEndCommunication = async (e) => {
    e.preventDefault();
    try {
      const responses = await axios.post(
        "http://localhost:5000/login-debug-console",
        { username, email, password }
      );
      window.location.href = "/";
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return (
    <>
      <div className="p-2 w-[30rem]">
        <h1 className="text-2xl font-semibold mb-4">Create New Account</h1>
        <form action="#" method="POST">
          <div className="mb-4 text-black">
            <label for="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 text-black">
            <label for="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 text-black">
            <label for="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-black">
            <label for="confirmpassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 mt-5 px-4 w-full"
            onClick={onClickBackEndCommunication}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <a href="/" className="hover:underline">
            Login Here
          </a>
        </div>
      </div>
    </>
  );
};

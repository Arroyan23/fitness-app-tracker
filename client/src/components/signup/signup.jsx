export const SignUpFormComponent = () => {
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
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Login Here
          </a>
        </div>
      </div>
    </>
  );
};

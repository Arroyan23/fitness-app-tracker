export const FormLoginComponent = () => {
  return (
    <>
      <div class="p-2 w-[30rem]">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <div class="mb-4 text-black">
            <label for="username" class="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
            />
          </div>
          <div class="mb-4 text-black">
            <label for="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              autocomplete="off"
            />
          </div>
          <div class="mb-4 flex items-cente">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="text-blue-500"
            />
            <label for="remember" class="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div class="mt-6 text-blue-500 text-center">
          <a href="#" class="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </>
  );
};

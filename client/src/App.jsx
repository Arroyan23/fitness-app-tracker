import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-200">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

// halaman untuk konfigurasi router
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signup";
import { DashboardPage } from "../pages/dashboard";
import { DashboardNavbar } from "../layout/dashboardnav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  // buat children untuk dashboard dan parent layout
  {
    path: "/dashboard",
    element: <DashboardNavbar />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

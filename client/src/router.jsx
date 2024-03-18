import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
// importing dynamic
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardAnalytics = lazy(() => import("./pages/DashboardAnalytics"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/analytics",
    element: <DashboardAnalytics />,
  },
]);

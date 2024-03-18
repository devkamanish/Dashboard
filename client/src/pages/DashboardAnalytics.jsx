import React, { useState } from "react";
import Sidebar from "../components/shared/Sidebar";
import { FaBars } from "react-icons/fa";

const DashboardAnalytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative flex">
      <FaBars
        className="absolute right-4 top-4 cursor-pointer text-gray-600 md:hidden"
        onClick={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="mb-8 text-3xl font-bold">Analytics</h1>
      </div>
    </div>
  );
};

export default DashboardAnalytics;

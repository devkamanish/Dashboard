import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Statistics from "../components/charts/Statistics";
import BubbleChart from "../components/charts/BubbleChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import AreaChart from "../components/charts/AreaChart";
import Sidebar from "../components/shared/Sidebar";
import axios from "axios";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/dashboard/get-data",
          {
            withCredentials: true,
          },
        );
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row">
      <FaBars
        className="absolute right-4 top-4 cursor-pointer text-gray-600 md:hidden"
        onClick={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 overflow-y-auto p-6 md:pl-0">
        <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-lg bg-white shadow-md md:col-span-2">
            <div className="p-6">
              <h2 className="mb-4 text-lg font-bold">Statistics Chart</h2>
              <Statistics data={data} />
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-6">
              <h2 className="mb-4 text-lg font-bold">Bubble Chart</h2>
              <BubbleChart data={data} />
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-6">
              <h2 className="mb-4 text-lg font-bold">Area Chart</h2>
              <AreaChart data={data} />
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-6">
              <h2 className="mb-4 text-lg font-bold">Doughnut Chart</h2>
              <DoughnutChart data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

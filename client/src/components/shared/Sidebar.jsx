import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`sticky top-0 h-screen w-64 overflow-y-auto bg-gray-800 px-4 py-6 ${isSidebarOpen ? "block" : "hidden"} md:block`}
    >
      <div className="mb-8 text-lg font-semibold text-gray-100">Menu</div>
      <ul className="text-gray-300">
        <li className="mb-4">
          <Link
            to="/dashboard"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/analytics"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            Analytics
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/crm"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            CRM
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/ecommerce"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            Ecommerce
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/academy"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            Academy
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/logistics"
            className="cursor-pointer transition duration-300 hover:text-white"
          >
            Logistics
          </Link>
        </li>
      </ul>
      <div className="mb-8 mt-8 text-lg font-semibold text-gray-100">
        Filters
      </div>
      {/* Filters */}
      <div className="text-gray-300">
        {/* Year Filter */}
        <div className="mb-4">
          <label className="mb-2 block">End Year</label>
          <input
            type="text"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200"
            placeholder="Enter End Year"
          />
        </div>
        {/* Topics Filter */}
        <div className="mb-4">
          <label className="mb-2 block">Topics</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select Topic</option>
            {/* Add options here */}
          </select>
        </div>
        {/* Sector Filter */}
        <div className="mb-4">
          <label className="mb-2 block">Sector</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select Sector</option>
            {/* Add options here */}
          </select>
        </div>
        {/* Region Filter */}
        <div className="mb-4">
          <label className="mb-2 block">Region</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select Region</option>
            {/* Add options here */}
          </select>
        </div>
        {/* PEST Filter */}
        <div className="mb-4">
          <label className="mb-2 block">PEST</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select PEST</option>
            {/* Add options here */}
          </select>
        </div>
        {/* Source Filter */}
        <div className="mb-4">
          <label className="mb-2 block">Source</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select Source</option>
            {/* Add options here */}
          </select>
        </div>
        {/* SWOT Filter */}
        <div className="mb-4">
          <label className="mb-2 block">SWOT</label>
          <select className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200">
            <option value="">Select SWOT</option>
            {/* Add options here */}
          </select>
        </div>
        {/* Country Filter */}
        <div className="mb-4">
          <label className="mb-2 block">Country</label>
          <input
            type="text"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200"
            placeholder="Enter Country"
          />
        </div>
        {/* City Filter */}
        <div className="mb-4">
          <label className="mb-2 block">City</label>
          <input
            type="text"
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-gray-200"
            placeholder="Enter City"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

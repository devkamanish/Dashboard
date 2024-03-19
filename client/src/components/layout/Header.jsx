import React from "react";
import { FaSearch, FaBell, FaUserCircle, FaColumns } from "react-icons/fa";

const Header = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="mr-4 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <div>
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <FaColumns />
        </div>
        <div className="mr-4">
          <FaBell />
        </div>
        <div>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;



import { Bell, Search } from "lucide-react";
import React from "react";

function DashboardApp() {
  return (
    <div className="center p-4">
      <div className="center w-full">
        <div className="center w-full max-w-[500px] rounded-xl bg-white px-2 shadow-md">
          <Search size={16} />
          <input
            type="text"
            className="flex-1 p-2 outline-none"
            placeholder="Search here"
          />
        </div>
      </div>
      <Bell size={16} className="mx-4 cursor-pointer" />
    </div>
  );
}

export default DashboardApp;

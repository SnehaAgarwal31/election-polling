import { useState } from "react";
import AdminProfileDropdown from "./AdminProfileDropdown";

const AdminTopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Mock admin info
  const admin = {
    name: "Admin User",
    email: "admin@election.gov",
    photo: "https://i.pravatar.cc/40",
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-lg p-2">
            <span className="text-blue-800 font-bold text-lg">A</span>
          </div>
          <h1 className="text-lg font-bold text-white">Admin Panel</h1>
        </div>

        {/* Right side: Welcome + profile */}
        <div className="relative flex items-center space-x-4">
          <div className="hidden sm:block text-white">
            <p className="text-sm text-blue-200">Welcome,</p>
            <p className="font-semibold">{admin.name}</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 cursor-pointer border-2 border-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">
                {admin.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </button>
            {showDropdown && <AdminProfileDropdown admin={admin} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar; 
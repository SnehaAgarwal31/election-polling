import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Mock Voter Info
  const voter = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-white">Election Polling System</h1>
        </div>

        {/* Right side: Welcome + profile */}
        <div className="relative flex items-center space-x-4">
          <div className="hidden sm:block text-white">
            <p className="text-sm text-blue-200">Welcome back,</p>
            <p className="font-semibold">{voter.name.split(" ")[0]}</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 cursor-pointer border-2 border-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">
                {voter.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </button>
            {showDropdown && <ProfileDropdown voter={voter} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

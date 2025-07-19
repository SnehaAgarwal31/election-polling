import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";


const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // 🧑 Mock Voter Info
  const voter = {
    name: "John Doe",
    email: "johndoe@example.com",
    photo: "https://i.pravatar.cc/40",
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg px-6 py-4">
      <div className="flex items-center justify-between">
        {/* 🗳 Logo */}
        <div className="flex items-center space-x-3">
          {/* <div className="bg-white rounded-lg p-2">
            <span className="text-2xl">🗳</span>
          </div> */}
          <h1 className="text-xl font-bold text-white">Election Polling System</h1>
        </div>

        {/* 🙋‍♂️ Right side: Welcome + profile */}
        <div className="relative flex items-center space-x-4">
          <div className="hidden sm:block text-white">
            <p className="text-sm text-blue-200">Welcome back,</p>
            <p className="font-semibold">{voter.name.split(" ")[0]}</p>
          </div>
          <div className="relative">
            <img
              src={voter.photo}
              alt="Profile"
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && <ProfileDropdown voter={voter} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

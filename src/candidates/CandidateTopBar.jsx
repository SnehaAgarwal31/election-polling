import { useState } from "react";
import CandidateProfileDropdown from "./CandidateProfileDropdown";

const CandidateTopBar = ({ candidate }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-lg p-2">
            <span className="text-blue-800 font-bold text-lg">C</span>
          </div>
          <h1 className="text-xl font-bold text-white">Candidate Portal</h1>
        </div>

        {/* Right side: Welcome + profile */}
        <div className="relative flex items-center space-x-4">
          <div className="hidden sm:block text-white">
            <p className="text-sm text-blue-200">Welcome back,</p>
            <p className="font-semibold">{candidate.name.split(" ")[0]}</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 cursor-pointer border-2 border-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">
                {candidate.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </button>
            {showDropdown && <CandidateProfileDropdown candidate={candidate} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateTopBar; 
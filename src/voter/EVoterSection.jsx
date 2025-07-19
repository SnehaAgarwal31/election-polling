import React, { useState } from "react";
import EVoterCard from "./EVoterCard"; // Make sure the path is correct

export default function EVoterSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-full p-1 mt-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            🆔 E-Voter Card
          </h2>
          <div className="text-right">
            <span className="text-green-600 font-semibold text-lg">✅ Verified</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200 flex-grow">
          <p className="text-sm text-gray-600 mb-1">Voter Information:</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Voter ID:</span>
              <span>XXXXXXXX</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>johndoe@example.com</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-semibold w-full"
        >
          View Full E-Voter Card
        </button>
      </div>

      {/* Modal Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <EVoterCard />
          </div>
        </div>
      )}
    </div>
  );
}

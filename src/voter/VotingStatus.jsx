import React from "react";

const VotingStatus = ({ hasVoted }) => {
  return (
    <div className="w-full mt-2 p-1">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            🗳 Voting Status
          </h2>
          
          <div className="bg-white rounded-lg px-4 py-2 border border-blue-200">
            <p
              className={`text-lg font-bold ${
                hasVoted ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {hasVoted ? "✅ Voted" : "⏳ Pending"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingStatus;

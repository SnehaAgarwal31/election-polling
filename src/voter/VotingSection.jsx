// src/voter/VotingSection.jsx
import React, { useState } from "react";

const candidates = [
  {
    id: 1,
    name: "Jenny Wilson",
    email: "jennywilson@example.com",
    party: "Democratic Party",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Ronald Richards",
    email: "ronaldrichards@example.com",
    party: "Green Party",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    email: "eleanorpena@example.com",
    party: "A voice for all citizens",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const VotingSection = () => {
  const [votedCandidateId, setVotedCandidateId] = useState(null);

  const handleVote = (id) => {
    setVotedCandidateId(id);
    // TODO: Add backend call here
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Candidates</h2>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
          >
            <div className="flex items-center space-x-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{candidate.name}</p>
                <p className="text-sm text-gray-600">{candidate.email}</p>
                <p className="text-sm text-gray-500">{candidate.party}</p>
              </div>
            </div>
            <div>
              {votedCandidateId === candidate.id ? (
                <button
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm cursor-not-allowed"
                  disabled
                >
                  Voted
                </button>
              ) : (
                <button
                  onClick={() => handleVote(candidate.id)}
                  className="bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-800 px-4 py-1.5 rounded-md text-sm"
                  disabled={votedCandidateId !== null}
                >
                  {votedCandidateId !== null ? "Disabled" : "Vote"}
                </button>
              )}
            </div>
          </div>        ))}
      </div>
    </div>
  );
};

export default VotingSection;
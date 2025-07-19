import { useState } from "react";

const mockCandidates = [
  {
    id: 1,
    name: "Aryan Sharma",
    email: "aryan@partyA.com",
    party: "Party A",
    tagline: "Development for All",
    manifesto: "Our vision is a digital India with more employment and health reforms.",
    photo: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Meera Sinha",
    email: "meera@partyB.com",
    party: "Party B",
    tagline: "Clean Governance",
    manifesto: "We aim for transparent systems and rural empowerment.",
    photo: "https://via.placeholder.com/80",
  },
];

const CandidateSection = () => {
  const [votedCandidateId, setVotedCandidateId] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = (id) => {
    if (!votedCandidateId) {
      setVotedCandidateId(id);
      alert(`You voted for candidate ID: ${id}`);
    }
  };

  const closeModal = () => setSelectedCandidate(null);

  return (
    <div className="w-full p-1 mt-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            👥 Candidates
          </h2>
          <div className="text-sm text-gray-600">
            Select your preferred candidate
          </div>
        </div>

        <div className="space-y-4">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg transition-all duration-200">
              <div className="flex justify-between items-center">
                {/* Candidate Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">{candidate.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{candidate.party}</p>
                    <p className="text-sm italic text-gray-500">{candidate.tagline}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCandidate(candidate)}
                    className="px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleVote(candidate.id)}
                    disabled={!!votedCandidateId}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      votedCandidateId === candidate.id
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : votedCandidateId
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                    }`}
                  >
                    {votedCandidateId === candidate.id ? "✅ Voted" : "🗳 Vote"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-4 text-blue-800">Candidate Details</h3>
            <img
              src={selectedCandidate.photo}
              alt={selectedCandidate.name}
              className="w-24 h-24 rounded-full border mx-auto mb-4"
            />
            <div className="text-center">
              <p><span className="font-medium">Name:</span> {selectedCandidate.name}</p>
              <p><span className="font-medium">Email:</span> {selectedCandidate.email}</p>
              <p><span className="font-medium">Party:</span> {selectedCandidate.party}</p>
              <p><span className="font-medium">Tagline:</span> {selectedCandidate.tagline}</p>
              <p className="mt-2 text-sm text-gray-700"><span className="font-medium">Manifesto:</span><br /> {selectedCandidate.manifesto}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateSection;

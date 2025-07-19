import { useState } from "react";

const mockCandidates = [
  {
    id: 1,
    name: "Jenny Wilson",
    email: "jennywilson@example.com",
    party: "Democratic Party",
    constituency: "Central District",
    manifesto: "Our vision is a digital India with more employment and health reforms.",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    isApproved: true
  },
  {
    id: 2,
    name: "Ronald Richards",
    email: "ronaldrichards@example.com",
    party: "Green Party",
    constituency: "North District",
    manifesto: "We aim for transparent systems and rural empowerment.",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    isApproved: true
  },
  {
    id: 3,
    name: "Eleanor Pena",
    email: "eleanorpena@example.com",
    party: "Independent",
    constituency: "South District",
    manifesto: "A voice for all citizens with focus on education and healthcare.",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    isApproved: true
  },
  {
    id: 4,
    name: "John Doe",
    email: "johndoe@example.com",
    party: "Progressive Party",
    constituency: "East District",
    manifesto: "Building a sustainable future with economic growth and social justice.",
    photo: "https://i.pravatar.cc/80",
    isApproved: true
  }
];

const CandidatesList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const closeModal = () => setSelectedCandidate(null);

  return (
    <div className="w-full p-1">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            👥 All Candidates
          </h2>
          <div className="text-sm text-gray-600">
            View other approved candidates
          </div>
        </div>

        <div className="space-y-4">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg transition-all duration-200">
              <div className="flex justify-between items-center">
                {/* Candidate Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">{candidate.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-1">{candidate.party}</p>
                  <p className="text-sm text-gray-500">{candidate.constituency}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCandidate(candidate)}
                    className="px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </button>
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
                    ✅ Approved
                  </div>
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
            <div className="text-center space-y-2">
              <p><span className="font-medium">Name:</span> {selectedCandidate.name}</p>
              <p><span className="font-medium">Email:</span> {selectedCandidate.email}</p>
              <p><span className="font-medium">Party:</span> {selectedCandidate.party}</p>
              <p><span className="font-medium">Constituency:</span> {selectedCandidate.constituency}</p>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Manifesto:</span><br /> 
                {selectedCandidate.manifesto}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatesList; 
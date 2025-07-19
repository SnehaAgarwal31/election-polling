import React, { useState } from 'react';

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Aryan Sharma",
      email: "aryan@partyA.com",
      party: "Party A",
      constituency: "Central District",
      tagline: "Development for All",
      manifesto: "Our vision is a digital India with more employment and health reforms.",
      isApproved: true,
      registrationDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Meera Sinha",
      email: "meera@partyB.com",
      party: "Party B",
      constituency: "North District",
      tagline: "Clean Governance",
      manifesto: "We aim for transparent systems and rural empowerment.",
      isApproved: true,
      registrationDate: "2024-01-20"
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@progressive.com",
      party: "Progressive Party",
      constituency: "East District",
      tagline: "Building a sustainable future",
      manifesto: "Building a sustainable future with economic growth and social justice.",
      isApproved: true,
      registrationDate: "2024-01-25"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah@independent.com",
      party: "Independent",
      constituency: "West District",
      tagline: "Voice of the People",
      manifesto: "Representing the true voice of the people with focus on local issues.",
      isApproved: false,
      registrationDate: "2024-02-01"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    party: "",
    constituency: "",
    tagline: "",
    manifesto: ""
  });

  const handleApprove = (id) => {
    setCandidates(prev => 
      prev.map(candidate => 
        candidate.id === id 
          ? { ...candidate, isApproved: true }
          : candidate
      )
    );
  };

  const handleRemove = (id) => {
    setCandidates(prev => prev.filter(candidate => candidate.id !== id));
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    const candidate = {
      ...newCandidate,
      id: Date.now(),
      isApproved: false,
      registrationDate: new Date().toISOString().split('T')[0]
    };
    setCandidates(prev => [...prev, candidate]);
    setNewCandidate({
      name: "",
      email: "",
      party: "",
      constituency: "",
      tagline: "",
      manifesto: ""
    });
    setShowAddForm(false);
  };

  const handleInputChange = (field, value) => {
    setNewCandidate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Candidates Management</h1>
            <p className="text-blue-700">Add, remove, and approve candidates</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-semibold"
          >
            + Add Candidate
          </button>
        </div>
      </div>

      {/* Candidates List */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">All Candidates</h2>
        
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      candidate.isApproved 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {candidate.isApproved ? 'Approved' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{candidate.email}</p>
                  <p className="text-sm text-blue-600 font-medium mb-1">{candidate.party}</p>
                  <p className="text-sm text-gray-500 mb-2">{candidate.constituency}</p>
                  <p className="text-sm italic text-gray-600">{candidate.tagline}</p>
                  <p className="text-xs text-gray-500 mt-2">Registered: {candidate.registrationDate}</p>
                </div>

                <div className="flex gap-2">
                  {!candidate.isApproved && (
                    <button
                      onClick={() => handleApprove(candidate.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleRemove(candidate.id)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Candidate Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md max-h-[90vh] relative flex flex-col">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold z-10"
            >
              &times;
            </button>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-xl p-3">
              <h2 className="text-lg font-bold">Add New Candidate</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <form onSubmit={handleAddCandidate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={newCandidate.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={newCandidate.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Party *</label>
                  <input
                    type="text"
                    value={newCandidate.party}
                    onChange={(e) => handleInputChange('party', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Constituency *</label>
                  <input
                    type="text"
                    value={newCandidate.constituency}
                    onChange={(e) => handleInputChange('constituency', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={newCandidate.tagline}
                    onChange={(e) => handleInputChange('tagline', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Manifesto</label>
                  <textarea
                    value={newCandidate.manifesto}
                    onChange={(e) => handleInputChange('manifesto', e.target.value)}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Add Candidate
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatesPage; 
import React, { useState } from 'react';

const VotersPage = () => {
  const [voters, setVoters] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 (555) 123-4567",
      constituency: "Central District",
      registrationDate: "2024-01-15",
      isApproved: true,
      hasVoted: false
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+1 (555) 234-5678",
      constituency: "North District",
      registrationDate: "2024-01-20",
      isApproved: true,
      hasVoted: true
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      phone: "+1 (555) 345-6789",
      constituency: "South District",
      registrationDate: "2024-02-01",
      isApproved: false,
      hasVoted: false
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      phone: "+1 (555) 456-7890",
      constituency: "East District",
      registrationDate: "2024-02-05",
      isApproved: false,
      hasVoted: false
    },
    {
      id: 5,
      name: "David Brown",
      email: "davidbrown@example.com",
      phone: "+1 (555) 567-8901",
      constituency: "West District",
      registrationDate: "2024-01-25",
      isApproved: true,
      hasVoted: false
    }
  ]);

  const [filter, setFilter] = useState('all'); // all, approved, pending

  const handleApprove = (id) => {
    setVoters(prev => 
      prev.map(voter => 
        voter.id === id 
          ? { ...voter, isApproved: true }
          : voter
      )
    );
  };

  const handleRemove = (id) => {
    setVoters(prev => prev.filter(voter => voter.id !== id));
  };

  const filteredVoters = voters.filter(voter => {
    if (filter === 'approved') return voter.isApproved;
    if (filter === 'pending') return !voter.isApproved;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Voters Management</h1>
        <p className="text-blue-700">Approve and manage voter registrations</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900">Voter Registrations</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'approved'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === 'pending'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Pending
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredVoters.map((voter) => (
            <div key={voter.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{voter.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      voter.isApproved 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {voter.isApproved ? 'Approved' : 'Pending'}
                    </span>
                    {voter.hasVoted && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Voted
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{voter.email}</p>
                  <p className="text-sm text-gray-600 mb-1">{voter.phone}</p>
                  <p className="text-sm text-blue-600 font-medium mb-1">{voter.constituency}</p>
                  <p className="text-xs text-gray-500">Registered: {voter.registrationDate}</p>
                </div>

                <div className="flex gap-2">
                  {!voter.isApproved && (
                    <button
                      onClick={() => handleApprove(voter.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleRemove(voter.id)}
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
    </div>
  );
};

export default VotersPage; 
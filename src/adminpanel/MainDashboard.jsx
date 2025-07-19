import React, { useState } from 'react';

const MainDashboard = () => {
  const [votingSchedule, setVotingSchedule] = useState({
    startDate: "2025-07-20",
    startTime: "08:00",
    endDate: "2025-07-20",
    endTime: "20:00",
    isActive: true
  });

  const [results] = useState([
    { name: "Aryan Sharma", party: "Party A", votes: 342, percentage: 28.5 },
    { name: "Meera Sinha", party: "Party B", votes: 298, percentage: 24.8 },
    { name: "John Doe", party: "Progressive Party", votes: 267, percentage: 22.3 },
    { name: "Jenny Wilson", party: "Democratic Party", votes: 156, percentage: 13.0 },
    { name: "Ronald Richards", party: "Green Party", votes: 89, percentage: 7.4 },
    { name: "Eleanor Pena", party: "Independent", votes: 48, percentage: 4.0 }
  ]);

  const handleScheduleChange = (field, value) => {
    setVotingSchedule(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleVoting = () => {
    setVotingSchedule(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Main Dashboard</h1>
        <p className="text-blue-700">Manage voting schedule and monitor live results</p>
      </div>

      {/* Voting Schedule Management */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Voting Schedule Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date & Time</label>
            <div className="flex space-x-2">
              <input
                type="date"
                value={votingSchedule.startDate}
                onChange={(e) => handleScheduleChange('startDate', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="time"
                value={votingSchedule.startTime}
                onChange={(e) => handleScheduleChange('startTime', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date & Time</label>
            <div className="flex space-x-2">
              <input
                type="date"
                value={votingSchedule.endDate}
                onChange={(e) => handleScheduleChange('endDate', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="time"
                value={votingSchedule.endTime}
                onChange={(e) => handleScheduleChange('endTime', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">Voting Status:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              votingSchedule.isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {votingSchedule.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
          
          <button
            onClick={toggleVoting}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              votingSchedule.isActive
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {votingSchedule.isActive ? 'Stop Voting' : 'Start Voting'}
          </button>
        </div>
      </div>

      {/* Live Results */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Live Results</h2>
        
        <div className="space-y-4">
          {results.map((candidate, index) => (
            <div key={candidate.name} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.party}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{candidate.votes} votes</p>
                  <p className="text-sm text-gray-600">{candidate.percentage}%</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${candidate.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Total Votes Cast</p>
              <p className="text-2xl font-bold text-blue-900">1,200</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Voter Turnout</p>
              <p className="text-2xl font-bold text-blue-900">96.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard; 
import React, { useState } from 'react';
import AdminTopBar from './AdminTopBar';
import MainDashboard from './MainDashboard';
import CandidatesPage from './CandidatesPage';
import VotersPage from './VotersPage';

function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <MainDashboard />;
      case 'candidates':
        return <CandidatesPage />;
      case 'voters':
        return <VotersPage />;
      default:
        return <MainDashboard />;
    }
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'candidates', name: 'Candidates' },
    { id: 'voters', name: 'Voters' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminTopBar />
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  currentPage === item.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderPage()}
      </div>
    </div>
  );
}

export default AdminDashboard; 
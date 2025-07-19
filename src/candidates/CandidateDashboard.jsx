import React, { useState } from 'react';
import CandidateTopBar from './CandidateTopBar';
import ApprovalStatus from './ApprovalStatus';
import CandidateRegistration from './CandidateRegistration';
import CandidatesList from './CandidatesList';
import VoteTiming from '../voter/VoteTiming';

function CandidateDashboard() {
  const [isNewCandidate, setIsNewCandidate] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  // Mock candidate data - in real app this would come from API
  const currentCandidate = {
    name: "John Doe",
    email: "johndoe@example.com",
    photo: "https://i.pravatar.cc/40",
    isNew: false,
    isApproved: true
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CandidateTopBar candidate={currentCandidate} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8">
          {/* Approval Status and Voting Schedule in same row */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
            <div className="lg:w-1/2">
              <ApprovalStatus isApproved={currentCandidate.isApproved} />
            </div>
            <div className="lg:w-1/2">
              <VoteTiming />
            </div>
          </div>

          {/* New Candidate Registration or Approved Candidate View */}
          {currentCandidate.isNew ? (
            <CandidateRegistration />
          ) : (
            <CandidatesList />
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard; 
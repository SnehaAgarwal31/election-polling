import React from 'react'
import TopBar from './TopBar'
import CandidateSection from './CandidateSection'
import EVoterSection from './EVoterSection'
import VotingStatus from './VotingStatus'
import VoteTiming from './VoteTiming'

function VoterDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
            <div className="lg:w-1/2">
              <EVoterSection />
            </div>
            <div className="lg:w-1/2">
              <VoteTiming />
            </div>
          </div>
          
          <VotingStatus />
          
          <div className="mt-8">
            <CandidateSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoterDashboard
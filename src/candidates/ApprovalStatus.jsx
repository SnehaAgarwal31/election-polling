import React, { useState } from "react";

const ApprovalStatus = ({ isApproved }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Mock candidate details - in real app this would come from API
  const candidateDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    party: "Progressive Party",
    constituency: "East District",
    tagline: "Building a sustainable future with economic growth and social justice",
    manifesto: "Our vision is to create a digital India with more employment opportunities, comprehensive health reforms, and transparent governance. We aim to empower rural communities, improve education infrastructure, and ensure equal opportunities for all citizens.",
    registrationDate: "January 15, 2024",
    approvalDate: "February 1, 2024"
  };

  return (
    <>
      <div className="w-full p-1 mt-2">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6 h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
              🏛️ Candidate Profile
            </h2>
            
            <div className="bg-white rounded-lg px-4 py-2 border border-blue-200">
              <div className="flex items-center space-x-2">
                {isApproved ? (
                  <>
                    <span className="text-green-600 text-xl">✅</span>
                    <span className="text-green-600 font-bold text-lg">Approved</span>
                  </>
                ) : (
                  <>
                    <span className="text-yellow-600 text-xl">⏳</span>
                    <span className="text-yellow-600 font-bold text-lg">Pending</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200 flex-grow">
            <p className="text-sm text-gray-600 mb-1">Registration Details:</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Registration Date:</span>
                <span>{candidateDetails.registrationDate}</span>
              </div>
              {isApproved && (
                <div className="flex justify-between">
                  <span className="font-semibold">Approval Date:</span>
                  <span>{candidateDetails.approvalDate}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-semibold w-full"
          >
            View Full Candidate Profile
          </button>
        </div>
      </div>

      {/* Blue-themed Modal Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-xl w-full max-w-md max-h-[90vh] relative flex flex-col">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 text-xl font-bold z-10"
            >
              &times;
            </button>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-xl p-3">
              <h2 className="text-lg font-bold">Candidate Profile</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span className="font-semibold text-blue-800">Name:</span>
                    <span className="text-gray-700">{candidateDetails.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span className="font-semibold text-blue-800">Email:</span>
                    <span className="text-gray-700">{candidateDetails.email}</span>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span className="font-semibold text-blue-800">Party:</span>
                    <span className="text-gray-700">{candidateDetails.party}</span>
                  </div>
                  
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span className="font-semibold text-blue-800">Registration Date:</span>
                    <span className="text-gray-700">{candidateDetails.registrationDate}</span>
                  </div>
                  {isApproved && (
                    <div className="flex justify-between py-1 border-b border-blue-100">
                      <span className="font-semibold text-blue-800">Approval Date:</span>
                      <span className="text-gray-700">{candidateDetails.approvalDate}</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-blue-200">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">Tagline:</span>
                      <span className="text-gray-700 italic text-xs">{candidateDetails.tagline}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">Manifesto:</span>
                      <span className="text-gray-700 text-xs leading-relaxed">{candidateDetails.manifesto}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApprovalStatus; 
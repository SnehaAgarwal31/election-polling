import React from 'react';

const EVoterCard = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="bg-blue-100 text-gray-800 rounded-xl shadow-md px-8 py-6 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-4">E-Voter ID</h2>

        <div className="space-y-2 text-sm sm:text-base">
          <div>
            <span className="font-semibold">Name: </span>
            <span>John Doe</span>
          </div>
          <div>
            <span className="font-semibold">Voter ID: </span>
            <span>XXXXXXXX</span>
          </div>
          <div>
            <span className="font-semibold">Date of Birth: </span>
            <span>January 15, 1985</span>
          </div>
          
          <div>
            <span className="font-semibold">Email: </span>
            <span>johndoe@example.com</span>
          </div>
        </div>

        <div className="flex flex-col justify-between mt-6 text-sm sm:text-base">
          <div>
            <span className="font-semibold">Issue Date: </span>
            <span>January 1, 2024</span>
          </div>
          <div>
            <span className="font-semibold">Expiry Date: </span>
            <span>December 31, 2030</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVoterCard;
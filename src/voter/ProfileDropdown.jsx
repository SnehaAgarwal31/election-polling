const ProfileDropdown = ({ voter }) => {
  return (
    <div className="absolute top-16 right-0 w-56 bg-white border border-gray-200 shadow-xl rounded-xl p-4 z-10">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={voter.photo}
          alt="User"
          className="w-12 h-12 rounded-full border border-blue-500"
        />
        <div>
          <p className="font-semibold text-gray-800">{voter.name}</p>
          <p className="text-sm text-gray-500">{voter.email}</p>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition font-medium">
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
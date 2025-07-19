const AdminProfileDropdown = ({ admin }) => {
  return (
    <div className="absolute top-16 right-0 w-56 bg-white border border-gray-200 shadow-xl rounded-xl p-4 z-10">
      <div className="mb-3">
        <p className="font-semibold text-gray-800">{admin.name}</p>
        <p className="text-sm text-gray-500">{admin.email}</p>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
        Logout
      </button>
    </div>
  );
};

export default AdminProfileDropdown; 
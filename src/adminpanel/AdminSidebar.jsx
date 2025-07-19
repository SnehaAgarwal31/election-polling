const AdminSidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    {
      id: 'dashboard',
      name: 'Main Dashboard',
      description: 'Schedule voting & view results'
    },
    {
      id: 'candidates',
      name: 'Candidates',
      description: 'Manage candidates'
    },
    {
      id: 'voters',
      name: 'Voters',
      description: 'Approve voters'
    }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-white text-lg font-semibold mb-2">Navigation</h2>
        <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
              currentPage === item.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs opacity-75">{item.description}</p>
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-blue-700 rounded-lg">
        <h3 className="text-white text-sm font-medium mb-2">Quick Stats</h3>
        <div className="space-y-2 text-xs text-blue-200">
          <div className="flex justify-between">
            <span>Total Candidates:</span>
            <span className="font-semibold">8</span>
          </div>
          <div className="flex justify-between">
            <span>Approved Voters:</span>
            <span className="font-semibold">1,247</span>
          </div>
          <div className="flex justify-between">
            <span>Voting Status:</span>
            <span className="font-semibold text-green-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar; 
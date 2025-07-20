import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginModal from "./AdminLoginModal";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("voter");
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
  });
  const [showAdminModal, setShowAdminModal] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Here you would typically make an API call to authenticate/register
    console.log("Form submitted:", { isLogin, userType, formData });
    
    // For demo purposes, navigate to appropriate dashboard
    if (isLogin) {
      if (userType === "voter") {
        navigate("/voter");
      } else {
        navigate("/candidate");
      }
    } else {
      // Registration successful, switch to login
      setIsLogin(true);
      setFormData({ userId: "", password: "", confirmPassword: "", name: "", email: "" });
      alert("Registration successful! Your user ID will be allotted automatically. Please login.");
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({ userId: "", password: "", confirmPassword: "", name: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-blue-200 text-gray-800">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center border-2 border-white">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <h1 className="text-xl font-semibold text-white">Polling System</h1>
            </div>
            
            <button
              onClick={() => setShowAdminModal(true)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200 border border-blue-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Admin Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your voting dashboard</p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Register
              </button>
            </div>

            {/* User Type Selection (for registration) */}
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Register as:
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleUserTypeChange("voter")}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                      userType === "voter"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                     Voter
                  </button>
                  <button
                    onClick={() => handleUserTypeChange("candidate")}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                      userType === "candidate"
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                     Candidate
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </>
              )}

              {isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User ID
                  </label>
                  <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your user ID"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            {/* Info message for registration */}
            {!isLogin && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> Your user ID will be automatically allotted after registration based on your user type.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Admin Login Modal */}
      {showAdminModal && (
        <AdminLoginModal
          onClose={() => setShowAdminModal(false)}
          onLogin={() => {
            setShowAdminModal(false);
            navigate("/admin");
          }}
        />
      )}
    </div>
  );
};

export default LoginPage; 
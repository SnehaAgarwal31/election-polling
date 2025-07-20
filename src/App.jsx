import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import VoterDashboard from "./voter/VoterDashboard";
import CandidateDashboard from "./candidates/CandidateDashboard";
import AdminDashboard from "./adminpanel/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/voter" element={<VoterDashboard />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const VoteTiming = () => {
  const votingStart = new Date("2025-07-20T08:00:00");
  const votingEnd = new Date("2025-07-20T20:00:00");

  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      if (now < votingStart) {
        setStatus("⏳ Voting has not started");
        const diff = votingStart - now;
        setTimeLeft(formatTime(diff));
      } else if (now >= votingStart && now <= votingEnd) {
        setStatus("🟢 Voting is LIVE");
        const diff = votingEnd - now;
        setTimeLeft(formatTime(diff));
      } else {
        setStatus("🔴 Voting Closed");
        setTimeLeft("");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeOnly = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="w-full p-1 mt-2">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-300 rounded-xl shadow-lg p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-blue-900 tracking-wide">
            📅 Voting Schedule
          </h2>
          
          <div className="text-right">
            <p className={`text-lg font-semibold ${
              status.includes("LIVE") ? "text-green-600" : 
              status.includes("not started") ? "text-yellow-600" : "text-red-600"
            }`}>
              {status}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200 flex-grow">
          <p className="text-sm text-gray-600 mb-1">Scheduled Date:</p>
          <p className="text-xl font-bold text-blue-900">
            {formatDate(votingStart)}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {formatTimeOnly(votingStart)} - {formatTimeOnly(votingEnd)}
          </p>
        </div>

        <div className={`rounded-lg p-4 ${
          timeLeft 
            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white" 
            : "bg-gray-100 text-gray-600"
        }`}>
          {timeLeft ? (
            <>
              <p className="text-sm mb-1">⏱ Time Remaining:</p>
              <p className="text-2xl font-mono font-bold">
                {timeLeft}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm mb-1">⏱ Status:</p>
              <p className="text-lg font-semibold">
                {status.includes("Closed") ? "Voting Period Ended" : "Waiting for voting to start"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoteTiming;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("today"); // today, week, month

  // Mock admin data - replace with actual API calls
  const stats = {
    totalUsers: 15234,
    activeUsers: 8456,
    totalQuizzes: 45678,
    totalQuestions: 12890,
    revenueToday: 2450,
    revenueWeek: 15680,
    revenueMonth: 58920,
  };

  const recentActivity = [
    {
      id: 1,
      type: "user_registered",
      user: "John Doe",
      time: "2 minutes ago",
      icon: "👤",
    },
    {
      id: 2,
      type: "quiz_completed",
      user: "Sarah Wilson",
      quiz: "Science Quiz",
      time: "5 minutes ago",
      icon: "✅",
    },
    {
      id: 3,
      type: "purchase",
      user: "Mike Chen",
      item: "Premium Avatar",
      time: "8 minutes ago",
      icon: "💰",
    },
    {
      id: 4,
      type: "report",
      user: "Emma Davis",
      reason: "Inappropriate content",
      time: "12 minutes ago",
      icon: "⚠️",
    },
    {
      id: 5,
      type: "achievement",
      user: "Alex Johnson",
      achievement: "Quiz Master",
      time: "15 minutes ago",
      icon: "🏆",
    },
  ];

  const topCategories = [
    { name: "Science", quizzes: 5234, percentage: 23 },
    { name: "History", quizzes: 4521, percentage: 20 },
    { name: "Sports", quizzes: 4102, percentage: 18 },
    { name: "Entertainment", quizzes: 3890, percentage: 17 },
    { name: "Geography", quizzes: 3456, percentage: 15 },
    { name: "Others", quizzes: 1567, percentage: 7 },
  ];

  const pendingReports = [
    {
      id: 1,
      user: "BadUser123",
      reportedBy: "GoodUser456",
      reason: "Cheating",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: "SpamBot",
      reportedBy: "Player789",
      reason: "Spam",
      time: "25 minutes ago",
    },
    {
      id: 3,
      user: "TrollPlayer",
      reportedBy: "NiceGuy321",
      reason: "Toxic behavior",
      time: "1 hour ago",
    },
  ];

  const systemHealth = {
    serverStatus: "operational", // operational, warning, critical
    apiResponseTime: "45ms",
    databaseStatus: "operational",
    cacheStatus: "operational",
    uptime: "99.98%",
  };

  const getStatusColor = (status) => {
    if (status === "operational") return "text-green-400";
    if (status === "warning") return "text-yellow-400";
    return "text-red-400";
  };

  const getStatusBg = (status) => {
    if (status === "operational") return "bg-green-500/20 border-green-500/30";
    if (status === "warning") return "bg-yellow-500/20 border-yellow-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  return (
    <div className="adminHomePage min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="adminHeader mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-white font-bold text-4xl mb-2">
                🛡️ Admin Dashboard
              </h1>
              <p className="text-white/70">Welcome back, Admin!</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-all"
            >
              ← Back to Site
            </button>
          </div>

          {/* Quick Actions */}
          <div className="quickActions grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => navigate("/admin/analytics")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              📊 Analytics
            </button>
            <button
              onClick={() => navigate("/admin/users")}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              👥 Users
            </button>
            <button
              onClick={() => navigate("/admin/questions")}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              ❓ Questions
            </button>
            <button
              onClick={() => navigate("/admin/settings")}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              ⚙️ Settings
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="statsGrid grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">👥</div>
              <div className="text-green-400 text-sm font-bold">+12.5%</div>
            </div>
            <div className="text-white/70 text-sm mb-1">Total Users</div>
            <div className="text-white font-bold text-3xl">
              {stats.totalUsers.toLocaleString()}
            </div>
            <div className="text-white/50 text-xs mt-2">
              {stats.activeUsers.toLocaleString()} active
            </div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">🎮</div>
              <div className="text-blue-400 text-sm font-bold">+8.3%</div>
            </div>
            <div className="text-white/70 text-sm mb-1">Total Quizzes</div>
            <div className="text-white font-bold text-3xl">
              {stats.totalQuizzes.toLocaleString()}
            </div>
            <div className="text-white/50 text-xs mt-2">Today: 234 new</div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">❓</div>
              <div className="text-purple-400 text-sm font-bold">+5.7%</div>
            </div>
            <div className="text-white/70 text-sm mb-1">Questions</div>
            <div className="text-white font-bold text-3xl">
              {stats.totalQuestions.toLocaleString()}
            </div>
            <div className="text-white/50 text-xs mt-2">56 pending review</div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">💰</div>
              <div className="text-yellow-400 text-sm font-bold">+15.2%</div>
            </div>
            <div className="text-white/70 text-sm mb-1">Revenue (Month)</div>
            <div className="text-white font-bold text-3xl">
              ${(stats.revenueMonth / 1000).toFixed(1)}k
            </div>
            <div className="text-white/50 text-xs mt-2">
              Today: ${stats.revenueToday}
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="systemHealth bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h3 className="text-white font-bold text-xl mb-4">
            🔧 System Health
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div
              className={`healthItem ${getStatusBg(systemHealth.serverStatus)} rounded-xl p-4 border-2`}
            >
              <div className="text-white/70 text-xs mb-1">Server</div>
              <div
                className={`font-bold ${getStatusColor(systemHealth.serverStatus)}`}
              >
                {systemHealth.serverStatus.toUpperCase()}
              </div>
            </div>
            <div
              className={`healthItem ${getStatusBg(systemHealth.databaseStatus)} rounded-xl p-4 border-2`}
            >
              <div className="text-white/70 text-xs mb-1">Database</div>
              <div
                className={`font-bold ${getStatusColor(systemHealth.databaseStatus)}`}
              >
                {systemHealth.databaseStatus.toUpperCase()}
              </div>
            </div>
            <div
              className={`healthItem ${getStatusBg(systemHealth.cacheStatus)} rounded-xl p-4 border-2`}
            >
              <div className="text-white/70 text-xs mb-1">Cache</div>
              <div
                className={`font-bold ${getStatusColor(systemHealth.cacheStatus)}`}
              >
                {systemHealth.cacheStatus.toUpperCase()}
              </div>
            </div>
            <div className="healthItem bg-white/5 rounded-xl p-4 border-2 border-white/10">
              <div className="text-white/70 text-xs mb-1">Response Time</div>
              <div className="font-bold text-white">
                {systemHealth.apiResponseTime}
              </div>
            </div>
            <div className="healthItem bg-white/5 rounded-xl p-4 border-2 border-white/10">
              <div className="text-white/70 text-xs mb-1">Uptime</div>
              <div className="font-bold text-white">{systemHealth.uptime}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Recent Activity */}
          <div className="recentActivity bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              📋 Recent Activity
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="activityItem bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">
                        {activity.user}
                      </div>
                      <div className="text-white/60 text-xs">
                        {activity.quiz && `Completed: ${activity.quiz}`}
                        {activity.item && `Purchased: ${activity.item}`}
                        {activity.reason && `Reported: ${activity.reason}`}
                        {activity.achievement &&
                          `Unlocked: ${activity.achievement}`}
                        {activity.type === "user_registered" &&
                          "Created new account"}
                      </div>
                    </div>
                    <div className="text-white/50 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Categories */}
          <div className="topCategories bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              📊 Top Categories
            </h3>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="categoryItem">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      {category.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white/70 text-sm">
                        {category.quizzes.toLocaleString()}
                      </span>
                      <span className="text-white/50 text-xs">
                        {category.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Reports */}
        <div className="pendingReports bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold text-xl">
              ⚠️ Pending Reports ({pendingReports.length})
            </h3>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              View All →
            </button>
          </div>
          <div className="space-y-3">
            {pendingReports.map((report) => (
              <div
                key={report.id}
                className="reportItem bg-red-500/10 rounded-xl p-4 border border-red-500/30 hover:bg-red-500/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">
                      <span className="text-red-400">{report.user}</span>{" "}
                      reported by {report.reportedBy}
                    </div>
                    <div className="text-white/70 text-sm">
                      Reason: {report.reason} • {report.time}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 font-bold px-4 py-2 rounded-lg border border-green-400/30 transition-all text-sm">
                      Review
                    </button>
                    <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold px-4 py-2 rounded-lg border border-red-400/30 transition-all text-sm">
                      Ban
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;

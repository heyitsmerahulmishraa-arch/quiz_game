import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAnalyticsPage = () => {
  const navigate = useNavigate();
  const [timePeriod, setTimePeriod] = useState("week"); // week, month, year
  const [selectedMetric, setSelectedMetric] = useState("users"); // users, quizzes, revenue

  // Mock analytics data - replace with actual API calls
  const analyticsData = {
    userGrowth: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [120, 150, 180, 165, 200, 220, 195],
    },
    quizCompletion: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [450, 520, 580, 540, 620, 680, 590],
    },
    revenue: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [1200, 1450, 1680, 1520, 1890, 2100, 1750],
    },
  };

  const categoryPerformance = [
    {
      name: "Science",
      quizzes: 5234,
      users: 3421,
      avgScore: 78,
      completion: 89,
    },
    {
      name: "History",
      quizzes: 4521,
      users: 2987,
      avgScore: 72,
      completion: 85,
    },
    {
      name: "Sports",
      quizzes: 4102,
      users: 3102,
      avgScore: 81,
      completion: 92,
    },
    {
      name: "Entertainment",
      quizzes: 3890,
      users: 2756,
      avgScore: 75,
      completion: 87,
    },
    {
      name: "Geography",
      quizzes: 3456,
      users: 2398,
      avgScore: 69,
      completion: 83,
    },
    {
      name: "Technology",
      quizzes: 3102,
      users: 2145,
      avgScore: 84,
      completion: 90,
    },
  ];

  const userDemographics = {
    ageGroups: [
      { range: "13-17", users: 2345, percentage: 15 },
      { range: "18-24", users: 4567, percentage: 30 },
      { range: "25-34", users: 3890, percentage: 26 },
      { range: "35-44", users: 2456, percentage: 16 },
      { range: "45+", users: 1976, percentage: 13 },
    ],
    devices: [
      { type: "Mobile", users: 8234, percentage: 54 },
      { type: "Desktop", users: 5678, percentage: 37 },
      { type: "Tablet", users: 1322, percentage: 9 },
    ],
  };

  const topPerformers = [
    {
      rank: 1,
      name: "QuizMaster99",
      quizzes: 1245,
      score: 125680,
      winRate: 94,
    },
    { rank: 2, name: "BrainGuru", quizzes: 1189, score: 118920, winRate: 91 },
    { rank: 3, name: "SmartPlayer", quizzes: 1067, score: 112450, winRate: 89 },
    { rank: 4, name: "TriviaKing", quizzes: 998, score: 108760, winRate: 88 },
    { rank: 5, name: "QuizGenius", quizzes: 945, score: 105340, winRate: 86 },
  ];

  const engagementMetrics = {
    dailyActiveUsers: 8456,
    avgSessionTime: "23m 45s",
    avgQuizzesPerUser: 3.2,
    retentionRate: 68,
    churnRate: 12,
  };

  const revenueBreakdown = [
    { source: "Premium Subscriptions", amount: 28450, percentage: 48 },
    { source: "In-App Purchases", amount: 16890, percentage: 29 },
    { source: "Advertisements", amount: 9870, percentage: 17 },
    { source: "Sponsored Content", amount: 3710, percentage: 6 },
  ];

  const geographicData = [
    { country: "United States", users: 5678, percentage: 37 },
    { country: "United Kingdom", users: 2345, percentage: 15 },
    { country: "Canada", users: 1890, percentage: 12 },
    { country: "Australia", users: 1456, percentage: 10 },
    { country: "Germany", users: 1234, percentage: 8 },
    { country: "Others", users: 2631, percentage: 18 },
  ];

  const getCurrentData = () => {
    if (selectedMetric === "users") return analyticsData.userGrowth;
    if (selectedMetric === "quizzes") return analyticsData.quizCompletion;
    return analyticsData.revenue;
  };

  const getMaxValue = (data) => Math.max(...data);

  return (
    <div className="adminAnalyticsPage min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="pageHeader mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <button
                onClick={() => navigate("/admin")}
                className="text-white/70 hover:text-white mb-3 flex items-center gap-2 transition-colors"
              >
                <span className="text-xl">←</span>
                <span className="font-semibold">Back to Dashboard</span>
              </button>
              <h1 className="text-white font-bold text-4xl mb-2">
                📊 Analytics
              </h1>
              <p className="text-white/70">
                Detailed insights and performance metrics
              </p>
            </div>

            {/* Time Period Selector */}
            <div className="periodSelector flex gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setTimePeriod("week")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  timePeriod === "week"
                    ? "bg-blue-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimePeriod("month")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  timePeriod === "month"
                    ? "bg-blue-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimePeriod("year")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  timePeriod === "year"
                    ? "bg-blue-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Year
              </button>
            </div>
          </div>
        </div>

        {/* Key Engagement Metrics */}
        <div className="engagementMetrics grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="metricCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-xs mb-1">Daily Active Users</div>
            <div className="text-white font-bold text-2xl">
              {engagementMetrics.dailyActiveUsers.toLocaleString()}
            </div>
            <div className="text-green-400 text-xs mt-1">
              +8.5% from yesterday
            </div>
          </div>
          <div className="metricCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-xs mb-1">Avg Session Time</div>
            <div className="text-white font-bold text-2xl">
              {engagementMetrics.avgSessionTime}
            </div>
            <div className="text-blue-400 text-xs mt-1">
              +2m 15s from last week
            </div>
          </div>
          <div className="metricCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-xs mb-1">Quizzes/User</div>
            <div className="text-white font-bold text-2xl">
              {engagementMetrics.avgQuizzesPerUser}
            </div>
            <div className="text-purple-400 text-xs mt-1">
              +0.3 from last week
            </div>
          </div>
          <div className="metricCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-xs mb-1">Retention Rate</div>
            <div className="text-white font-bold text-2xl">
              {engagementMetrics.retentionRate}%
            </div>
            <div className="text-green-400 text-xs mt-1">
              +3.2% from last month
            </div>
          </div>
          <div className="metricCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-xs mb-1">Churn Rate</div>
            <div className="text-white font-bold text-2xl">
              {engagementMetrics.churnRate}%
            </div>
            <div className="text-red-400 text-xs mt-1">
              -1.5% from last month
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mainChart bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <div className="chartHeader flex justify-between items-center mb-6">
            <h3 className="text-white font-bold text-xl">📈 Trend Analysis</h3>
            <div className="metricSelector flex gap-2 bg-white/5 rounded-xl p-1">
              <button
                onClick={() => setSelectedMetric("users")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedMetric === "users"
                    ? "bg-green-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setSelectedMetric("quizzes")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedMetric === "quizzes"
                    ? "bg-blue-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Quizzes
              </button>
              <button
                onClick={() => setSelectedMetric("revenue")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedMetric === "revenue"
                    ? "bg-yellow-500 text-white"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                Revenue
              </button>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="chart h-64 flex items-end gap-2 mb-4">
            {getCurrentData().data.map((value, index) => {
              const height = (value / getMaxValue(getCurrentData().data)) * 100;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="relative group flex-1 flex items-end w-full">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        selectedMetric === "users"
                          ? "bg-gradient-to-t from-green-500 to-emerald-600"
                          : selectedMetric === "quizzes"
                            ? "bg-gradient-to-t from-blue-500 to-indigo-600"
                            : "bg-gradient-to-t from-yellow-500 to-orange-600"
                      } hover:opacity-80 cursor-pointer`}
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {selectedMetric === "revenue" ? `$${value}` : value}
                      </div>
                    </div>
                  </div>
                  <div className="text-white/70 text-xs">
                    {getCurrentData().labels[index]}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Data Table */}
          <div className="dataTable bg-white/5 rounded-xl p-4 mb-4">
            <h4 className="text-white font-semibold mb-3 text-sm">
              Detailed Data
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/70 font-semibold pb-2">
                      Day
                    </th>
                    {getCurrentData().labels.map((label, index) => (
                      <th
                        key={index}
                        className="text-center text-white/70 font-semibold pb-2 px-2"
                      >
                        {label}
                      </th>
                    ))}
                    <th className="text-right text-white/70 font-semibold pb-2">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-white font-medium py-3">
                      {selectedMetric === "users"
                        ? "New Users"
                        : selectedMetric === "quizzes"
                          ? "Completed"
                          : "Revenue"}
                    </td>
                    {getCurrentData().data.map((value, index) => (
                      <td
                        key={index}
                        className="text-center text-white py-3 px-2"
                      >
                        {selectedMetric === "revenue"
                          ? `$${value}`
                          : value.toLocaleString()}
                      </td>
                    ))}
                    <td className="text-right text-white font-bold py-3">
                      {selectedMetric === "revenue"
                        ? `$${getCurrentData()
                            .data.reduce((a, b) => a + b, 0)
                            .toLocaleString()}`
                        : getCurrentData()
                            .data.reduce((a, b) => a + b, 0)
                            .toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Statistics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="statBox bg-white/5 rounded-xl p-3">
              <div className="text-white/60 text-xs mb-1">Total</div>
              <div className="text-white font-bold text-lg">
                {selectedMetric === "revenue"
                  ? `$${getCurrentData()
                      .data.reduce((a, b) => a + b, 0)
                      .toLocaleString()}`
                  : getCurrentData()
                      .data.reduce((a, b) => a + b, 0)
                      .toLocaleString()}
              </div>
            </div>
            <div className="statBox bg-white/5 rounded-xl p-3">
              <div className="text-white/60 text-xs mb-1">Average</div>
              <div className="text-white font-bold text-lg">
                {selectedMetric === "revenue"
                  ? `$${Math.round(getCurrentData().data.reduce((a, b) => a + b, 0) / getCurrentData().data.length).toLocaleString()}`
                  : Math.round(
                      getCurrentData().data.reduce((a, b) => a + b, 0) /
                        getCurrentData().data.length,
                    ).toLocaleString()}
              </div>
            </div>
            <div className="statBox bg-white/5 rounded-xl p-3">
              <div className="text-white/60 text-xs mb-1">Peak</div>
              <div className="text-white font-bold text-lg">
                {selectedMetric === "revenue"
                  ? `$${Math.max(...getCurrentData().data).toLocaleString()}`
                  : Math.max(...getCurrentData().data).toLocaleString()}
              </div>
            </div>
            <div className="statBox bg-white/5 rounded-xl p-3">
              <div className="text-white/60 text-xs mb-1">Growth</div>
              <div className="text-green-400 font-bold text-lg">
                +
                {Math.round(
                  ((getCurrentData().data[getCurrentData().data.length - 1] -
                    getCurrentData().data[0]) /
                    getCurrentData().data[0]) *
                    100,
                )}
                %
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Category Performance */}
          <div className="categoryPerformance bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              🎯 Category Performance
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {categoryPerformance.map((category, index) => (
                <div
                  key={index}
                  className="categoryCard bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">
                      {category.name}
                    </span>
                    <span className="text-green-400 text-sm font-bold">
                      {category.completion}%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-2">
                    <div>
                      <div className="text-white/50 text-xs">Quizzes</div>
                      <div className="text-white font-semibold text-sm">
                        {category.quizzes.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Users</div>
                      <div className="text-white font-semibold text-sm">
                        {category.users.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Avg Score</div>
                      <div className="text-white font-semibold text-sm">
                        {category.avgScore}%
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-full"
                      style={{ width: `${category.completion}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="topPerformers bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              🏆 Top Performers
            </h3>
            <div className="space-y-3">
              {topPerformers.map((performer) => (
                <div
                  key={performer.rank}
                  className="performerCard bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`text-2xl font-bold ${
                        performer.rank === 1
                          ? "text-yellow-400"
                          : performer.rank === 2
                            ? "text-gray-300"
                            : performer.rank === 3
                              ? "text-orange-400"
                              : "text-white/50"
                      }`}
                    >
                      #{performer.rank}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">
                        {performer.name}
                      </div>
                      <div className="text-white/60 text-xs">
                        {performer.quizzes} quizzes •{" "}
                        {performer.score.toLocaleString()} points
                      </div>
                    </div>
                    <div className="text-green-400 font-bold text-sm">
                      {performer.winRate}% WR
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Breakdown */}
          <div className="revenueBreakdown bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              💰 Revenue Sources
            </h3>
            <div className="space-y-4">
              {revenueBreakdown.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">
                      {source.source}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">
                        ${source.amount.toLocaleString()}
                      </span>
                      <span className="text-white/50 text-xs">
                        {source.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 h-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-semibold">
                  Total Revenue
                </span>
                <span className="text-white font-bold text-2xl">
                  $
                  {revenueBreakdown
                    .reduce((sum, s) => sum + s.amount, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="geographicData bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              🌍 Geographic Distribution
            </h3>
            <div className="space-y-4">
              {geographicData.map((geo, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">
                      {geo.country}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">
                        {geo.users.toLocaleString()}
                      </span>
                      <span className="text-white/50 text-xs">
                        {geo.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full"
                      style={{ width: `${geo.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Age Groups */}
          <div className="ageGroups bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              👥 Age Demographics
            </h3>
            <div className="space-y-4">
              {userDemographics.ageGroups.map((group, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      {group.range} years
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">
                        {group.users.toLocaleString()}
                      </span>
                      <span className="text-white/50 text-sm">
                        {group.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-600 h-full"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Devices */}
          <div className="devices bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              📱 Device Distribution
            </h3>
            <div className="space-y-6">
              {userDemographics.devices.map((device, index) => (
                <div key={index} className="deviceCard">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">
                        {device.type === "Mobile"
                          ? "📱"
                          : device.type === "Desktop"
                            ? "💻"
                            : "📲"}
                      </div>
                      <div>
                        <div className="text-white font-bold">
                          {device.type}
                        </div>
                        <div className="text-white/60 text-sm">
                          {device.users.toLocaleString()} users
                        </div>
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">
                      {device.percentage}%
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-full"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;

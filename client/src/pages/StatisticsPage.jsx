import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StatisticsPage = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("all"); // all, week, month, year

  // Mock statistics data - replace with actual data from your server
  const stats = {
    overview: {
      totalGames: 234,
      gamesWon: 156,
      gamesLost: 78,
      winRate: 66.7,
      totalQuestions: 2340,
      correctAnswers: 1989,
      accuracy: 85,
      totalPoints: 15890,
      currentStreak: 5,
      bestStreak: 12,
      averageTime: 145, // seconds
      rank: 5,
    },
    categoryStats: [
      { name: "Science", games: 45, wins: 30, accuracy: 88, icon: "🔬" },
      { name: "History", games: 38, wins: 24, accuracy: 82, icon: "📚" },
      { name: "Sports", games: 32, wins: 22, accuracy: 79, icon: "⚽" },
      { name: "Geography", games: 28, wins: 20, accuracy: 86, icon: "🗺️" },
      { name: "Entertainment", games: 35, wins: 25, accuracy: 84, icon: "🎬" },
      { name: "Technology", games: 30, wins: 21, accuracy: 87, icon: "💻" },
      { name: "General", games: 26, wins: 14, accuracy: 75, icon: "🌍" },
    ],
    recentGames: [
      {
        id: 1,
        category: "Science",
        score: 90,
        questions: 10,
        correct: 9,
        time: 132,
        result: "won",
        date: "2 hours ago",
      },
      {
        id: 2,
        category: "History",
        score: 80,
        questions: 10,
        correct: 8,
        time: 156,
        result: "won",
        date: "5 hours ago",
      },
      {
        id: 3,
        category: "Sports",
        score: 60,
        questions: 10,
        correct: 6,
        time: 142,
        result: "lost",
        date: "1 day ago",
      },
      {
        id: 4,
        category: "Technology",
        score: 100,
        questions: 10,
        correct: 10,
        time: 128,
        result: "won",
        date: "1 day ago",
      },
      {
        id: 5,
        category: "Geography",
        score: 70,
        questions: 10,
        correct: 7,
        time: 150,
        result: "lost",
        date: "2 days ago",
      },
    ],
    progressData: {
      thisWeek: { games: 12, wins: 8, points: 890 },
      lastWeek: { games: 15, wins: 10, points: 1050 },
      thisMonth: { games: 48, wins: 32, points: 3780 },
      lastMonth: { games: 52, wins: 30, points: 3450 },
    },
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="statisticsPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="statisticsContent max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="backButton bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <div>
                <h1 className="text-white font-bold text-4xl">📊 Statistics</h1>
                <p className="text-white/70 text-sm">
                  Track your performance and progress
                </p>
              </div>
            </div>

            {/* Period Filter */}
            <div className="flex gap-2">
              {["all", "week", "month", "year"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedPeriod === period
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Stats Cards */}
        <div className="mainStatsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="statCard bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30">
            <div className="flex items-center justify-between mb-2">
              <div className="text-4xl">🎮</div>
              <div className="text-blue-400 text-sm font-semibold">TOTAL</div>
            </div>
            <div className="text-white font-bold text-3xl mb-1">
              {stats.overview.totalGames}
            </div>
            <div className="text-white/70 text-sm">Games Played</div>
          </div>

          <div className="statCard bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center justify-between mb-2">
              <div className="text-4xl">🏆</div>
              <div className="text-green-400 text-sm font-semibold">
                WIN RATE
              </div>
            </div>
            <div className="text-white font-bold text-3xl mb-1">
              {stats.overview.winRate}%
            </div>
            <div className="text-white/70 text-sm">
              {stats.overview.gamesWon} Wins / {stats.overview.gamesLost} Losses
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30">
            <div className="flex items-center justify-between mb-2">
              <div className="text-4xl">🎯</div>
              <div className="text-purple-400 text-sm font-semibold">
                ACCURACY
              </div>
            </div>
            <div className="text-white font-bold text-3xl mb-1">
              {stats.overview.accuracy}%
            </div>
            <div className="text-white/70 text-sm">
              {stats.overview.correctAnswers} / {stats.overview.totalQuestions}{" "}
              Correct
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-400/30">
            <div className="flex items-center justify-between mb-2">
              <div className="text-4xl">⚡</div>
              <div className="text-yellow-400 text-sm font-semibold">
                POINTS
              </div>
            </div>
            <div className="text-white font-bold text-3xl mb-1">
              {stats.overview.totalPoints.toLocaleString()}
            </div>
            <div className="text-white/70 text-sm">Total Points Earned</div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="additionalStatsGrid grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🔥</div>
              <div>
                <div className="text-white/70 text-sm">Current Streak</div>
                <div className="text-white font-bold text-2xl">
                  {stats.overview.currentStreak} games
                </div>
                <div className="text-green-400 text-xs">
                  Best: {stats.overview.bestStreak} games
                </div>
              </div>
            </div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="text-5xl">⏱️</div>
              <div>
                <div className="text-white/70 text-sm">Avg. Game Time</div>
                <div className="text-white font-bold text-2xl">
                  {formatTime(stats.overview.averageTime)}
                </div>
                <div className="text-blue-400 text-xs">Minutes per game</div>
              </div>
            </div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🏅</div>
              <div>
                <div className="text-white/70 text-sm">Global Rank</div>
                <div className="text-white font-bold text-2xl">
                  #{stats.overview.rank}
                </div>
                <div className="text-yellow-400 text-xs">Top 1%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div className="categoryPerformanceSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4">
            📚 Category Performance
          </h2>
          <div className="space-y-3">
            {stats.categoryStats.map((category, index) => (
              <div
                key={index}
                className="categoryItem bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <div className="text-white font-bold">
                        {category.name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {category.games} games played
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">
                      {category.accuracy}%
                    </div>
                    <div className="text-green-400 text-sm">
                      {category.wins} wins
                    </div>
                  </div>
                </div>
                <div className="progressBar bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all"
                    style={{ width: `${category.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Comparison */}
        <div className="progressComparisonSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4">
            📈 Progress Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* This Week vs Last Week */}
            <div className="comparisonCard bg-white/5 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span>📅</span> Weekly Comparison
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-sm">This Week</div>
                    <div className="text-white font-bold">
                      {stats.progressData.thisWeek.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">
                      {stats.progressData.thisWeek.wins} wins
                    </div>
                    <div className="text-yellow-400 text-sm">
                      +{stats.progressData.thisWeek.points} pts
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-sm">Last Week</div>
                    <div className="text-white font-bold">
                      {stats.progressData.lastWeek.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 font-bold">
                      {stats.progressData.lastWeek.wins} wins
                    </div>
                    <div className="text-white/50 text-sm">
                      +{stats.progressData.lastWeek.points} pts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* This Month vs Last Month */}
            <div className="comparisonCard bg-white/5 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span>📆</span> Monthly Comparison
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-sm">This Month</div>
                    <div className="text-white font-bold">
                      {stats.progressData.thisMonth.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">
                      {stats.progressData.thisMonth.wins} wins
                    </div>
                    <div className="text-yellow-400 text-sm">
                      +{stats.progressData.thisMonth.points} pts
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-sm">Last Month</div>
                    <div className="text-white font-bold">
                      {stats.progressData.lastMonth.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 font-bold">
                      {stats.progressData.lastMonth.wins} wins
                    </div>
                    <div className="text-white/50 text-sm">
                      +{stats.progressData.lastMonth.points} pts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Games */}
        <div className="recentGamesSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-white font-bold text-2xl mb-4">
            🎮 Recent Games
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white/70 font-semibold py-3 px-4">
                    Category
                  </th>
                  <th className="text-center text-white/70 font-semibold py-3 px-4">
                    Score
                  </th>
                  <th className="text-center text-white/70 font-semibold py-3 px-4">
                    Accuracy
                  </th>
                  <th className="text-center text-white/70 font-semibold py-3 px-4">
                    Time
                  </th>
                  <th className="text-center text-white/70 font-semibold py-3 px-4">
                    Result
                  </th>
                  <th className="text-right text-white/70 font-semibold py-3 px-4">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.recentGames.map((game) => (
                  <tr
                    key={game.id}
                    className="border-b border-white/10 hover:bg-white/5 transition-all"
                  >
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">
                        {game.category}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="text-yellow-400 font-bold text-lg">
                        {game.score}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="text-white">
                        {game.correct}/{game.questions}
                      </div>
                      <div className="text-white/60 text-xs">
                        {Math.round((game.correct / game.questions) * 100)}%
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="text-white">{formatTime(game.time)}</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          game.result === "won"
                            ? "bg-green-500/20 text-green-400 border border-green-400/30"
                            : "bg-red-500/20 text-red-400 border border-red-400/30"
                        }`}
                      >
                        {game.result === "won" ? "Won" : "Lost"}
                      </span>
                    </td>
                    <td className="text-right py-4 px-4">
                      <div className="text-white/60 text-sm">{game.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;

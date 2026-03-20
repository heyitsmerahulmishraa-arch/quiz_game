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
    <div className="statisticsPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-4 md:p-6 pb-24">
      <div className="statisticsContent max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate("/")}
                className="backButton bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-xl border border-white/20 transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
              <div className="min-w-0 flex-1">
                <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl truncate">
                  📊 Statistics
                </h1>
                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">
                  Track your performance and progress
                </p>
              </div>
            </div>

            {/* Period Filter */}
            <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto overflow-x-auto">
              {["all", "week", "month", "year"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
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
        <div className="mainStatsGrid grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <div className="statCard bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-blue-400/30">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <div className="text-2xl sm:text-3xl md:text-4xl">🎮</div>
              <div className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-semibold">
                TOTAL
              </div>
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
              {stats.overview.totalGames}
            </div>
            <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">
              Games Played
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-green-400/30">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <div className="text-2xl sm:text-3xl md:text-4xl">🏆</div>
              <div className="text-green-400 text-[10px] sm:text-xs md:text-sm font-semibold">
                WIN RATE
              </div>
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
              {stats.overview.winRate}%
            </div>
            <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">
              {stats.overview.gamesWon} W / {stats.overview.gamesLost} L
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-purple-400/30">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <div className="text-2xl sm:text-3xl md:text-4xl">🎯</div>
              <div className="text-purple-400 text-[10px] sm:text-xs md:text-sm font-semibold">
                ACCURACY
              </div>
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
              {stats.overview.accuracy}%
            </div>
            <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">
              {stats.overview.correctAnswers} / {stats.overview.totalQuestions}{" "}
              <span className="hidden sm:inline">Correct</span>
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-400/30">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <div className="text-2xl sm:text-3xl md:text-4xl">⚡</div>
              <div className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-semibold">
                POINTS
              </div>
            </div>
            <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
              {stats.overview.totalPoints.toLocaleString()}
            </div>
            <div className="text-white/70 text-[10px] sm:text-xs md:text-sm">
              Total <span className="hidden sm:inline">Points </span>Earned
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="additionalStatsGrid grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <div className="statCard bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl shrink-0">
                🔥
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white/70 text-xs sm:text-sm">
                  Current Streak
                </div>
                <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  {stats.overview.currentStreak} games
                </div>
                <div className="text-green-400 text-[10px] sm:text-xs">
                  Best: {stats.overview.bestStreak} games
                </div>
              </div>
            </div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl shrink-0">
                ⏱️
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white/70 text-xs sm:text-sm">
                  Avg. Game Time
                </div>
                <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  {formatTime(stats.overview.averageTime)}
                </div>
                <div className="text-blue-400 text-[10px] sm:text-xs">
                  Minutes per game
                </div>
              </div>
            </div>
          </div>

          <div className="statCard bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl shrink-0">
                🏅
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white/70 text-xs sm:text-sm">
                  Global Rank
                </div>
                <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  #{stats.overview.rank}
                </div>
                <div className="text-yellow-400 text-[10px] sm:text-xs">
                  Top 1%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div className="categoryPerformanceSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
            📚 Category Performance
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {stats.categoryStats.map((category, index) => (
              <div
                key={index}
                className="categoryItem bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <span className="text-2xl sm:text-3xl shrink-0">
                      {category.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-bold text-sm sm:text-base truncate">
                        {category.name}
                      </div>
                      <div className="text-white/60 text-xs sm:text-sm">
                        {category.games} games
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-white font-bold text-base sm:text-lg">
                      {category.accuracy}%
                    </div>
                    <div className="text-green-400 text-xs sm:text-sm">
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
        <div className="progressComparisonSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
            📈 Progress Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* This Week vs Last Week */}
            <div className="comparisonCard bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                <span>📅</span> Weekly Comparison
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-xs sm:text-sm">
                      This Week
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {stats.progressData.thisWeek.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm sm:text-base">
                      {stats.progressData.thisWeek.wins} wins
                    </div>
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      +{stats.progressData.thisWeek.points} pts
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-xs sm:text-sm">
                      Last Week
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {stats.progressData.lastWeek.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 font-bold text-sm sm:text-base">
                      {stats.progressData.lastWeek.wins} wins
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm">
                      +{stats.progressData.lastWeek.points} pts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* This Month vs Last Month */}
            <div className="comparisonCard bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                <span>📆</span> Monthly Comparison
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-xs sm:text-sm">
                      This Month
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {stats.progressData.thisMonth.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm sm:text-base">
                      {stats.progressData.thisMonth.wins} wins
                    </div>
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      +{stats.progressData.thisMonth.points} pts
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/70 text-xs sm:text-sm">
                      Last Month
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {stats.progressData.lastMonth.games} games
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 font-bold text-sm sm:text-base">
                      {stats.progressData.lastMonth.wins} wins
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm">
                      +{stats.progressData.lastMonth.points} pts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Games */}
        <div className="recentGamesSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
            🎮 Recent Games
          </h2>
          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4">
                    Category
                  </th>
                  <th className="text-center text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4">
                    Score
                  </th>
                  <th className="text-center text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4">
                    Accuracy
                  </th>
                  <th className="text-center text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4 hidden sm:table-cell">
                    Time
                  </th>
                  <th className="text-center text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4">
                    Result
                  </th>
                  <th className="text-right text-white/70 font-semibold py-2 sm:py-3 px-2 sm:px-4 hidden md:table-cell">
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
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-4">
                      <div className="text-white font-semibold truncate max-w-[80px] sm:max-w-none">
                        {game.category}
                      </div>
                    </td>
                    <td className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4">
                      <div className="text-yellow-400 font-bold text-sm sm:text-base md:text-lg">
                        {game.score}
                      </div>
                    </td>
                    <td className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4">
                      <div className="text-white text-xs sm:text-sm">
                        {game.correct}/{game.questions}
                      </div>
                      <div className="text-white/60 text-[10px] sm:text-xs">
                        {Math.round((game.correct / game.questions) * 100)}%
                      </div>
                    </td>
                    <td className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 hidden sm:table-cell">
                      <div className="text-white text-xs sm:text-sm">
                        {formatTime(game.time)}
                      </div>
                    </td>
                    <td className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4">
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                          game.result === "won"
                            ? "bg-green-500/20 text-green-400 border border-green-400/30"
                            : "bg-red-500/20 text-red-400 border border-red-400/30"
                        }`}
                      >
                        {game.result === "won" ? "Won" : "Lost"}
                      </span>
                    </td>
                    <td className="text-right py-2 sm:py-3 md:py-4 px-2 sm:px-4 hidden md:table-cell">
                      <div className="text-white/60 text-xs sm:text-sm">
                        {game.date}
                      </div>
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

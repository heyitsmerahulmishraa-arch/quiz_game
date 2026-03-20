import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("global"); // global, friends, weekly

  // Mock leaderboard data - you'll replace this with actual data from your server
  const leaderboardData = [
    {
      rank: 1,
      name: "Alex Champion",
      level: 42,
      points: 15890,
      wins: 234,
      accuracy: 94,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "Sarah Winner",
      level: 40,
      points: 14750,
      wins: 220,
      accuracy: 92,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 3,
      name: "Mike Pro",
      level: 38,
      points: 13900,
      wins: 198,
      accuracy: 91,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 4,
      name: "Emma Star",
      level: 35,
      points: 12450,
      wins: 185,
      accuracy: 89,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 5,
      name: "John Doe",
      level: 15,
      points: 4890,
      wins: 89,
      accuracy: 85,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: true,
    },
    {
      rank: 6,
      name: "David Player",
      level: 33,
      points: 11200,
      wins: 170,
      accuracy: 88,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 7,
      name: "Lisa Gamer",
      level: 31,
      points: 10800,
      wins: 165,
      accuracy: 87,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 8,
      name: "Tom Smart",
      level: 30,
      points: 10200,
      wins: 152,
      accuracy: 86,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 9,
      name: "Rachel Quick",
      level: 28,
      points: 9800,
      wins: 148,
      accuracy: 84,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
    {
      rank: 10,
      name: "Chris Fast",
      level: 27,
      points: 9400,
      wins: 142,
      accuracy: 83,
      profileImage: "https://via.placeholder.com/60",
      isCurrentUser: false,
    },
  ];

  const getMedalIcon = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-blue-400 to-blue-600";
  };

  return (
    <div className="leaderboardPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="leaderboardContent max-w-[1200px] mx-auto flex flex-col">
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
                <h1 className="text-white font-bold text-4xl">Leaderboard</h1>
                <p className="text-white/70 text-sm">
                  Compete with players worldwide
                </p>
              </div>
            </div>

            <div className="statsCards flex gap-4">
              <div className="statCard bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="text-white/70 text-xs">Your Rank</div>
                <div className="text-white font-bold text-2xl">#5</div>
              </div>
              <div className="statCard bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="text-white/70 text-xs">Total Points</div>
                <div className="text-yellow-400 font-bold text-2xl">4,890</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabsSection mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedTab("global")}
              className={`tab px-6 py-3 rounded-xl font-bold transition-all ${
                selectedTab === "global"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              🌍 Global
            </button>
            <button
              onClick={() => setSelectedTab("friends")}
              className={`tab px-6 py-3 rounded-xl font-bold transition-all ${
                selectedTab === "friends"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              👥 Friends
            </button>
            <button
              onClick={() => setSelectedTab("weekly")}
              className={`tab px-6 py-3 rounded-xl font-bold transition-all ${
                selectedTab === "weekly"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              📅 This Week
            </button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="podiumSection mb-6">
          <div className="grid grid-cols-3 gap-4 max-w-[800px] mx-auto">
            {/* 2nd Place */}
            <div className="podiumCard order-1">
              <div className="bg-gradient-to-br from-gray-300/20 to-gray-500/20 backdrop-blur-md rounded-2xl p-4 border-2 border-gray-400/30 text-center transform hover:scale-105 transition-all">
                <div className="text-4xl mb-2">🥈</div>
                <img
                  src={leaderboardData[1].profileImage}
                  alt={leaderboardData[1].name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-gray-400"
                />
                <div className="text-white font-bold text-lg mb-1">
                  {leaderboardData[1].name}
                </div>
                <div className="text-yellow-400 font-bold text-xl">
                  {leaderboardData[1].points.toLocaleString()}
                </div>
                <div className="text-white/60 text-sm">
                  Level {leaderboardData[1].level}
                </div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="podiumCard order-2">
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-md rounded-2xl p-4 border-2 border-yellow-400/50 text-center transform hover:scale-105 transition-all shadow-2xl">
                <div className="text-5xl mb-2">🥇</div>
                <div className="relative">
                  <img
                    src={leaderboardData[0].profileImage}
                    alt={leaderboardData[0].name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-yellow-400"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    👑 TOP
                  </div>
                </div>
                <div className="text-white font-bold text-xl mb-1">
                  {leaderboardData[0].name}
                </div>
                <div className="text-yellow-400 font-bold text-2xl">
                  {leaderboardData[0].points.toLocaleString()}
                </div>
                <div className="text-white/60 text-sm">
                  Level {leaderboardData[0].level}
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="podiumCard order-3">
              <div className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-4 border-2 border-orange-400/30 text-center transform hover:scale-105 transition-all">
                <div className="text-4xl mb-2">🥉</div>
                <img
                  src={leaderboardData[2].profileImage}
                  alt={leaderboardData[2].name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-orange-400"
                />
                <div className="text-white font-bold text-lg mb-1">
                  {leaderboardData[2].name}
                </div>
                <div className="text-yellow-400 font-bold text-xl">
                  {leaderboardData[2].points.toLocaleString()}
                </div>
                <div className="text-white/60 text-sm">
                  Level {leaderboardData[2].level}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="leaderboardList mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col">
            <div className="tableHeader grid grid-cols-12 gap-4 pb-4 border-b border-white/20 mb-4">
              <div className="col-span-1 text-white/70 text-sm font-semibold">
                Rank
              </div>
              <div className="col-span-4 text-white/70 text-sm font-semibold">
                Player
              </div>
              <div className="col-span-2 text-white/70 text-sm font-semibold text-center">
                Level
              </div>
              <div className="col-span-2 text-white/70 text-sm font-semibold text-center">
                Points
              </div>
              <div className="col-span-2 text-white/70 text-sm font-semibold text-center">
                Wins
              </div>
              <div className="col-span-1 text-white/70 text-sm font-semibold text-center">
                Accuracy
              </div>
            </div>

            <div className="tableBody">
              {leaderboardData.map((player, index) => (
                <div
                  key={index}
                  className={`tableRow grid grid-cols-12 gap-4 items-center p-4 rounded-xl mb-2 transition-all ${
                    player.isCurrentUser
                      ? "bg-gradient-to-r from-green-500/30 to-emerald-600/30 border-2 border-green-400/50 shadow-lg"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {/* Rank */}
                  <div className="col-span-1">
                    <div
                      className={`rankBadge bg-gradient-to-br ${getRankColor(
                        player.rank,
                      )} text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}
                    >
                      {getMedalIcon(player.rank)}
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={player.profileImage}
                      alt={player.name}
                      className="w-12 h-12 rounded-full border-2 border-white/30"
                    />
                    <div>
                      <div className="text-white font-bold text-base flex items-center gap-2">
                        {player.name}
                        {player.isCurrentUser && (
                          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      <div className="text-white/60 text-xs">
                        Rank #{player.rank}
                      </div>
                    </div>
                  </div>

                  {/* Level */}
                  <div className="col-span-2 text-center">
                    <div className="text-white font-bold text-lg">
                      {player.level}
                    </div>
                    <div className="text-white/60 text-xs">Level</div>
                  </div>

                  {/* Points */}
                  <div className="col-span-2 text-center">
                    <div className="text-yellow-400 font-bold text-lg">
                      {player.points.toLocaleString()}
                    </div>
                    <div className="text-white/60 text-xs">Points</div>
                  </div>

                  {/* Wins */}
                  <div className="col-span-2 text-center">
                    <div className="text-green-400 font-bold text-lg">
                      {player.wins}
                    </div>
                    <div className="text-white/60 text-xs">Wins</div>
                  </div>

                  {/* Accuracy */}
                  <div className="col-span-1 text-center">
                    <div className="text-blue-400 font-bold text-lg">
                      {player.accuracy}%
                    </div>
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

export default LeaderboardPage;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChallengeModal from "../components/quiz/ChallengeModal";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [selectedTab, setSelectedTab] = useState("overview"); // overview, statistics, achievements
  const [showChallengeModal, setShowChallengeModal] = useState(false);

  // Mock user data - replace with actual API call based on userId
  const userData = {
    id: userId,
    name: "Alex Morgan",
    username: "QuizMaster99",
    level: 28,
    profileImage: "https://via.placeholder.com/150",
    rankBadge: "🏆",
    rank: "Diamond",
    coins: 15420,
    bio: "Quiz enthusiast | Top 100 player | Love trivia challenges!",
    joinDate: "January 2024",
    status: "online", // online, offline, in-game
    isFriend: true,

    // Stats
    stats: {
      gamesPlayed: 1245,
      gamesWon: 892,
      winRate: 71.6,
      totalPoints: 124580,
      averageScore: 850,
      longestStreak: 15,
      currentStreak: 7,
    },

    // Category Performance
    categoryStats: [
      { name: "Science", gamesPlayed: 250, accuracy: 85, avgScore: 920 },
      { name: "History", gamesPlayed: 200, accuracy: 78, avgScore: 850 },
      { name: "Sports", gamesPlayed: 180, accuracy: 92, avgScore: 980 },
      { name: "Geography", gamesPlayed: 150, accuracy: 74, avgScore: 790 },
      { name: "Entertainment", gamesPlayed: 140, accuracy: 88, avgScore: 910 },
      { name: "General", gamesPlayed: 325, accuracy: 81, avgScore: 870 },
    ],

    // Achievements (Top achievements)
    topAchievements: [
      {
        id: 1,
        name: "Century Club",
        icon: "💯",
        description: "Win 100 games",
        rarity: "epic",
      },
      {
        id: 2,
        name: "Perfect Week",
        icon: "⭐",
        description: "7-day win streak",
        rarity: "legendary",
      },
      {
        id: 3,
        name: "Quiz Master",
        icon: "🎓",
        description: "Reach level 25",
        rarity: "epic",
      },
      {
        id: 4,
        name: "Speed Demon",
        icon: "⚡",
        description: "Answer 10 questions in under 30s",
        rarity: "rare",
      },
    ],

    // Recent Games
    recentGames: [
      {
        id: 1,
        category: "Science",
        score: 950,
        result: "won",
        date: "2 hours ago",
        opponent: "Player123",
      },
      {
        id: 2,
        category: "History",
        score: 820,
        result: "won",
        date: "5 hours ago",
        opponent: "TriviaBoss",
      },
      {
        id: 3,
        category: "Sports",
        score: 1100,
        result: "won",
        date: "1 day ago",
        opponent: "QuizKing",
      },
      {
        id: 4,
        category: "Geography",
        score: 650,
        result: "lost",
        date: "1 day ago",
        opponent: "MapMaster",
      },
      {
        id: 5,
        category: "Entertainment",
        score: 890,
        result: "won",
        date: "2 days ago",
        opponent: "MovieBuff",
      },
    ],

    // Mutual Friends
    mutualFriends: [
      {
        id: 1,
        name: "Sarah J.",
        profileImage: "https://via.placeholder.com/40",
      },
      {
        id: 2,
        name: "Mike C.",
        profileImage: "https://via.placeholder.com/40",
      },
      {
        id: 3,
        name: "Emma W.",
        profileImage: "https://via.placeholder.com/40",
      },
      {
        id: 4,
        name: "David L.",
        profileImage: "https://via.placeholder.com/40",
      },
      {
        id: 5,
        name: "Lisa A.",
        profileImage: "https://via.placeholder.com/40",
      },
    ],
  };

  const handleChallenge = () => {
    setShowChallengeModal(true);
  };

  const handleRemoveFriend = () => {
    if (window.confirm(`Remove ${userData.name} from friends?`)) {
      alert("Friend removed!");
      navigate("/");
    }
  };

  const getRarityColor = (rarity) => {
    const colors = {
      common: "text-gray-400",
      uncommon: "text-green-400",
      rare: "text-blue-400",
      epic: "text-purple-400",
      legendary: "text-yellow-400",
    };
    return colors[rarity] || colors.common;
  };

  return (
    <div className="userProfilePage min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="container max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="backButton text-white/70 hover:text-white mb-6 flex items-center gap-2 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span className="font-semibold">Back</span>
        </button>

        {/* Profile Header Card */}
        <div className="profileHeader bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-6 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={userData.profileImage}
                alt={userData.name}
                className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl"
              />
              <div
                className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white ${
                  userData.status === "online"
                    ? "bg-green-500"
                    : userData.status === "in-game"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                }`}
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-white font-bold text-3xl">
                  {userData.name}
                </h1>
                <span className="text-3xl">{userData.rankBadge}</span>
              </div>
              <div className="text-white/70 text-lg mb-2">
                @{userData.username}
              </div>
              <div className="flex gap-4 justify-center md:justify-start items-center mb-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold px-4 py-1 rounded-full text-sm">
                  Level {userData.level}
                </div>
                <div className="bg-purple-600/50 text-white font-bold px-4 py-1 rounded-full text-sm">
                  {userData.rank}
                </div>
                <div className="text-yellow-400 font-bold">
                  💰 {userData.coins.toLocaleString()}
                </div>
              </div>
              <p className="text-white/80 mb-3 italic">"{userData.bio}"</p>
              <div className="text-white/60 text-sm">
                Member since {userData.joinDate}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button
                onClick={handleChallenge}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                ⚔️ Challenge
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all">
                💬 Message
              </button>
              {userData.isFriend && (
                <button
                  onClick={handleRemoveFriend}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold px-6 py-3 rounded-xl border border-red-400/30 hover:scale-105 transition-all"
                >
                  Remove Friend
                </button>
              )}
            </div>
          </div>

          {/* Mutual Friends */}
          {userData.mutualFriends.length > 0 && (
            <div className="mutualFriends mt-6 pt-6 border-t border-white/20">
              <div className="text-white/70 text-sm mb-3">
                {userData.mutualFriends.length} mutual friends
              </div>
              <div className="flex gap-2 flex-wrap">
                {userData.mutualFriends.map((friend) => (
                  <div key={friend.id} className="group relative">
                    <img
                      src={friend.profileImage}
                      alt={friend.name}
                      className="w-10 h-10 rounded-full border-2 border-blue-400 hover:scale-110 transition-transform cursor-pointer"
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {friend.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="tabsSection flex gap-3 mb-6">
          <button
            onClick={() => setSelectedTab("overview")}
            className={`tab flex-1 py-3 rounded-xl font-bold transition-all ${
              selectedTab === "overview"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setSelectedTab("statistics")}
            className={`tab flex-1 py-3 rounded-xl font-bold transition-all ${
              selectedTab === "statistics"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            📈 Statistics
          </button>
          <button
            onClick={() => setSelectedTab("achievements")}
            className={`tab flex-1 py-3 rounded-xl font-bold transition-all ${
              selectedTab === "achievements"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            🏆 Achievements
          </button>
        </div>

        {/* Overview Tab */}
        {selectedTab === "overview" && (
          <div className="overviewSection space-y-6">
            {/* Quick Stats */}
            <div className="quickStats grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">🎮</div>
                <div className="text-white/70 text-sm mb-1">Games Played</div>
                <div className="text-white font-bold text-2xl">
                  {userData.stats.gamesPlayed}
                </div>
              </div>
              <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-white/70 text-sm mb-1">Win Rate</div>
                <div className="text-white font-bold text-2xl">
                  {userData.stats.winRate}%
                </div>
              </div>
              <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-white/70 text-sm mb-1">Total Points</div>
                <div className="text-white font-bold text-2xl">
                  {(userData.stats.totalPoints / 1000).toFixed(0)}k
                </div>
              </div>
              <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-white/70 text-sm mb-1">Current Streak</div>
                <div className="text-white font-bold text-2xl">
                  {userData.stats.currentStreak}
                </div>
              </div>
            </div>

            {/* Recent Games */}
            <div className="recentGames bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Recent Games
              </h3>
              <div className="space-y-3">
                {userData.recentGames.map((game) => (
                  <div
                    key={game.id}
                    className="gameCard bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                        game.result === "won"
                          ? "bg-green-500/20"
                          : "bg-red-500/20"
                      }`}
                    >
                      {game.result === "won" ? "✓" : "✗"}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">
                        {game.category}
                      </div>
                      <div className="text-white/60 text-sm">
                        vs {game.opponent}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">
                        {game.score}
                      </div>
                      <div className="text-white/50 text-xs">{game.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Statistics Tab */}
        {selectedTab === "statistics" && (
          <div className="statisticsSection space-y-6">
            {/* Detailed Stats */}
            <div className="detailedStats bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Performance Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="stat">
                  <div className="text-white/70 mb-2">Games Won</div>
                  <div className="text-white font-bold text-2xl">
                    {userData.stats.gamesWon}
                  </div>
                </div>
                <div className="stat">
                  <div className="text-white/70 mb-2">Average Score</div>
                  <div className="text-white font-bold text-2xl">
                    {userData.stats.averageScore}
                  </div>
                </div>
                <div className="stat">
                  <div className="text-white/70 mb-2">Longest Streak</div>
                  <div className="text-white font-bold text-2xl">
                    {userData.stats.longestStreak} days
                  </div>
                </div>
                <div className="stat">
                  <div className="text-white/70 mb-2">Total Points</div>
                  <div className="text-white font-bold text-2xl">
                    {userData.stats.totalPoints.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Performance */}
            <div className="categoryPerformance bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Category Performance
              </h3>
              <div className="space-y-4">
                {userData.categoryStats.map((category, index) => (
                  <div
                    key={index}
                    className="categoryCard bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">
                        {category.name}
                      </span>
                      <span className="text-white/70 text-sm">
                        {category.gamesPlayed} games
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <div className="text-white/60 text-xs mb-1">
                          Accuracy
                        </div>
                        <div className="text-white font-bold">
                          {category.accuracy}%
                        </div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">
                          Avg Score
                        </div>
                        <div className="text-white font-bold">
                          {category.avgScore}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full"
                        style={{ width: `${category.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {selectedTab === "achievements" && (
          <div className="achievementsSection">
            <div className="achievements bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Top Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.topAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="achievementCard bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div
                          className={`font-bold mb-1 ${getRarityColor(achievement.rarity)}`}
                        >
                          {achievement.name}
                        </div>
                        <div className="text-white/70 text-sm mb-2">
                          {achievement.description}
                        </div>
                        <div
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{
                            color: getRarityColor(achievement.rarity).replace(
                              "text-",
                              "",
                            ),
                          }}
                        >
                          {achievement.rarity}
                        </div>
                      </div>
                      <div className="text-2xl">✓</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Challenge Modal */}
      {showChallengeModal && (
        <ChallengeModal
          onClose={() => setShowChallengeModal(false)}
          friendName={userData.name}
          friendId={userData.id}
        />
      )}
    </div>
  );
};

export default UserProfilePage;

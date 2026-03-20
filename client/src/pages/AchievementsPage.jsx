import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: "🏆" },
    { id: "games", name: "Games", icon: "🎮" },
    { id: "wins", name: "Wins", icon: "🥇" },
    { id: "accuracy", name: "Accuracy", icon: "🎯" },
    { id: "special", name: "Special", icon: "⭐" },
  ];

  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Play your first quiz game",
      category: "games",
      icon: "🎮",
      progress: 1,
      target: 1,
      unlocked: true,
      reward: 50,
      rarity: "common",
    },
    {
      id: 2,
      name: "Getting Started",
      description: "Play 10 quiz games",
      category: "games",
      icon: "🎲",
      progress: 10,
      target: 10,
      unlocked: true,
      reward: 100,
      rarity: "common",
    },
    {
      id: 3,
      name: "Dedicated Player",
      description: "Play 50 quiz games",
      category: "games",
      icon: "🎯",
      progress: 32,
      target: 50,
      unlocked: false,
      reward: 250,
      rarity: "uncommon",
    },
    {
      id: 4,
      name: "Quiz Master",
      description: "Play 100 quiz games",
      category: "games",
      icon: "🏅",
      progress: 32,
      target: 100,
      unlocked: false,
      reward: 500,
      rarity: "rare",
    },
    {
      id: 5,
      name: "First Victory",
      description: "Win your first game",
      category: "wins",
      icon: "🏆",
      progress: 1,
      target: 1,
      unlocked: true,
      reward: 75,
      rarity: "common",
    },
    {
      id: 6,
      name: "Winner",
      description: "Win 25 games",
      category: "wins",
      icon: "🥇",
      progress: 18,
      target: 25,
      unlocked: false,
      reward: 200,
      rarity: "uncommon",
    },
    {
      id: 7,
      name: "Champion",
      description: "Win 100 games",
      category: "wins",
      icon: "👑",
      progress: 18,
      target: 100,
      unlocked: false,
      reward: 750,
      rarity: "epic",
    },
    {
      id: 8,
      name: "Legend",
      description: "Win 500 games",
      category: "wins",
      icon: "⚡",
      progress: 18,
      target: 500,
      unlocked: false,
      reward: 2000,
      rarity: "legendary",
    },
    {
      id: 9,
      name: "Perfectionist",
      description: "Get 100% accuracy in a game",
      category: "accuracy",
      icon: "💯",
      progress: 1,
      target: 1,
      unlocked: true,
      reward: 150,
      rarity: "uncommon",
    },
    {
      id: 10,
      name: "Sharp Mind",
      description: "Get 5 perfect games",
      category: "accuracy",
      icon: "🧠",
      progress: 2,
      target: 5,
      unlocked: false,
      reward: 300,
      rarity: "rare",
    },
    {
      id: 11,
      name: "Genius",
      description: "Get 20 perfect games",
      category: "accuracy",
      icon: "✨",
      progress: 2,
      target: 20,
      unlocked: false,
      reward: 1000,
      rarity: "epic",
    },
    {
      id: 12,
      name: "Speed Demon",
      description: "Complete a game in under 2 minutes",
      category: "special",
      icon: "⚡",
      progress: 0,
      target: 1,
      unlocked: false,
      reward: 200,
      rarity: "rare",
    },
    {
      id: 13,
      name: "Hot Streak",
      description: "Win 10 games in a row",
      category: "special",
      icon: "🔥",
      progress: 3,
      target: 10,
      unlocked: false,
      reward: 500,
      rarity: "epic",
    },
    {
      id: 14,
      name: "Comeback King",
      description: "Win after being behind by 3 questions",
      category: "special",
      icon: "🦸",
      progress: 0,
      target: 1,
      unlocked: false,
      reward: 300,
      rarity: "rare",
    },
    {
      id: 15,
      name: "Jack of All Trades",
      description: "Win a game in every category",
      category: "special",
      icon: "🌟",
      progress: 5,
      target: 8,
      unlocked: false,
      reward: 400,
      rarity: "epic",
    },
    {
      id: 16,
      name: "Social Butterfly",
      description: "Add 10 friends",
      category: "special",
      icon: "👥",
      progress: 5,
      target: 10,
      unlocked: false,
      reward: 150,
      rarity: "uncommon",
    },
    {
      id: 17,
      name: "Top 10",
      description: "Reach top 10 in leaderboard",
      category: "special",
      icon: "🏅",
      progress: 1,
      target: 1,
      unlocked: true,
      reward: 800,
      rarity: "epic",
    },
    {
      id: 18,
      name: "Ultimate Champion",
      description: "Reach #1 in global leaderboard",
      category: "special",
      icon: "💎",
      progress: 0,
      target: 1,
      unlocked: false,
      reward: 5000,
      rarity: "legendary",
    },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "from-gray-500 to-gray-700";
      case "uncommon":
        return "from-green-500 to-emerald-600";
      case "rare":
        return "from-blue-500 to-indigo-600";
      case "epic":
        return "from-purple-500 to-pink-600";
      case "legendary":
        return "from-yellow-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case "common":
        return "border-gray-400/50";
      case "uncommon":
        return "border-green-400/50";
      case "rare":
        return "border-blue-400/50";
      case "epic":
        return "border-purple-400/50";
      case "legendary":
        return "border-yellow-400/50";
      default:
        return "border-gray-400/50";
    }
  };

  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const totalRewardsEarned = achievements
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + a.reward, 0);

  return (
    <div className="achievementsPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="achievementsContent max-w-[1400px] mx-auto">
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
                <h1 className="text-white font-bold text-4xl">
                  🏆 Achievements
                </h1>
                <p className="text-white/70 text-sm">
                  Unlock badges and earn rewards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="statsSection grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="statCard bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-400/30">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🏆</div>
              <div>
                <div className="text-white/70 text-sm">Unlocked</div>
                <div className="text-white font-bold text-3xl">
                  {unlockedCount}/{totalCount}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="progressBar bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all"
                  style={{
                    width: `${(unlockedCount / totalCount) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💰</div>
              <div>
                <div className="text-white/70 text-sm">Rewards Earned</div>
                <div className="text-yellow-400 font-bold text-3xl">
                  {totalRewardsEarned}
                </div>
              </div>
            </div>
          </div>

          <div className="statCard bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📊</div>
              <div>
                <div className="text-white/70 text-sm">Completion</div>
                <div className="text-white font-bold text-3xl">
                  {Math.round((unlockedCount / totalCount) * 100)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="categoriesSection mb-6">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-tab px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievementsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievementCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 transition-all ${
                achievement.unlocked
                  ? `${getRarityBorder(achievement.rarity)} hover:scale-105 transform`
                  : "border-white/20 grayscale opacity-60"
              }`}
            >
              {/* Rarity Badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`rarityBadge bg-gradient-to-r ${getRarityColor(
                    achievement.rarity,
                  )} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}
                >
                  {achievement.rarity}
                </div>
                {achievement.unlocked && (
                  <div className="unlockedBadge bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlocked
                  </div>
                )}
              </div>

              {/* Icon */}
              <div
                className={`achievementIcon text-6xl mb-4 text-center ${
                  !achievement.unlocked && "filter grayscale"
                }`}
              >
                {achievement.icon}
              </div>

              {/* Info */}
              <div className="achievementInfo text-center mb-4">
                <h3 className="text-white font-bold text-xl mb-2">
                  {achievement.name}
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  {achievement.description}
                </p>
              </div>

              {/* Progress */}
              {!achievement.unlocked && (
                <div className="progressSection mb-4">
                  <div className="flex justify-between text-sm text-white/80 mb-2">
                    <span>Progress</span>
                    <span className="font-bold">
                      {achievement.progress}/{achievement.target}
                    </span>
                  </div>
                  <div className="progressBar bg-white/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(achievement.progress / achievement.target) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Reward */}
              <div className="rewardSection">
                <div className="reward flex items-center justify-center gap-2 bg-yellow-500/20 px-4 py-3 rounded-lg">
                  <span className="text-2xl">💰</span>
                  <span className="text-yellow-400 font-bold text-lg">
                    {achievement.reward}
                  </span>
                  <span className="text-white/70 text-sm">coins</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rarity Legend */}
        <div className="rarityLegendSection mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-white font-bold text-xl mb-4">
            🌟 Rarity Levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rarityItem">
              <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold py-2 px-4 rounded-lg text-center mb-2">
                Common
              </div>
              <p className="text-white/70 text-xs text-center">
                Easy to unlock
              </p>
            </div>
            <div className="rarityItem">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-2 px-4 rounded-lg text-center mb-2">
                Uncommon
              </div>
              <p className="text-white/70 text-xs text-center">
                Requires effort
              </p>
            </div>
            <div className="rarityItem">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg text-center mb-2">
                Rare
              </div>
              <p className="text-white/70 text-xs text-center">Challenging</p>
            </div>
            <div className="rarityItem">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-2 px-4 rounded-lg text-center mb-2">
                Epic
              </div>
              <p className="text-white/70 text-xs text-center">
                Very difficult
              </p>
            </div>
            <div className="rarityItem">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-2 px-4 rounded-lg text-center mb-2">
                Legendary
              </div>
              <p className="text-white/70 text-xs text-center">Ultimate goal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;

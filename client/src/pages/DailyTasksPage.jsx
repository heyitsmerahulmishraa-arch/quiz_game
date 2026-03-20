import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DailyTasksPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Play 3 Games",
      description: "Complete 3 quiz games today",
      progress: 2,
      target: 3,
      reward: 150,
      icon: "🎮",
      completed: false,
      category: "daily",
    },
    {
      id: 2,
      title: "Win 2 Games",
      description: "Win at least 2 games today",
      progress: 1,
      target: 2,
      reward: 200,
      icon: "🏆",
      completed: false,
      category: "daily",
    },
    {
      id: 3,
      title: "Answer 20 Questions",
      description: "Answer 20 questions correctly",
      progress: 20,
      target: 20,
      reward: 100,
      icon: "✅",
      completed: true,
      category: "daily",
    },
    {
      id: 4,
      title: "5 Win Streak",
      description: "Win 5 games in a row",
      progress: 3,
      target: 5,
      reward: 300,
      icon: "🔥",
      completed: false,
      category: "daily",
    },
    {
      id: 5,
      title: "90% Accuracy",
      description: "Maintain 90% accuracy in any game",
      progress: 85,
      target: 90,
      reward: 250,
      icon: "🎯",
      completed: false,
      category: "daily",
    },
    {
      id: 6,
      title: "Challenge a Friend",
      description: "Play against one of your friends",
      progress: 0,
      target: 1,
      reward: 100,
      icon: "👥",
      completed: false,
      category: "daily",
    },
  ]);

  const [weeklyTasks, setWeeklyTasks] = useState([
    {
      id: 7,
      title: "Play 20 Games",
      description: "Complete 20 games this week",
      progress: 12,
      target: 20,
      reward: 500,
      icon: "🎲",
      completed: false,
      category: "weekly",
    },
    {
      id: 8,
      title: "Reach Level 20",
      description: "Level up to level 20",
      progress: 15,
      target: 20,
      reward: 1000,
      icon: "⭐",
      completed: false,
      category: "weekly",
    },
    {
      id: 9,
      title: "Top 10 Leaderboard",
      description: "Reach top 10 in global leaderboard",
      progress: 0,
      target: 1,
      reward: 800,
      icon: "🥇",
      completed: false,
      category: "weekly",
    },
    {
      id: 10,
      title: "Win in All Categories",
      description: "Win at least one game in each category",
      progress: 5,
      target: 8,
      reward: 600,
      icon: "🌟",
      completed: false,
      category: "weekly",
    },
  ]);

  const handleClaimReward = (taskId, category) => {
    if (category === "daily") {
      setTasks(
        tasks.map((task) =>
          task.id === taskId && task.completed
            ? { ...task, claimed: true }
            : task,
        ),
      );
    } else {
      setWeeklyTasks(
        weeklyTasks.map((task) =>
          task.id === taskId && task.completed
            ? { ...task, claimed: true }
            : task,
        ),
      );
    }
    alert("Reward claimed! 🎉");
  };

  const calculateProgress = (progress, target) => {
    return Math.min((progress / target) * 100, 100);
  };

  const completedDailyTasks = tasks.filter((task) => task.completed).length;
  const totalDailyTasks = tasks.length;
  const completedWeeklyTasks = weeklyTasks.filter(
    (task) => task.completed,
  ).length;
  const totalWeeklyTasks = weeklyTasks.length;

  const TaskCard = ({ task, onClaim }) => (
    <div
      className={`taskCard bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border transition-all ${
        task.completed
          ? "border-green-400/50 bg-green-500/10"
          : "border-white/20 hover:border-white/40"
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div
          className={`taskIcon text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3 md:p-4 rounded-xl ${
            task.completed ? "bg-green-500/20" : "bg-white/10"
          }`}
        >
          {task.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
            <div className="flex-1">
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1">
                {task.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                {task.description}
              </p>
            </div>
            {task.completed && (
              <div className="completedBadge bg-green-500 text-white px-2 py-1 sm:px-3 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Complete
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="progressSection mb-3 sm:mb-4">
            <div className="flex justify-between text-xs sm:text-sm text-white/80 mb-2">
              <span>Progress</span>
              <span className="font-bold">
                {task.progress}/{task.target}
              </span>
            </div>
            <div className="progressBar bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  task.completed
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-blue-400 to-purple-500"
                }`}
                style={{
                  width: `${calculateProgress(task.progress, task.target)}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Reward */}
          <div className="rewardSection flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div className="reward flex items-center gap-1 sm:gap-2 bg-yellow-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
              <span className="text-lg sm:text-xl md:text-2xl">💰</span>
              <span className="text-yellow-400 font-bold text-base sm:text-lg">
                {task.reward}
              </span>
              <span className="text-white/70 text-xs sm:text-sm">coins</span>
            </div>

            {task.completed && !task.claimed && (
              <button
                onClick={() => onClaim(task.id, task.category)}
                className="claimButton bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm sm:text-base font-bold py-2 px-4 sm:px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Claim Reward
              </button>
            )}
            {task.claimed && (
              <div className="text-green-400 text-sm sm:text-base font-semibold">
                Claimed ✓
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dailyTasksPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-4 md:p-6 pb-24">
      <div className="tasksContent max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={() => navigate("/")}
                className="backButton bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-xl border border-white/20 transition-all"
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
              <div>
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                  📅 Daily Tasks
                </h1>
                <p className="text-white/70 text-xs sm:text-sm">
                  Complete tasks to earn bonus rewards
                </p>
              </div>
            </div>

            {/* Timer */}
            <div className="timerCard bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-4 border border-white/20">
              <div className="text-white/70 text-[10px] sm:text-xs mb-1">
                Resets in
              </div>
              <div className="text-white font-bold text-xl sm:text-2xl">
                8h 32m
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summarySection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="summaryCard bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-400/30">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl">✅</div>
              <div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Daily Progress
                </div>
                <div className="text-white font-bold text-xl sm:text-2xl">
                  {completedDailyTasks}/{totalDailyTasks}
                </div>
              </div>
            </div>
          </div>

          <div className="summaryCard bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-400/30">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl">📊</div>
              <div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Weekly Progress
                </div>
                <div className="text-white font-bold text-xl sm:text-2xl">
                  {completedWeeklyTasks}/{totalWeeklyTasks}
                </div>
              </div>
            </div>
          </div>

          <div className="summaryCard bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-yellow-400/30 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl">🎁</div>
              <div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Total Rewards
                </div>
                <div className="text-yellow-400 font-bold text-xl sm:text-2xl">
                  1,400
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tasks Section */}
        <div className="dailyTasksSection mb-6 sm:mb-8">
          <div className="sectionHeader flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-1 sm:gap-0">
            <h2 className="text-white font-bold text-xl sm:text-2xl">
              🌞 Daily Tasks
            </h2>
            <div className="text-white/70 text-xs sm:text-sm">
              Complete before reset
            </div>
          </div>
          <div className="tasksGrid grid gap-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onClaim={handleClaimReward} />
            ))}
          </div>
        </div>

        {/* Weekly Tasks Section */}
        <div className="weeklyTasksSection mb-4 sm:mb-6">
          <div className="sectionHeader flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-1 sm:gap-0">
            <h2 className="text-white font-bold text-xl sm:text-2xl">
              📅 Weekly Tasks
            </h2>
            <div className="text-white/70 text-xs sm:text-sm">
              Resets every Monday
            </div>
          </div>
          <div className="tasksGrid grid gap-4">
            {weeklyTasks.map((task) => (
              <TaskCard key={task.id} task={task} onClaim={handleClaimReward} />
            ))}
          </div>
        </div>

        {/* Bonus Section */}
        <div className="bonusSection bg-gradient-to-r from-pink-500/20 to-rose-600/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-pink-400/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="text-4xl sm:text-5xl md:text-6xl">🎉</div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1">
                  Complete All Daily Tasks
                </h3>
                <p className="text-white/70 text-xs sm:text-sm md:text-base">
                  Earn a bonus 500 coins by completing all daily tasks!
                </p>
              </div>
            </div>
            <button
              disabled={completedDailyTasks !== totalDailyTasks}
              className={`w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all whitespace-nowrap ${
                completedDailyTasks === totalDailyTasks
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white transform hover:scale-105"
                  : "bg-white/10 text-white/50 cursor-not-allowed"
              }`}
            >
              {completedDailyTasks === totalDailyTasks
                ? "Claim Bonus"
                : "Locked"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTasksPage;

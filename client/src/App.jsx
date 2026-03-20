import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ShopPage from "./pages/ShopPage";
import DailyTasksPage from "./pages/DailyTasksPage";
import AchievementsPage from "./pages/AchievementsPage";
import SettingsPage from "./pages/SettingsPage";
import StatisticsPage from "./pages/StatisticsPage";
import UserProfilePage from "./pages/UserProfilePage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/daily-tasks" element={<DailyTasksPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/user/:userId" element={<UserProfilePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;

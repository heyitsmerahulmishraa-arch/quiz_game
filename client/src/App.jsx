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
import FriendsPage from "./pages/FriendsPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminQuestionsPage from "./pages/admin/AdminQuestionsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

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
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/user/:userId" element={<UserProfilePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/admin" element={<AdminHomePage />} />
      <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/questions" element={<AdminQuestionsPage />} />
      <Route path="/admin/settings" element={<AdminSettingsPage />} />
    </Routes>
  );
};

export default App;

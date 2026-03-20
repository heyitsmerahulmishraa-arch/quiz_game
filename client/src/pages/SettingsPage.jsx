import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  // Settings state
  const [settings, setSettings] = useState({
    // Profile
    username: "John Doe",
    email: "john.doe@example.com",

    // Game Settings
    soundEffects: true,
    backgroundMusic: false,
    vibration: true,
    autoNextQuestion: true,
    timerVisible: true,

    // Notifications
    pushNotifications: true,
    emailNotifications: false,
    friendRequests: true,
    dailyReminder: true,
    achievementAlerts: true,

    // Privacy
    profileVisibility: "public", // public, friends, private
    showOnlineStatus: true,
    allowFriendRequests: true,
    showStats: true,

    // Display
    theme: "dark", // dark, light, auto
    language: "en",
    fontSize: "medium",
  });

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  const handleSelectChange = (setting, value) => {
    setSettings({ ...settings, [setting]: value });
  };

  const handleSave = () => {
    // Here you'll save to your backend
    alert("Settings saved successfully! ✓");
  };

  const handleResetDefaults = () => {
    if (
      window.confirm("Are you sure you want to reset all settings to default?")
    ) {
      alert("Settings reset to default!");
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone!",
      )
    ) {
      alert("Account deletion process initiated");
    }
  };

  return (
    <div className="settingsPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="settingsContent max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-6">
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
              <h1 className="text-white font-bold text-4xl">⚙️ Settings</h1>
              <p className="text-white/70 text-sm">
                Customize your quiz experience
              </p>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>👤</span> Profile Settings
          </h2>

          <div className="settingsItems space-y-4">
            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Username
              </label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => handleSelectChange("username", e.target.value)}
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              />
            </div>

            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSelectChange("email", e.target.value)}
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              />
            </div>

            <div className="settingItem">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Game Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>🎮</span> Game Settings
          </h2>

          <div className="settingsItems space-y-4">
            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Sound Effects</div>
                <div className="text-white/70 text-sm">
                  Play sound effects during gameplay
                </div>
              </div>
              <button
                onClick={() => handleToggle("soundEffects")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.soundEffects ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.soundEffects ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Background Music</div>
                <div className="text-white/70 text-sm">
                  Play background music while playing
                </div>
              </div>
              <button
                onClick={() => handleToggle("backgroundMusic")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.backgroundMusic ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.backgroundMusic ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Vibration</div>
                <div className="text-white/70 text-sm">
                  Enable haptic feedback
                </div>
              </div>
              <button
                onClick={() => handleToggle("vibration")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.vibration ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.vibration ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Auto Next Question
                </div>
                <div className="text-white/70 text-sm">
                  Automatically move to next question
                </div>
              </div>
              <button
                onClick={() => handleToggle("autoNextQuestion")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.autoNextQuestion ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.autoNextQuestion ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Timer Visible</div>
                <div className="text-white/70 text-sm">
                  Show countdown timer during quiz
                </div>
              </div>
              <button
                onClick={() => handleToggle("timerVisible")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.timerVisible ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.timerVisible ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>🔔</span> Notifications
          </h2>

          <div className="settingsItems space-y-4">
            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Push Notifications
                </div>
                <div className="text-white/70 text-sm">
                  Receive push notifications
                </div>
              </div>
              <button
                onClick={() => handleToggle("pushNotifications")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.pushNotifications ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Email Notifications
                </div>
                <div className="text-white/70 text-sm">
                  Get updates via email
                </div>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Friend Requests</div>
                <div className="text-white/70 text-sm">
                  Notify when someone sends friend request
                </div>
              </div>
              <button
                onClick={() => handleToggle("friendRequests")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.friendRequests ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.friendRequests ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Daily Reminder</div>
                <div className="text-white/70 text-sm">
                  Remind to complete daily tasks
                </div>
              </div>
              <button
                onClick={() => handleToggle("dailyReminder")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.dailyReminder ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.dailyReminder ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Achievement Alerts
                </div>
                <div className="text-white/70 text-sm">
                  Notify when unlocking achievements
                </div>
              </div>
              <button
                onClick={() => handleToggle("achievementAlerts")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.achievementAlerts ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.achievementAlerts ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>🔒</span> Privacy
          </h2>

          <div className="settingsItems space-y-4">
            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Profile Visibility
              </label>
              <select
                value={settings.profileVisibility}
                onChange={(e) =>
                  handleSelectChange("profileVisibility", e.target.value)
                }
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              >
                <option value="public" className="bg-gray-800">
                  Public - Anyone can view
                </option>
                <option value="friends" className="bg-gray-800">
                  Friends Only
                </option>
                <option value="private" className="bg-gray-800">
                  Private - Only me
                </option>
              </select>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Show Online Status
                </div>
                <div className="text-white/70 text-sm">
                  Let others see when you're online
                </div>
              </div>
              <button
                onClick={() => handleToggle("showOnlineStatus")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.showOnlineStatus ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.showOnlineStatus ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  Allow Friend Requests
                </div>
                <div className="text-white/70 text-sm">
                  Allow others to send friend requests
                </div>
              </div>
              <button
                onClick={() => handleToggle("allowFriendRequests")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.allowFriendRequests ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.allowFriendRequests ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Show Stats</div>
                <div className="text-white/70 text-sm">
                  Display your stats publicly
                </div>
              </div>
              <button
                onClick={() => handleToggle("showStats")}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  settings.showStats ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    settings.showStats ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>🎨</span> Display
          </h2>

          <div className="settingsItems space-y-4">
            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => handleSelectChange("theme", e.target.value)}
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              >
                <option value="dark" className="bg-gray-800">
                  Dark
                </option>
                <option value="light" className="bg-gray-800">
                  Light
                </option>
                <option value="auto" className="bg-gray-800">
                  Auto (System)
                </option>
              </select>
            </div>

            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSelectChange("language", e.target.value)}
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              >
                <option value="en" className="bg-gray-800">
                  English
                </option>
                <option value="es" className="bg-gray-800">
                  Español
                </option>
                <option value="fr" className="bg-gray-800">
                  Français
                </option>
                <option value="de" className="bg-gray-800">
                  Deutsch
                </option>
                <option value="zh" className="bg-gray-800">
                  中文
                </option>
              </select>
            </div>

            <div className="settingItem">
              <label className="text-white font-semibold mb-2 block">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => handleSelectChange("fontSize", e.target.value)}
                className="w-full bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              >
                <option value="small" className="bg-gray-800">
                  Small
                </option>
                <option value="medium" className="bg-gray-800">
                  Medium
                </option>
                <option value="large" className="bg-gray-800">
                  Large
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actionsSection grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            💾 Save Settings
          </button>

          <button
            onClick={handleResetDefaults}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            🔄 Reset to Defaults
          </button>
        </div>

        {/* Danger Zone */}
        <div className="dangerZone bg-red-500/10 backdrop-blur-md rounded-2xl p-6 border-2 border-red-500/30">
          <h2 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span>⚠️</span> Danger Zone
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Delete Account</div>
                <div className="text-white/70 text-sm">
                  Permanently delete your account and all data
                </div>
              </div>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                Delete Account
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">Clear Game Data</div>
                <div className="text-white/70 text-sm">
                  Reset all progress and statistics
                </div>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all">
                Clear Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

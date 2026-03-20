import React, { useState, useEffect } from "react";
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
    musicVolume: 30,
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

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedMusic = localStorage.getItem("backgroundMusic");
    const savedVolume = localStorage.getItem("musicVolume");

    if (savedMusic !== null) {
      setSettings((prev) => ({
        ...prev,
        backgroundMusic: savedMusic === "true",
        musicVolume: savedVolume ? parseInt(savedVolume) : 30,
      }));
    }
  }, []);

  const handleToggle = (setting) => {
    const newValue = !settings[setting];
    setSettings({ ...settings, [setting]: newValue });

    // Save background music setting to localStorage immediately
    if (setting === "backgroundMusic") {
      localStorage.setItem("backgroundMusic", newValue.toString());
      // Trigger storage event for same-window updates
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "backgroundMusic",
          newValue: newValue.toString(),
          oldValue: settings[setting].toString(),
        }),
      );
    }
  };

  const handleVolumeChange = (value) => {
    setSettings({ ...settings, musicVolume: value });
    localStorage.setItem("musicVolume", value.toString());
    // Dispatch event to update volume in real-time
    window.dispatchEvent(
      new CustomEvent("musicVolumeChange", {
        detail: { volume: value / 100 },
      }),
    );
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
    <div className="settingsPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-4 md:p-6 pb-24">
      <div className="settingsContent max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-4">
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
                ⚙️ Settings
              </h1>
              <p className="text-white/70 text-xs sm:text-sm hidden sm:block">
                Customize your quiz experience
              </p>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>👤</span> Profile Settings
          </h2>

          <div className="settingsItems space-y-3 sm:space-y-4">
            <div className="settingItem">
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Username
              </label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => handleSelectChange("username", e.target.value)}
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              />
            </div>

            <div className="settingItem">
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSelectChange("email", e.target.value)}
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
              />
            </div>

            <div className="settingItem">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all w-full sm:w-auto">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Game Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>🎮</span> Game Settings
          </h2>

          <div className="settingsItems space-y-3 sm:space-y-4">
            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Sound Effects
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Play sound effects during gameplay
                </div>
              </div>
              <button
                onClick={() => handleToggle("soundEffects")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.soundEffects ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.soundEffects
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Background Music
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Play background music while playing
                </div>
              </div>
              <button
                onClick={() => handleToggle("backgroundMusic")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.backgroundMusic ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.backgroundMusic
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Music Volume Slider - Only show when background music is enabled */}
            {settings.backgroundMusic && (
              <div className="settingItem flex flex-col gap-2 sm:gap-3 pl-2 sm:pl-3 border-l-2 border-purple-500/50">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-white text-sm sm:text-base font-semibold">
                      🔊 Music Volume
                    </div>
                    <div className="text-white/70 text-xs sm:text-sm">
                      Adjust background music volume
                    </div>
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base shrink-0">
                    {settings.musicVolume}%
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-white/50 text-xs sm:text-sm">🔈</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={settings.musicVolume}
                    onChange={(e) =>
                      handleVolumeChange(parseInt(e.target.value))
                    }
                    className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${settings.musicVolume}%, rgba(255,255,255,0.2) ${settings.musicVolume}%, rgba(255,255,255,0.2) 100%)`,
                    }}
                  />
                  <span className="text-white/50 text-xs sm:text-sm">🔊</span>
                </div>
              </div>
            )}

            <div className="settingItem flex items-center justify-between gap-3">
              {/* Vibration section */}
              <div className="min-w-0 flex-1">
                {/* Existing Vibration content */}
                <div className="text-white text-sm sm:text-base font-semibold">
                  Vibration
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Enable haptic feedback
                </div>
              </div>
              <button
                onClick={() => handleToggle("vibration")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.vibration ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.vibration ? "translate-x-7 sm:translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Auto Next Question
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Automatically move to next question
                </div>
              </div>
              <button
                onClick={() => handleToggle("autoNextQuestion")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.autoNextQuestion ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.autoNextQuestion
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Timer Visible
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Show countdown timer during quiz
                </div>
              </div>
              <button
                onClick={() => handleToggle("timerVisible")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.timerVisible ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.timerVisible
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>🔔</span> Notifications
          </h2>

          <div className="settingsItems space-y-3 sm:space-y-4">
            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Push Notifications
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Receive push notifications
                </div>
              </div>
              <button
                onClick={() => handleToggle("pushNotifications")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.pushNotifications ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.pushNotifications
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Email Notifications
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Get updates via email
                </div>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.emailNotifications ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.emailNotifications
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Friend Requests
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Notify when someone sends friend request
                </div>
              </div>
              <button
                onClick={() => handleToggle("friendRequests")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.friendRequests ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.friendRequests
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Daily Reminder
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Remind to complete daily tasks
                </div>
              </div>
              <button
                onClick={() => handleToggle("dailyReminder")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.dailyReminder ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.dailyReminder
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Achievement Alerts
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Notify when unlocking achievements
                </div>
              </div>
              <button
                onClick={() => handleToggle("achievementAlerts")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.achievementAlerts ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.achievementAlerts
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>🔒</span> Privacy
          </h2>

          <div className="settingsItems space-y-3 sm:space-y-4">
            <div className="settingItem">
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Profile Visibility
              </label>
              <select
                value={settings.profileVisibility}
                onChange={(e) =>
                  handleSelectChange("profileVisibility", e.target.value)
                }
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
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

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Show Online Status
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Let others see when you're online
                </div>
              </div>
              <button
                onClick={() => handleToggle("showOnlineStatus")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.showOnlineStatus ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.showOnlineStatus
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Allow Friend Requests
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Allow others to send friend requests
                </div>
              </div>
              <button
                onClick={() => handleToggle("allowFriendRequests")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.allowFriendRequests ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.allowFriendRequests
                      ? "translate-x-7 sm:translate-x-8"
                      : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="settingItem flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Show Stats
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Display your stats publicly
                </div>
              </div>
              <button
                onClick={() => handleToggle("showStats")}
                className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-colors shrink-0 ${
                  settings.showStats ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-6 h-6 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                    settings.showStats ? "translate-x-7 sm:translate-x-8" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="settingsSection bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>🎨</span> Display
          </h2>

          <div className="settingsItems space-y-3 sm:space-y-4">
            <div className="settingItem">
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => handleSelectChange("theme", e.target.value)}
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
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
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSelectChange("language", e.target.value)}
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
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
              <label className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 block">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => handleSelectChange("fontSize", e.target.value)}
                className="w-full bg-white/10 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 focus:border-blue-400 outline-none"
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
        <div className="actionsSection grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            💾 Save Settings
          </button>

          <button
            onClick={handleResetDefaults}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            🔄 Reset to Defaults
          </button>
        </div>

        {/* Danger Zone */}
        <div className="dangerZone bg-red-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-red-500/30">
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 flex items-center gap-2">
            <span>⚠️</span> Danger Zone
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Delete Account
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Permanently delete your account and all data
                </div>
              </div>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all w-full sm:w-auto shrink-0"
              >
                Delete Account
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="text-white text-sm sm:text-base font-semibold">
                  Clear Game Data
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  Reset all progress and statistics
                </div>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all w-full sm:w-auto shrink-0">
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

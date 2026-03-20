import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // General Settings State
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Quiz Master",
    siteDescription: "The ultimate quiz platform for learning and fun",
    contactEmail: "admin@quizmaster.com",
    supportEmail: "support@quizmaster.com",
    timezone: "UTC",
    language: "en",
    maintenanceMode: false,
  });

  // Quiz Settings State
  const [quizSettings, setQuizSettings] = useState({
    defaultTimeLimit: 15,
    defaultQuestionCount: 10,
    passPercentage: 70,
    maxAttempts: 3,
    allowSkip: true,
    showCorrectAnswers: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    easyPoints: 10,
    mediumPoints: 20,
    hardPoints: 30,
  });

  // User Settings State
  const [userSettings, setUserSettings] = useState({
    allowRegistration: true,
    requireEmailVerification: true,
    minPasswordLength: 8,
    allowSocialLogin: true,
    defaultRole: "user",
    maxFriends: 100,
    profilePictureRequired: false,
  });

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    welcomeEmail: true,
    activityDigest: true,
    achievementAlerts: true,
    challengeInvites: true,
    systemUpdates: true,
  });

  // Security Settings State
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    ipWhitelist: "",
    contentModeration: true,
    spamProtection: true,
  });

  // Appearance Settings State
  const [appearanceSettings, setAppearanceSettings] = useState({
    primaryColor: "#8B5CF6",
    secondaryColor: "#EC4899",
    darkModeEnabled: true,
    customLogo: "",
    customFavicon: "",
  });

  const tabs = [
    { id: "general", name: "General", icon: "⚙️" },
    { id: "quiz", name: "Quiz Settings", icon: "🎮" },
    { id: "users", name: "User Management", icon: "👥" },
    { id: "notifications", name: "Notifications", icon: "🔔" },
    { id: "security", name: "Security", icon: "🔒" },
    { id: "appearance", name: "Appearance", icon: "🎨" },
  ];

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaveMessage("Settings saved successfully!");
    setIsSaving(false);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin")}
              className="p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
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
              <h1 className="text-3xl font-bold text-white mb-1">Settings</h1>
              <p className="text-white/60">Manage application configuration</p>
            </div>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "💾 Save Changes"}
          </button>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400">
            ✓ {saveMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    General Settings
                  </h2>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={generalSettings.siteName}
                      onChange={(e) =>
                        setGeneralSettings({
                          ...generalSettings,
                          siteName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Site Description
                    </label>
                    <textarea
                      value={generalSettings.siteDescription}
                      onChange={(e) =>
                        setGeneralSettings({
                          ...generalSettings,
                          siteDescription: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 resize-none"
                      rows="3"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={generalSettings.contactEmail}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            contactEmail: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Support Email
                      </label>
                      <input
                        type="email"
                        value={generalSettings.supportEmail}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            supportEmail: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Timezone
                      </label>
                      <select
                        value={generalSettings.timezone}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            timezone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="UTC" className="bg-gray-800 text-white">
                          UTC
                        </option>
                        <option value="EST" className="bg-gray-800 text-white">
                          EST
                        </option>
                        <option value="PST" className="bg-gray-800 text-white">
                          PST
                        </option>
                        <option value="CST" className="bg-gray-800 text-white">
                          CST
                        </option>
                        <option value="MST" className="bg-gray-800 text-white">
                          MST
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Default Language
                      </label>
                      <select
                        value={generalSettings.language}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            language: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="en" className="bg-gray-800 text-white">
                          English
                        </option>
                        <option value="es" className="bg-gray-800 text-white">
                          Spanish
                        </option>
                        <option value="fr" className="bg-gray-800 text-white">
                          French
                        </option>
                        <option value="de" className="bg-gray-800 text-white">
                          German
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                    <div>
                      <div className="text-white font-semibold">
                        Maintenance Mode
                      </div>
                      <div className="text-white/60 text-sm">
                        Temporarily disable public access
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={generalSettings.maintenanceMode}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            maintenanceMode: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              )}

              {/* Quiz Settings */}
              {activeTab === "quiz" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Quiz Settings
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Default Time Limit (seconds)
                      </label>
                      <input
                        type="number"
                        value={quizSettings.defaultTimeLimit}
                        onChange={(e) =>
                          setQuizSettings({
                            ...quizSettings,
                            defaultTimeLimit: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="5"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Default Question Count
                      </label>
                      <input
                        type="number"
                        value={quizSettings.defaultQuestionCount}
                        onChange={(e) =>
                          setQuizSettings({
                            ...quizSettings,
                            defaultQuestionCount: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="1"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Pass Percentage
                      </label>
                      <input
                        type="number"
                        value={quizSettings.passPercentage}
                        onChange={(e) =>
                          setQuizSettings({
                            ...quizSettings,
                            passPercentage: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Max Attempts Per Quiz
                    </label>
                    <input
                      type="number"
                      value={quizSettings.maxAttempts}
                      onChange={(e) =>
                        setQuizSettings({
                          ...quizSettings,
                          maxAttempts: parseInt(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                      min="1"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Allow Skip Questions
                        </div>
                        <div className="text-white/60 text-sm">
                          Let users skip questions during quiz
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quizSettings.allowSkip}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              allowSkip: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Show Correct Answers
                        </div>
                        <div className="text-white/60 text-sm">
                          Display correct answers after quiz completion
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quizSettings.showCorrectAnswers}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              showCorrectAnswers: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Randomize Questions
                        </div>
                        <div className="text-white/60 text-sm">
                          Shuffle question order for each attempt
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quizSettings.randomizeQuestions}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              randomizeQuestions: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Randomize Options
                        </div>
                        <div className="text-white/60 text-sm">
                          Shuffle answer options for each question
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={quizSettings.randomizeOptions}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              randomizeOptions: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Points Configuration
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white/80 mb-2">
                          Easy Questions Points
                        </label>
                        <input
                          type="number"
                          value={quizSettings.easyPoints}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              easyPoints: parseInt(e.target.value),
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                          min="1"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 mb-2">
                          Medium Questions Points
                        </label>
                        <input
                          type="number"
                          value={quizSettings.mediumPoints}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              mediumPoints: parseInt(e.target.value),
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                          min="1"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 mb-2">
                          Hard Questions Points
                        </label>
                        <input
                          type="number"
                          value={quizSettings.hardPoints}
                          onChange={(e) =>
                            setQuizSettings({
                              ...quizSettings,
                              hardPoints: parseInt(e.target.value),
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* User Settings */}
              {activeTab === "users" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    User Management Settings
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Allow Registration
                        </div>
                        <div className="text-white/60 text-sm">
                          Enable new user sign-ups
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userSettings.allowRegistration}
                          onChange={(e) =>
                            setUserSettings({
                              ...userSettings,
                              allowRegistration: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Require Email Verification
                        </div>
                        <div className="text-white/60 text-sm">
                          Users must verify email before accessing
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userSettings.requireEmailVerification}
                          onChange={(e) =>
                            setUserSettings({
                              ...userSettings,
                              requireEmailVerification: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Allow Social Login
                        </div>
                        <div className="text-white/60 text-sm">
                          Enable login via Google, Facebook, etc.
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userSettings.allowSocialLogin}
                          onChange={(e) =>
                            setUserSettings({
                              ...userSettings,
                              allowSocialLogin: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Profile Picture Required
                        </div>
                        <div className="text-white/60 text-sm">
                          Force users to upload profile picture
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userSettings.profilePictureRequired}
                          onChange={(e) =>
                            setUserSettings({
                              ...userSettings,
                              profilePictureRequired: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Minimum Password Length
                      </label>
                      <input
                        type="number"
                        value={userSettings.minPasswordLength}
                        onChange={(e) =>
                          setUserSettings({
                            ...userSettings,
                            minPasswordLength: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="6"
                        max="20"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Maximum Friends
                      </label>
                      <input
                        type="number"
                        value={userSettings.maxFriends}
                        onChange={(e) =>
                          setUserSettings({
                            ...userSettings,
                            maxFriends: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Default User Role
                    </label>
                    <select
                      value={userSettings.defaultRole}
                      onChange={(e) =>
                        setUserSettings({
                          ...userSettings,
                          defaultRole: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="user" className="bg-gray-800 text-white">
                        User
                      </option>
                      <option value="member" className="bg-gray-800 text-white">
                        Member
                      </option>
                      <option
                        value="premium"
                        className="bg-gray-800 text-white"
                      >
                        Premium
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Notification Settings
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Email Notifications
                        </div>
                        <div className="text-white/60 text-sm">
                          Send notifications via email
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailNotifications}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              emailNotifications: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Push Notifications
                        </div>
                        <div className="text-white/60 text-sm">
                          Send browser push notifications
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushNotifications}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              pushNotifications: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Welcome Email
                        </div>
                        <div className="text-white/60 text-sm">
                          Send welcome email to new users
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.welcomeEmail}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              welcomeEmail: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Activity Digest
                        </div>
                        <div className="text-white/60 text-sm">
                          Weekly summary of user activity
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.activityDigest}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              activityDigest: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Achievement Alerts
                        </div>
                        <div className="text-white/60 text-sm">
                          Notify users when they earn achievements
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.achievementAlerts}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              achievementAlerts: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Challenge Invites
                        </div>
                        <div className="text-white/60 text-sm">
                          Notify users when challenged by friends
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.challengeInvites}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              challengeInvites: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          System Updates
                        </div>
                        <div className="text-white/60 text-sm">
                          Notify about maintenance and updates
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.systemUpdates}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              systemUpdates: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Security Settings
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Two-Factor Authentication
                        </div>
                        <div className="text-white/60 text-sm">
                          Require 2FA for admin accounts
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={securitySettings.twoFactorAuth}
                          onChange={(e) =>
                            setSecuritySettings({
                              ...securitySettings,
                              twoFactorAuth: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Content Moderation
                        </div>
                        <div className="text-white/60 text-sm">
                          Auto-filter inappropriate content
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={securitySettings.contentModeration}
                          onChange={(e) =>
                            setSecuritySettings({
                              ...securitySettings,
                              contentModeration: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white font-semibold">
                          Spam Protection
                        </div>
                        <div className="text-white/60 text-sm">
                          Enable spam detection and prevention
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={securitySettings.spamProtection}
                          onChange={(e) =>
                            setSecuritySettings({
                              ...securitySettings,
                              spamProtection: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Session Timeout (minutes)
                      </label>
                      <input
                        type="number"
                        value={securitySettings.sessionTimeout}
                        onChange={(e) =>
                          setSecuritySettings({
                            ...securitySettings,
                            sessionTimeout: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="5"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Max Login Attempts
                      </label>
                      <input
                        type="number"
                        value={securitySettings.maxLoginAttempts}
                        onChange={(e) =>
                          setSecuritySettings({
                            ...securitySettings,
                            maxLoginAttempts: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        min="3"
                        max="10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      IP Whitelist (comma-separated)
                    </label>
                    <textarea
                      value={securitySettings.ipWhitelist}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          ipWhitelist: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 resize-none"
                      rows="3"
                      placeholder="e.g., 192.168.1.1, 10.0.0.1"
                    />
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Appearance Settings
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">
                        Primary Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={appearanceSettings.primaryColor}
                          onChange={(e) =>
                            setAppearanceSettings({
                              ...appearanceSettings,
                              primaryColor: e.target.value,
                            })
                          }
                          className="w-20 h-12 rounded-lg cursor-pointer bg-white/10 border border-white/20"
                        />
                        <input
                          type="text"
                          value={appearanceSettings.primaryColor}
                          onChange={(e) =>
                            setAppearanceSettings({
                              ...appearanceSettings,
                              primaryColor: e.target.value,
                            })
                          }
                          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Secondary Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={appearanceSettings.secondaryColor}
                          onChange={(e) =>
                            setAppearanceSettings({
                              ...appearanceSettings,
                              secondaryColor: e.target.value,
                            })
                          }
                          className="w-20 h-12 rounded-lg cursor-pointer bg-white/10 border border-white/20"
                        />
                        <input
                          type="text"
                          value={appearanceSettings.secondaryColor}
                          onChange={(e) =>
                            setAppearanceSettings({
                              ...appearanceSettings,
                              secondaryColor: e.target.value,
                            })
                          }
                          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                    <div>
                      <div className="text-white font-semibold">
                        Dark Mode Enabled
                      </div>
                      <div className="text-white/60 text-sm">
                        Use dark theme by default
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearanceSettings.darkModeEnabled}
                        onChange={(e) =>
                          setAppearanceSettings({
                            ...appearanceSettings,
                            darkModeEnabled: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Custom Logo URL
                    </label>
                    <input
                      type="text"
                      value={appearanceSettings.customLogo}
                      onChange={(e) =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          customLogo: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">
                      Custom Favicon URL
                    </label>
                    <input
                      type="text"
                      value={appearanceSettings.customFavicon}
                      onChange={(e) =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          customFavicon: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                      placeholder="https://example.com/favicon.ico"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSection from "../components/users/ProfileSection";
import FriendsList from "../components/users/FriendsList";
import CategorySelectionModal from "../components/quiz/CategorySelectionModal";

const HomePage = () => {
  const navigate = useNavigate();
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Mock user data - you'll replace this with actual data from your server
  const userData = {
    name: "Rahul Mishra",
    level: 99,
    profileImage: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  };

  // Mock friends data - you'll replace this with actual data from your server
  const friendsList = [
    {
      id: 1,
      name: "Alone Coder",
      level: 12,
      profileImage: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Kaushik",
      level: 18,
      profileImage: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Akash",
      level: 10,
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Priya",
      level: 20,
      profileImage: "https://images.unsplash.com/photo-1653379671988-b32fceafb5e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Shivam",
      level: 14,
      profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
  ];

  // Mock events data - you'll replace this with actual data from your server
  const upcomingEvents = [
    {
      id: 1,
      title: "Weekend Quiz Marathon",
      description: "48-hour quiz challenge with special rewards",
      icon: "🏃",
      type: "Marathon",
      startDate: "Mar 22, 2026",
      endDate: "Mar 24, 2026",
      participants: 1250,
      prize: "5000 Coins + Exclusive Badge",
      status: "upcoming",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 2,
      title: "Science Trivia Tournament",
      description: "Test your knowledge in science categories",
      icon: "🔬",
      type: "Tournament",
      startDate: "Mar 25, 2026",
      endDate: "Mar 27, 2026",
      participants: 890,
      prize: "10,000 Coins + Trophy",
      status: "upcoming",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Daily Speed Challenge",
      description: "Answer 20 questions in 60 seconds",
      icon: "⚡",
      type: "Challenge",
      startDate: "Today",
      endDate: "Today",
      participants: 2340,
      prize: "500 Coins",
      status: "active",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  const handlePlayClick = () => {
    setShowCategoryModal(true);
  };

  useEffect(() => {
    // Check localStorage for background music preference
    const musicEnabled = localStorage.getItem("backgroundMusic");
    const savedVolume = localStorage.getItem("musicVolume");

    if (audioRef.current) {
      const volume = savedVolume ? parseInt(savedVolume) / 100 : 0.3;
      audioRef.current.volume = volume;

      // Auto-play if enabled in settings
      if (musicEnabled === "true") {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
        setIsPlaying(true);
      }
    }

    // Listen for storage changes from settings page
    const handleStorageChange = (e) => {
      if (e.key === "backgroundMusic" && audioRef.current) {
        if (e.newValue === "true") {
          audioRef.current.play().catch((error) => {
            console.log("Audio playback failed:", error);
          });
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    // Listen for volume changes
    const handleVolumeChange = (e) => {
      if (audioRef.current && e.detail?.volume !== undefined) {
        audioRef.current.volume = e.detail.volume;
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("musicVolumeChange", handleVolumeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("musicVolumeChange", handleVolumeChange);
    };
  }, []);

  return (
    <div className="homePageContainer h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/theme-song.mp3" type="audio/mpeg" />
        <source src="/music/theme-song.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <div className="mainContent flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 max-w-[1400px] h-full mx-auto pb-20 sm:pb-0">
        {/* Left Sidebar */}
        <div className="leftSidebar w-full sm:w-full md:w-full lg:w-[320px] flex flex-col gap-3 sm:gap-4 md:gap-4 h-auto lg:h-full overflow-hidden">
          {/* Profile Section */}
          <ProfileSection userData={userData} />

          {/* Friends List - Hidden on mobile, shown on tablet and desktop */}
          <div className="hidden sm:block flex-1 lg:flex-1 lg:min-h-0 overflow-y-auto">
            <FriendsList friends={friendsList} />
          </div>

          {/* Play Button - Desktop/Tablet version */}
          <div className="playButtonContainer hidden sm:block">
            <button
              onClick={handlePlayClick}
              className="playButton w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                PLAY NOW
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Action Buttons */}
        <div className="rightSideButtons flex-1 lg:h-full lg:overflow-y-auto overflow-x-hidden">
          <div className="buttonsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-4">
            {/* Leaderboard Button */}
            <button
              onClick={() => navigate("/leaderboard")}
              className="actionButton bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">
                  Leaderboard
                </span>
              </div>
            </button>

            {/* Shop Button */}
            <button
              onClick={() => navigate("/shop")}
              className="actionButton bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">Shop</span>
              </div>
            </button>

            {/* Daily Tasks Button */}
            <button
              onClick={() => navigate("/daily-tasks")}
              className="actionButton bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">
                  Daily Tasks
                </span>
              </div>
            </button>

            {/* Achievements Button */}
            <button
              onClick={() => navigate("/achievements")}
              className="actionButton bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">
                  Achievements
                </span>
              </div>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => navigate("/settings")}
              className="actionButton bg-gradient-to-br from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">
                  Settings
                </span>
              </div>
            </button>

            {/* Statistics Button */}
            <button
              onClick={() => navigate("/statistics")}
              className="actionButton bg-gradient-to-br from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">
                  Statistics
                </span>
              </div>
            </button>

            {/* Category Selection Button - At the End */}
            <button
              onClick={handlePlayClick}
              className="col-span-2 md:col-span-3 lg:col-span-2 actionButton bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 sm:py-6 md:py-7 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95 border-4 border-white/30"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-center sm:text-left">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Select Category & Start
                  </div>
                  <div className="text-xs sm:text-sm md:text-sm opacity-90">
                    Choose your quiz preferences
                  </div>
                </div>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 hidden sm:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Events Section */}
          <div className="eventsSection mt-4 sm:mt-5 md:mt-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                🎉 Upcoming Events
              </h2>
              <button
                onClick={() => navigate("/events")}
                className="text-white/70 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                View All →
              </button>
            </div>

            <div className="eventsGrid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5 md:gap-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`eventCard bg-gradient-to-br ${event.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-white/20 shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
                  onClick={() => alert(`Join ${event.title}!`)}
                >
                  {/* Status Badge */}
                  {event.status === "active" && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 text-green-600 font-bold text-[10px] sm:text-xs px-2 py-1 rounded-full animate-pulse">
                      🔴 LIVE
                    </div>
                  )}

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl shrink-0">
                      {event.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 line-clamp-1">
                            {event.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base line-clamp-2">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5">
                          <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                            📅 Duration
                          </div>
                          <div className="text-white font-semibold text-xs sm:text-sm truncate">
                            {event.startDate === event.endDate
                              ? event.startDate
                              : `${event.startDate.split(",")[0]} - ${event.endDate.split(",")[0]}`}
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5">
                          <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                            👥 Players
                          </div>
                          <div className="text-white font-semibold text-xs sm:text-sm">
                            {event.participants.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                              🏆 Prize
                            </div>
                            <div className="text-white font-bold text-xs sm:text-sm md:text-base truncate">
                              {event.prize}
                            </div>
                          </div>
                          <button className="bg-white hover:bg-white/90 text-gray-900 font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all transform hover:scale-105 shrink-0">
                            Join Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-gradient-to-t from-purple-900 to-transparent backdrop-blur-lg border-t border-white/20 z-50">
        <div className="flex justify-around items-center px-4 py-3 max-w-md mx-auto">
          {/* Friends Button (Mobile) */}
          <button
            onClick={() => navigate("/friends")}
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-xs">Friends</span>
          </button>

          {/* Home Button */}
          <button className="flex flex-col items-center gap-1 text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-semibold">Home</span>
          </button>

          {/* Play Button (Mobile) */}
          <button
            onClick={handlePlayClick}
            className="flex flex-col items-center gap-1 -mt-8"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl border-4 border-purple-900">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <span className="text-xs text-white font-semibold mt-1">Play</span>
          </button>

          {/* Stats Button */}
          <button
            onClick={() => navigate("/statistics")}
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs">Stats</span>
          </button>

          {/* More Button */}
          <button
            onClick={() => navigate("/settings")}
            className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="text-xs">More</span>
          </button>
        </div>
      </div>

      {/* Category Selection Modal */}
      {showCategoryModal && (
        <CategorySelectionModal onClose={() => setShowCategoryModal(false)} />
      )}
    </div>
  );
};

export default HomePage;

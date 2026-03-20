import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSection from "../components/users/ProfileSection";
import FriendsList from "../components/users/FriendsList";
import CategorySelectionModal from "../components/quiz/CategorySelectionModal";

const HomePage = () => {
  const navigate = useNavigate();
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  // Mock user data - you'll replace this with actual data from your server
  const userData = {
    name: "John Doe",
    level: 15,
    profileImage: "https://via.placeholder.com/100",
  };

  // Mock friends data - you'll replace this with actual data from your server
  const friendsList = [
    {
      id: 1,
      name: "Alice",
      level: 12,
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Bob",
      level: 18,
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Charlie",
      level: 10,
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Diana",
      level: 20,
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Eve",
      level: 14,
      profileImage: "https://via.placeholder.com/50",
    },
  ];

  const handlePlayClick = () => {
    setShowCategoryModal(true);
  };

  return (
    <div className="homePageContainer h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 overflow-hidden">
      <div className="mainContent flex gap-6 max-w-[1400px] h-full mx-auto">
        {/* Left Sidebar */}
        <div className="leftSidebar w-[320px] flex flex-col gap-4">
          {/* Profile Section */}
          <ProfileSection userData={userData} />

          {/* Friends List */}
          <FriendsList friends={friendsList} />

          {/* Play Button - Below Friends List */}
          <div className="playButtonContainer">
            <button
              onClick={handlePlayClick}
              className="playButton w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl py-5 px-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-7 h-7"
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
        <div className="rightSideButtons flex-1">
          <div className="buttonsGrid grid grid-cols-2 gap-4">
            {/* Leaderboard Button */}
            <button
              onClick={() => navigate("/leaderboard")}
              className="actionButton bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
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
                <span className="text-lg">Leaderboard</span>
              </div>
            </button>

            {/* Shop Button */}
            <button
              onClick={() => navigate("/shop")}
              className="actionButton bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="text-lg">Shop</span>
              </div>
            </button>

            {/* Daily Tasks Button */}
            <button
              onClick={() => navigate("/daily-tasks")}
              className="actionButton bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg">Daily Tasks</span>
              </div>
            </button>

            {/* Achievements Button */}
            <button
              onClick={() => navigate("/achievements")}
              className="actionButton bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-lg">Achievements</span>
              </div>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => navigate("/settings")}
              className="actionButton bg-gradient-to-br from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg">Settings</span>
              </div>
            </button>

            {/* Statistics Button */}
            <button
              onClick={() => navigate("/statistics")}
              className="actionButton bg-gradient-to-br from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span className="text-lg">Statistics</span>
              </div>
            </button>

            {/* Category Selection Button - At the End */}
            <button
              onClick={handlePlayClick}
              className="col-span-2 actionButton bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 border-4 border-white/30"
            >
              <div className="flex items-center justify-center gap-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-2xl font-bold">
                    Select Category & Start
                  </div>
                  <div className="text-sm opacity-90">
                    Choose your quiz preferences
                  </div>
                </div>
                <svg
                  className="w-8 h-8"
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

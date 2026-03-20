import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddFriendModal from "../components/users/AddFriendModal";
import ChallengeModal from "../components/quiz/ChallengeModal";

const FriendsPage = () => {
  const navigate = useNavigate();
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Mock friends data
  const friendsList = [
    {
      id: 1,
      name: "Alice",
      level: 12,
      profileImage: "https://via.placeholder.com/50",
      status: "online",
    },
    {
      id: 2,
      name: "Bob",
      level: 18,
      profileImage: "https://via.placeholder.com/50",
      status: "online",
    },
    {
      id: 3,
      name: "Charlie",
      level: 10,
      profileImage: "https://via.placeholder.com/50",
      status: "offline",
    },
    {
      id: 4,
      name: "Diana",
      level: 20,
      profileImage: "https://via.placeholder.com/50",
      status: "online",
    },
    {
      id: 5,
      name: "Eve",
      level: 14,
      profileImage: "https://via.placeholder.com/50",
      status: "offline",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all shrink-0"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
            <h1 className="text-xl sm:text-2xl font-bold text-white truncate">
              Friends
            </h1>
          </div>
          <button
            onClick={() => setShowAddFriendModal(true)}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all text-sm sm:text-base shrink-0"
          >
            <span className="hidden sm:inline">+ Add Friend</span>
            <span className="sm:hidden">+ Add</span>
          </button>
        </div>

        {/* Friends Count */}
        <div className="rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-3 sm:p-4 mb-3 sm:mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/60 text-xs sm:text-sm">
                Total Friends
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                {friendsList.length}
              </div>
            </div>
            <div>
              <div className="text-white/60 text-xs sm:text-sm">Online</div>
              <div className="text-xl sm:text-2xl font-bold text-green-400">
                {friendsList.filter((f) => f.status === "online").length}
              </div>
            </div>
          </div>
        </div>

        {/* Friends List */}
        <div className="space-y-2 sm:space-y-3">
          {friendsList.map((friend) => (
            <div
              key={friend.id}
              className="rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-3 sm:p-4 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  onClick={() => navigate(`/user/${friend.id}`)}
                  className="flex items-center gap-2.5 sm:gap-4 flex-1 cursor-pointer min-w-0"
                >
                  <div className="relative shrink-0">
                    <img
                      src={friend.profileImage}
                      alt={friend.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-green-400 object-cover"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 ${
                        friend.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      } rounded-full border-2 border-white`}
                    ></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base sm:text-lg truncate">
                      {friend.name}
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-white/60 text-xs sm:text-sm">
                      <span>Level {friend.level}</span>
                      <span>•</span>
                      <span
                        className={
                          friend.status === "online" ? "text-green-400" : ""
                        }
                      >
                        {friend.status}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedFriend(friend);
                    setShowChallengeModal(true);
                  }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shrink-0"
                >
                  <span className="hidden sm:inline">Challenge</span>
                  <span className="sm:hidden">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Friend Modal */}
      {showAddFriendModal && (
        <AddFriendModal onClose={() => setShowAddFriendModal(false)} />
      )}

      {/* Challenge Modal */}
      {showChallengeModal && selectedFriend && (
        <ChallengeModal
          onClose={() => {
            setShowChallengeModal(false);
            setSelectedFriend(null);
          }}
          friendName={selectedFriend.name}
          friendId={selectedFriend.id}
        />
      )}
    </div>
  );
};

export default FriendsPage;

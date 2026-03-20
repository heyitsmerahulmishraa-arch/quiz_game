import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFriendModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("search"); // search, requests, suggestions

  // Mock data - replace with actual data from your server
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      username: "QuizMaster99",
      name: "Sarah Johnson",
      level: 25,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 3,
      status: "none", // none, pending, sent
    },
    {
      id: 2,
      username: "BrainTeaser",
      name: "Michael Chen",
      level: 30,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 5,
      status: "none",
    },
  ]);

  const [friendRequests, setFriendRequests] = useState([
    {
      id: 3,
      username: "SmartPlayer",
      name: "Emily Davis",
      level: 22,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 2,
      requestDate: "2 hours ago",
    },
    {
      id: 4,
      username: "QuizGenius",
      name: "David Wilson",
      level: 28,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 4,
      requestDate: "1 day ago",
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      id: 5,
      username: "TriviaKing",
      name: "James Brown",
      level: 26,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 8,
      reason: "8 mutual friends",
    },
    {
      id: 6,
      username: "FactFinder",
      name: "Lisa Anderson",
      level: 24,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 6,
      reason: "Plays similar categories",
    },
    {
      id: 7,
      username: "KnowledgeSeeker",
      name: "Robert Taylor",
      level: 29,
      profileImage: "https://via.placeholder.com/50",
      mutualFriends: 5,
      reason: "Same skill level",
    },
  ]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Here you'll call your API to search for users
      console.log("Searching for:", searchQuery);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleSendRequest = (userId) => {
    setSearchResults(
      searchResults.map((user) =>
        user.id === userId ? { ...user, status: "sent" } : user,
      ),
    );
    alert("Friend request sent!");
  };

  const handleAcceptRequest = (userId) => {
    setFriendRequests(friendRequests.filter((req) => req.id !== userId));
    alert("Friend request accepted!");
  };

  const handleRejectRequest = (userId) => {
    setFriendRequests(friendRequests.filter((req) => req.id !== userId));
    alert("Friend request rejected!");
  };

  return (
    <div className="modalOverlay fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="modalContent bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar border-2 sm:border-4 border-white/20 shadow-2xl">
        {/* Header */}
        <div className="modalHeader flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            👥 Add Friends
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl sm:text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="tabsSection flex gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            onClick={() => setSelectedTab("search")}
            className={`tab flex-1 py-2 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all ${
              selectedTab === "search"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            🔍 <span className="hidden sm:inline">Search</span>
          </button>
          <button
            onClick={() => setSelectedTab("requests")}
            className={`tab flex-1 py-2 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all relative ${
              selectedTab === "requests"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            📨 <span className="hidden sm:inline">Requests</span>
            {friendRequests.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                {friendRequests.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab("suggestions")}
            className={`tab flex-1 py-2 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all ${
              selectedTab === "suggestions"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            ✨ <span className="hidden sm:inline">Suggestions</span>
          </button>
        </div>

        {/* Search Tab */}
        {selectedTab === "search" && (
          <div className="searchSection">
            {/* Search Bar */}
            <div className="searchBar flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by username or email..."
                className="flex-1 bg-white/10 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/20 focus:border-blue-400 outline-none placeholder-white/50 text-sm sm:text-base"
              />
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-base font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all"
              >
                Search
              </button>
            </div>

            {/* Search Results */}
            <div className="searchResults space-y-2 sm:space-y-3">
              {searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <div
                    key={user.id}
                    className="userCard bg-white/10 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:bg-white/15 transition-all"
                  >
                    <div
                      onClick={() => navigate(`/user/${user.id}`)}
                      className="flex items-center gap-3 sm:gap-4 flex-1 cursor-pointer w-full sm:w-auto"
                    >
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-400 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm sm:text-base truncate">
                          {user.name}
                        </div>
                        <div className="text-white/60 text-xs sm:text-sm truncate">
                          @{user.username} • Level {user.level}
                        </div>
                        <div className="text-blue-400 text-[10px] sm:text-xs">
                          {user.mutualFriends} mutual friends
                        </div>
                      </div>
                    </div>
                    {user.status === "sent" ? (
                      <button
                        disabled
                        className="bg-gray-600/50 text-white/70 text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg cursor-not-allowed w-full sm:w-auto"
                      >
                        Request Sent
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSendRequest(user.id)}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all w-full sm:w-auto"
                      >
                        Add Friend
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="emptyState text-center py-6 sm:py-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                    🔍
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">
                    Search for users to add as friends
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Friend Requests Tab */}
        {selectedTab === "requests" && (
          <div className="requestsSection">
            <div className="requests space-y-2 sm:space-y-3">
              {friendRequests.length > 0 ? (
                friendRequests.map((request) => (
                  <div
                    key={request.id}
                    className="requestCard bg-white/10 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:bg-white/15 transition-all"
                  >
                    <div
                      onClick={() => navigate(`/user/${request.id}`)}
                      className="flex items-center gap-3 sm:gap-4 flex-1 cursor-pointer w-full sm:w-auto"
                    >
                      <img
                        src={request.profileImage}
                        alt={request.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-yellow-400 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm sm:text-base truncate">
                          {request.name}
                        </div>
                        <div className="text-white/60 text-xs sm:text-sm truncate">
                          @{request.username} • Level {request.level}
                        </div>
                        <div className="text-blue-400 text-[10px] sm:text-xs">
                          {request.mutualFriends} mutual friends •{" "}
                          {request.requestDate}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleAcceptRequest(request.id)}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all flex-1 sm:flex-none"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRejectRequest(request.id)}
                        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-red-400/30 transition-all flex-1 sm:flex-none"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="emptyState text-center py-6 sm:py-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                    📭
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">
                    No pending friend requests
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Suggestions Tab */}
        {selectedTab === "suggestions" && (
          <div className="suggestionsSection">
            <div className="suggestions space-y-2 sm:space-y-3">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="suggestionCard bg-white/10 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:bg-white/15 transition-all"
                >
                  <div
                    onClick={() => navigate(`/user/${suggestion.id}`)}
                    className="flex items-center gap-3 sm:gap-4 flex-1 cursor-pointer w-full sm:w-auto"
                  >
                    <img
                      src={suggestion.profileImage}
                      alt={suggestion.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-purple-400 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-sm sm:text-base truncate">
                        {suggestion.name}
                      </div>
                      <div className="text-white/60 text-xs sm:text-sm truncate">
                        @{suggestion.username} • Level {suggestion.level}
                      </div>
                      <div className="text-purple-400 text-[10px] sm:text-xs">
                        {suggestion.reason}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSendRequest(suggestion.id)}
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all w-full sm:w-auto"
                  >
                    Add Friend
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFriendModal;

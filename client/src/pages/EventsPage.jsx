import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all"); // all, active, upcoming, past
  const [searchQuery, setSearchQuery] = useState("");

  // Mock events data - replace with actual API data
  const allEvents = [
    {
      id: 1,
      title: "Daily Speed Challenge",
      description:
        "Answer 20 questions in 60 seconds and climb the leaderboard",
      longDescription:
        "Test your quick thinking with our daily speed challenge. You'll have exactly 60 seconds to answer 20 rapid-fire questions across multiple categories. Top performers win bonus coins and exclusive speed badges!",
      icon: "⚡",
      type: "Challenge",
      category: "Speed",
      startDate: "Mar 20, 2026",
      endDate: "Mar 20, 2026",
      startTime: "12:00 AM",
      endTime: "11:59 PM",
      participants: 2340,
      maxParticipants: null,
      prize: "500 Coins + Speed Badge",
      difficulty: "Medium",
      status: "active",
      color: "from-yellow-500 to-amber-600",
      requirements: "Level 5+",
      rewards: ["500 Coins", "Speed Demon Badge", "50 XP"],
    },
    {
      id: 2,
      title: "Weekend Quiz Marathon",
      description: "48-hour quiz challenge with special rewards",
      longDescription:
        "Join our epic weekend marathon! Compete in unlimited quizzes over 48 hours. The more you play, the more you earn. Special bonus multipliers apply for streak wins!",
      icon: "🏃",
      type: "Marathon",
      category: "Endurance",
      startDate: "Mar 22, 2026",
      endDate: "Mar 24, 2026",
      startTime: "12:00 AM",
      endTime: "11:59 PM",
      participants: 1250,
      maxParticipants: 5000,
      prize: "5000 Coins + Exclusive Badge",
      difficulty: "Hard",
      status: "upcoming",
      color: "from-orange-500 to-red-600",
      requirements: "Level 10+",
      rewards: [
        "5000 Coins",
        "Marathon Master Badge",
        "500 XP",
        "Special Avatar Frame",
      ],
    },
    {
      id: 3,
      title: "Science Trivia Tournament",
      description: "Test your knowledge in science categories",
      longDescription:
        "Battle it out in the ultimate science showdown! This tournament features questions from Biology, Chemistry, Physics, and Astronomy. Knockout rounds begin after qualifying.",
      icon: "🔬",
      type: "Tournament",
      category: "Science",
      startDate: "Mar 25, 2026",
      endDate: "Mar 27, 2026",
      startTime: "6:00 PM",
      endTime: "10:00 PM",
      participants: 890,
      maxParticipants: 2000,
      prize: "10,000 Coins + Trophy",
      difficulty: "Expert",
      status: "upcoming",
      color: "from-blue-500 to-cyan-600",
      requirements: "Level 15+ | 70% Science Accuracy",
      rewards: [
        "10,000 Coins",
        "Science Master Trophy",
        "1000 XP",
        "Gold Medal Badge",
      ],
    },
    {
      id: 4,
      title: "History Buff Challenge",
      description: "Dive deep into historical events and figures",
      longDescription:
        "From ancient civilizations to modern history, test your knowledge across all eras. Special themed rounds cover World Wars, Ancient Rome, Renaissance, and more!",
      icon: "📜",
      type: "Challenge",
      category: "History",
      startDate: "Mar 23, 2026",
      endDate: "Mar 23, 2026",
      startTime: "3:00 PM",
      endTime: "9:00 PM",
      participants: 567,
      maxParticipants: 1500,
      prize: "2000 Coins",
      difficulty: "Medium",
      status: "upcoming",
      color: "from-amber-600 to-yellow-700",
      requirements: "Level 8+",
      rewards: ["2000 Coins", "History Expert Badge", "200 XP"],
    },
    {
      id: 5,
      title: "Sports Trivia Showdown",
      description: "Ultimate sports knowledge competition",
      longDescription:
        "Call all sports fans! Compete in the ultimate sports trivia covering Football, Basketball, Tennis, Cricket, and Olympic history. Live leaderboard updates!",
      icon: "⚽",
      type: "Tournament",
      category: "Sports",
      startDate: "Mar 21, 2026",
      endDate: "Mar 21, 2026",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
      participants: 1456,
      maxParticipants: 3000,
      prize: "7500 Coins + Medal",
      difficulty: "Hard",
      status: "upcoming",
      color: "from-green-500 to-emerald-600",
      requirements: "Level 12+",
      rewards: ["7500 Coins", "Sports Champion Medal", "750 XP"],
    },
    {
      id: 6,
      title: "Music & Movies Mega Quiz",
      description: "Pop culture entertainment extravaganza",
      longDescription:
        "Lights, camera, action! Test your knowledge of movies, TV shows, music, and celebrities. From classics to current hits, this event covers it all!",
      icon: "🎬",
      type: "Special Event",
      category: "Entertainment",
      startDate: "Mar 26, 2026",
      endDate: "Mar 26, 2026",
      startTime: "8:00 PM",
      endTime: "10:00 PM",
      participants: 1890,
      maxParticipants: 4000,
      prize: "3000 Coins + Star Badge",
      difficulty: "Easy",
      status: "upcoming",
      color: "from-pink-500 to-rose-600",
      requirements: "Level 5+",
      rewards: ["3000 Coins", "Entertainment Star Badge", "300 XP"],
    },
    {
      id: 7,
      title: "Geography Explorer Quest",
      description: "Travel the world through trivia",
      longDescription:
        "Virtual world tour through quiz questions! Explore countries, capitals, landmarks, and geographical features. Special bonus for completing all continents!",
      icon: "🌍",
      type: "Quest",
      category: "Geography",
      startDate: "Mar 24, 2026",
      endDate: "Mar 26, 2026",
      startTime: "All Day",
      endTime: "All Day",
      participants: 723,
      maxParticipants: 2000,
      prize: "4000 Coins + Explorer Badge",
      difficulty: "Medium",
      status: "upcoming",
      color: "from-teal-500 to-cyan-600",
      requirements: "Level 10+",
      rewards: ["4000 Coins", "World Explorer Badge", "400 XP", "Map Icon"],
    },
    {
      id: 8,
      title: "Valentine's Day Special",
      description: "Love & romance themed quiz event",
      longDescription:
        "Celebrate love with romance-themed questions covering romantic movies, love songs, famous couples, and more!",
      icon: "💕",
      type: "Special Event",
      category: "Special",
      startDate: "Feb 14, 2026",
      endDate: "Feb 14, 2026",
      startTime: "All Day",
      endTime: "All Day",
      participants: 3420,
      maxParticipants: 5000,
      prize: "2500 Coins + Heart Badge",
      difficulty: "Easy",
      status: "past",
      color: "from-red-400 to-pink-500",
      requirements: "All Levels",
      rewards: ["2500 Coins", "Cupid Badge", "250 XP"],
    },
    {
      id: 9,
      title: "New Year Knowledge Blast",
      description: "Ring in the new year with trivia",
      longDescription:
        "Started the year with an epic quiz marathon covering all categories! Bonus points for year-end facts and predictions.",
      icon: "🎆",
      type: "Marathon",
      category: "Special",
      startDate: "Jan 1, 2026",
      endDate: "Jan 2, 2026",
      startTime: "12:00 AM",
      endTime: "11:59 PM",
      participants: 5234,
      maxParticipants: 10000,
      prize: "10,000 Coins + 2026 Badge",
      difficulty: "Medium",
      status: "past",
      color: "from-purple-500 to-indigo-600",
      requirements: "All Levels",
      rewards: ["10,000 Coins", "2026 Champion Badge", "1000 XP"],
    },
  ];

  // Filter events based on status and search
  const filteredEvents = allEvents.filter((event) => {
    const matchesFilter =
      selectedFilter === "all" || event.status === selectedFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const badges = {
      active: { text: "🔴 LIVE NOW", color: "bg-green-500 animate-pulse" },
      upcoming: { text: "📅 UPCOMING", color: "bg-blue-500" },
      past: { text: "✓ ENDED", color: "bg-gray-500" },
    };
    return badges[status];
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: "text-green-400",
      Medium: "text-yellow-400",
      Hard: "text-orange-400",
      Expert: "text-red-400",
    };
    return colors[difficulty];
  };

  const eventCounts = {
    all: allEvents.length,
    active: allEvents.filter((e) => e.status === "active").length,
    upcoming: allEvents.filter((e) => e.status === "upcoming").length,
    past: allEvents.filter((e) => e.status === "past").length,
  };

  return (
    <div className="eventsPageContainer h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-3 sm:p-5 md:p-6 overflow-hidden">
      <div className="eventsContent max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="pageHeader mb-4 sm:mb-5 md:mb-6 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <button
              onClick={() => navigate("/")}
              className="backButton bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-2.5 md:p-3 rounded-xl border border-white/20 transition-all shrink-0"
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
                🎉 Events & Tournaments
              </h1>
              <p className="text-white/70 text-xs sm:text-sm md:text-base hidden sm:block">
                Join exciting challenges and win amazing rewards
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="searchBar mb-3 sm:mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events by name, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md text-white placeholder-white/50 px-4 sm:px-5 py-2.5 sm:py-3 md:py-3.5 pl-12 sm:pl-14 rounded-xl sm:rounded-2xl border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
              <svg
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="filterTabs flex gap-2 sm:gap-3 overflow-x-auto pb-2">
            {[
              { key: "all", label: "All Events", icon: "🎯" },
              { key: "active", label: "Live Now", icon: "🔴" },
              { key: "upcoming", label: "Upcoming", icon: "📅" },
              { key: "past", label: "Past", icon: "✓" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all whitespace-nowrap ${
                  selectedFilter === filter.key
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
                <span className="ml-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-[10px] sm:text-xs font-bold">
                  {eventCounts[filter.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid - Scrollable */}
        <div className="eventsGrid flex-1 overflow-y-auto overflow-x-hidden min-h-0">
          {filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🔍</div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
                No Events Found
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`eventCard bg-gradient-to-br ${event.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-white/20 shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
                  onClick={() =>
                    alert(
                      `Event Details: ${event.title}\n\n${event.longDescription}\n\nRequirements: ${event.requirements}\n\nClick to join!`,
                    )
                  }
                >
                  {/* Status Badge */}
                  <div
                    className={`absolute top-2 right-2 sm:top-3 sm:right-3 ${getStatusBadge(event.status).color} text-white font-bold text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full`}
                  >
                    {getStatusBadge(event.status).text}
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl shrink-0">
                      {event.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-start gap-2 mb-1">
                        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl line-clamp-2 flex-1">
                          {event.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white/20 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold">
                          {event.type}
                        </span>
                        <span
                          className={`${getDifficultyColor(event.difficulty)} text-[10px] sm:text-xs font-bold`}
                        >
                          ⭐ {event.difficulty}
                        </span>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5">
                      <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                        📅 Date
                      </div>
                      <div className="text-white font-semibold text-xs sm:text-sm truncate">
                        {event.startDate.split(",")[0]}
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-2.5">
                      <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                        ⏰ Time
                      </div>
                      <div className="text-white font-semibold text-xs sm:text-sm truncate">
                        {event.startTime}
                      </div>
                    </div>
                  </div>

                  {/* Participants Progress */}
                  {event.maxParticipants && (
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white/80 text-[10px] sm:text-xs">
                          👥 Participants
                        </span>
                        <span className="text-white font-bold text-xs sm:text-sm">
                          {event.participants.toLocaleString()} /{" "}
                          {event.maxParticipants.toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div
                          className="bg-white h-full rounded-full transition-all"
                          style={{
                            width: `${(event.participants / event.maxParticipants) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Prize Section */}
                  <div className="pt-3 sm:pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-white/80 text-[10px] sm:text-xs mb-0.5">
                          🏆 Prize
                        </div>
                        <div className="text-white font-bold text-xs sm:text-sm md:text-base truncate">
                          {event.prize}
                        </div>
                      </div>
                      <button
                        className={`shrink-0 font-bold text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg transition-all transform hover:scale-105 ${
                          event.status === "active"
                            ? "bg-green-500 hover:bg-green-600 text-white animate-pulse"
                            : event.status === "upcoming"
                              ? "bg-white hover:bg-white/90 text-gray-900"
                              : "bg-white/30 text-white/50 cursor-not-allowed"
                        }`}
                        disabled={event.status === "past"}
                      >
                        {event.status === "active"
                          ? "Join Now"
                          : event.status === "upcoming"
                            ? "Register"
                            : "Ended"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

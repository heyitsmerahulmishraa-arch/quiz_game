import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all, active, inactive, banned
  const [filterRole, setFilterRole] = useState("all"); // all, user, premium, admin
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, mostActive, name

  // Mock users data - replace with actual API calls
  const allUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      role: "premium",
      status: "active",
      level: 25,
      quizzes: 345,
      score: 45680,
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      username: "sarahw",
      role: "user",
      status: "active",
      level: 18,
      quizzes: 234,
      score: 32450,
      joinDate: "2024-02-20",
      lastActive: "10 minutes ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      username: "mikechen",
      role: "premium",
      status: "active",
      level: 32,
      quizzes: 567,
      score: 78920,
      joinDate: "2023-11-10",
      lastActive: "1 day ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      username: "emmad",
      role: "user",
      status: "inactive",
      level: 12,
      quizzes: 89,
      score: 12340,
      joinDate: "2024-03-05",
      lastActive: "2 weeks ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@quizapp.com",
      username: "admin",
      role: "admin",
      status: "active",
      level: 50,
      quizzes: 0,
      score: 0,
      joinDate: "2023-01-01",
      lastActive: "Just now",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "BadUser123",
      email: "baduser@example.com",
      username: "baduser123",
      role: "user",
      status: "banned",
      level: 8,
      quizzes: 45,
      score: 5670,
      joinDate: "2024-02-28",
      lastActive: "1 month ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      name: "Alex Morgan",
      email: "alex.morgan@example.com",
      username: "alexm",
      role: "premium",
      status: "active",
      level: 28,
      quizzes: 423,
      score: 56780,
      joinDate: "2023-12-15",
      lastActive: "3 hours ago",
      profileImage: "https://via.placeholder.com/50",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      email: "lisa.a@example.com",
      username: "lisaa",
      role: "user",
      status: "active",
      level: 15,
      quizzes: 178,
      score: 23450,
      joinDate: "2024-01-25",
      lastActive: "5 hours ago",
      profileImage: "https://via.placeholder.com/50",
    },
  ];

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.joinDate) - new Date(a.joinDate);
    if (sortBy === "oldest") return new Date(a.joinDate) - new Date(b.joinDate);
    if (sortBy === "mostActive") return b.quizzes - a.quizzes;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === sortedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(sortedUsers.map((user) => user.id));
    }
  };

  const handleBulkAction = (action) => {
    if (selectedUsers.length === 0) {
      alert("Please select users first");
      return;
    }
    alert(`${action} action for ${selectedUsers.length} users`);
    setSelectedUsers([]);
  };

  const handleUserAction = (userId, action) => {
    const user = allUsers.find((u) => u.id === userId);
    alert(`${action} action for user: ${user.name}`);
  };

  const getRoleBadge = (role) => {
    if (role === "admin") return "bg-red-500/20 text-red-400 border-red-500/30";
    if (role === "premium")
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  };

  const getStatusColor = (status) => {
    if (status === "active") return "bg-green-500";
    if (status === "inactive") return "bg-gray-500";
    return "bg-red-500";
  };

  const stats = {
    total: allUsers.length,
    active: allUsers.filter((u) => u.status === "active").length,
    premium: allUsers.filter((u) => u.role === "premium").length,
    banned: allUsers.filter((u) => u.status === "banned").length,
  };

  return (
    <div className="adminUsersPage min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="pageHeader mb-8">
          <button
            onClick={() => navigate("/admin")}
            className="text-white/70 hover:text-white mb-3 flex items-center gap-2 transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Dashboard</span>
          </button>
          <h1 className="text-white font-bold text-4xl mb-2">
            👥 User Management
          </h1>
          <p className="text-white/70">Manage and monitor all users</p>
        </div>

        {/* Stats Overview */}
        <div className="statsGrid grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-sm mb-1">Total Users</div>
            <div className="text-white font-bold text-3xl">{stats.total}</div>
          </div>
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-sm mb-1">Active Users</div>
            <div className="text-green-400 font-bold text-3xl">
              {stats.active}
            </div>
          </div>
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-sm mb-1">Premium Users</div>
            <div className="text-yellow-400 font-bold text-3xl">
              {stats.premium}
            </div>
          </div>
          <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <div className="text-white/70 text-sm mb-1">Banned Users</div>
            <div className="text-red-400 font-bold text-3xl">
              {stats.banned}
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="filtersSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="searchBox">
              <label className="text-white/70 text-sm mb-2 block">Search</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Name, email, or username..."
                className="w-full bg-white/5 text-white px-4 py-2 rounded-xl border border-white/20 focus:border-blue-400 outline-none placeholder-white/50"
              />
            </div>

            {/* Status Filter */}
            <div className="statusFilter">
              <label className="text-white/70 text-sm mb-2 block">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl border border-white/20 focus:border-blue-400 outline-none cursor-pointer hover:bg-gray-750 transition-colors"
                style={{ colorScheme: "dark" }}
              >
                <option value="all" className="bg-gray-800 text-white">
                  All Status
                </option>
                <option value="active" className="bg-gray-800 text-white">
                  Active
                </option>
                <option value="inactive" className="bg-gray-800 text-white">
                  Inactive
                </option>
                <option value="banned" className="bg-gray-800 text-white">
                  Banned
                </option>
              </select>
            </div>

            {/* Role Filter */}
            <div className="roleFilter">
              <label className="text-white/70 text-sm mb-2 block">Role</label>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl border border-white/20 focus:border-blue-400 outline-none cursor-pointer hover:bg-gray-750 transition-colors"
                style={{ colorScheme: "dark" }}
              >
                <option value="all" className="bg-gray-800 text-white">
                  All Roles
                </option>
                <option value="user" className="bg-gray-800 text-white">
                  User
                </option>
                <option value="premium" className="bg-gray-800 text-white">
                  Premium
                </option>
                <option value="admin" className="bg-gray-800 text-white">
                  Admin
                </option>
              </select>
            </div>

            {/* Sort By */}
            <div className="sortBy">
              <label className="text-white/70 text-sm mb-2 block">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl border border-white/20 focus:border-blue-400 outline-none cursor-pointer hover:bg-gray-750 transition-colors"
                style={{ colorScheme: "dark" }}
              >
                <option value="newest" className="bg-gray-800 text-white">
                  Newest First
                </option>
                <option value="oldest" className="bg-gray-800 text-white">
                  Oldest First
                </option>
                <option value="mostActive" className="bg-gray-800 text-white">
                  Most Active
                </option>
                <option value="name" className="bg-gray-800 text-white">
                  Name (A-Z)
                </option>
              </select>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="bulkActions mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-white/70 text-sm">
                  {selectedUsers.length} user(s) selected
                </span>
                <button
                  onClick={() => handleBulkAction("Delete")}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold px-4 py-2 rounded-lg border border-red-400/30 transition-all text-sm"
                >
                  Delete Selected
                </button>
                <button
                  onClick={() => handleBulkAction("Ban")}
                  className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-bold px-4 py-2 rounded-lg border border-orange-400/30 transition-all text-sm"
                >
                  Ban Selected
                </button>
                <button
                  onClick={() => handleBulkAction("Export")}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-bold px-4 py-2 rounded-lg border border-blue-400/30 transition-all text-sm"
                >
                  Export Data
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Users List */}
        <div className="usersListSection bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          {/* Table Header */}
          <div className="tableHeader bg-white/5 p-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={
                  selectedUsers.length === sortedUsers.length &&
                  sortedUsers.length > 0
                }
                onChange={handleSelectAll}
                className="w-4 h-4 accent-blue-500"
              />
              <div className="text-white font-semibold text-sm flex-1">
                Users ({sortedUsers.length})
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="usersTable max-h-[600px] overflow-y-auto custom-scrollbar">
            {sortedUsers.map((user) => (
              <div
                key={user.id}
                className="userRow flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-all"
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                  className="w-4 h-4 accent-blue-500"
                />

                {/* User Info */}
                <div className="userInfo flex items-center gap-4 flex-1">
                  <div className="relative">
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-400"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${getStatusColor(user.status)}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {user.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${getRoleBadge(user.role)} font-semibold uppercase`}
                      >
                        {user.role}
                      </span>
                    </div>
                    <div className="text-white/60 text-sm">
                      @{user.username} • {user.email}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="userStats hidden lg:flex gap-6">
                  <div className="text-center">
                    <div className="text-white/50 text-xs">Level</div>
                    <div className="text-white font-bold">{user.level}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/50 text-xs">Quizzes</div>
                    <div className="text-white font-bold">{user.quizzes}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/50 text-xs">Score</div>
                    <div className="text-white font-bold">
                      {user.score.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Last Active */}
                <div className="lastActive hidden md:block text-white/50 text-sm text-right min-w-[100px]">
                  {user.lastActive}
                </div>

                {/* Actions */}
                <div className="userActions flex gap-2">
                  <button
                    onClick={() => navigate(`/user/${user.id}`)}
                    className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-bold px-3 py-2 rounded-lg border border-blue-400/30 transition-all text-sm"
                  >
                    View
                  </button>
                  {user.status !== "banned" ? (
                    <button
                      onClick={() => handleUserAction(user.id, "Ban")}
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold px-3 py-2 rounded-lg border border-red-400/30 transition-all text-sm"
                    >
                      Ban
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUserAction(user.id, "Unban")}
                      className="bg-green-500/20 hover:bg-green-500/30 text-green-400 font-bold px-3 py-2 rounded-lg border border-green-400/30 transition-all text-sm"
                    >
                      Unban
                    </button>
                  )}
                </div>
              </div>
            ))}

            {sortedUsers.length === 0 && (
              <div className="emptyState text-center py-12">
                <div className="text-6xl mb-3">🔍</div>
                <div className="text-white/70 text-lg">No users found</div>
                <div className="text-white/50 text-sm">
                  Try adjusting your filters
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersPage;

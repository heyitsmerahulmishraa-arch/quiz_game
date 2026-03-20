import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <div className="friendsListSection bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 flex flex-col flex-1 overflow-hidden">
      <div className="friendsHeader flex justify-between items-center mb-4">
        <h3 className="text-white font-bold text-lg">Friends</h3>
        <button className="text-green-400 hover:text-green-300 text-sm font-semibold">
          + Add
        </button>
      </div>

      <div className="friendsList overflow-y-auto custom-scrollbar flex-1">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="friendItem flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer mb-2"
          >
            <div className="friendImageContainer relative">
              <img
                src={friend.profileImage}
                alt={friend.name}
                className="w-12 h-12 rounded-full border-2 border-green-400 object-cover"
              />
              <div className="onlineStatus absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="friendInfo flex-1">
              <h4 className="text-white font-semibold text-sm">
                {friend.name}
              </h4>
              <p className="text-white/60 text-xs">Level {friend.level}</p>
            </div>

            <button className="challengeBtn bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full transition-all">
              Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;

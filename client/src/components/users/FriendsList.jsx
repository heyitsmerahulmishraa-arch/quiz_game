import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddFriendModal from "./AddFriendModal";
import ChallengeModal from "../quiz/ChallengeModal";

const FriendsList = ({ friends }) => {
  const navigate = useNavigate();
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <>
      <div className="friendsListSection bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-white/20 flex flex-col flex-1 overflow-hidden">
        <div className="friendsHeader flex justify-between items-center mb-3 md:mb-4">
          <h3 className="text-white font-bold text-base md:text-lg">Friends</h3>
          <button
            onClick={() => setShowAddFriendModal(true)}
            className="text-green-400 hover:text-green-300 text-xs md:text-sm font-semibold transition-colors"
          >
            + Add
          </button>
        </div>

        <div className="friendsList overflow-y-auto custom-scrollbar flex-1">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="friendItem flex items-center gap-2 md:gap-3 p-2 rounded-lg hover:bg-white/10 transition-all mb-2 cursor-pointer"
            >
              <div
                onClick={() => navigate(`/user/${friend.id}`)}
                className="flex items-center gap-2 md:gap-3 flex-1 min-w-0"
              >
                <div className="friendImageContainer relative flex-shrink-0">
                  <img
                    src={friend.profileImage}
                    alt={friend.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-green-400 object-cover"
                  />
                  <div className="onlineStatus absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                <div className="friendInfo flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-xs md:text-sm truncate">
                    {friend.name}
                  </h4>
                  <p className="text-white/60 text-xs">Level {friend.level}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedFriend(friend);
                  setShowChallengeModal(true);
                }}
                className="challengeBtn bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full transition-all flex-shrink-0"
              >
                Challenge
              </button>
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
    </>
  );
};

export default FriendsList;

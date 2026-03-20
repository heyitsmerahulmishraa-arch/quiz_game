import React from "react";

const ProfileSection = ({ userData }) => {
  return (
    <div className="profileSection bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
      <div className="profileHeader flex items-center gap-4">
        <div className="profileImageContainer relative">
          <img
            src={userData.profileImage}
            alt={userData.name}
            className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
          <div className="levelBadge absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xs px-2 py-1 rounded-full shadow-lg">
            Lv {userData.level}
          </div>
        </div>

        <div className="profileInfo flex-1">
          <h2 className="text-white font-bold text-xl">{userData.name}</h2>
          <div className="levelProgress mt-2">
            <div className="flex justify-between text-xs text-white/80 mb-1">
              <span>Level {userData.level}</span>
              <span>75%</span>
            </div>
            <div className="progressBar bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="profileStats grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/20">
        <div className="stat text-center">
          <div className="text-yellow-400 font-bold text-lg">245</div>
          <div className="text-white/70 text-xs">Points</div>
        </div>
        <div className="stat text-center">
          <div className="text-green-400 font-bold text-lg">89</div>
          <div className="text-white/70 text-xs">Wins</div>
        </div>
        <div className="stat text-center">
          <div className="text-blue-400 font-bold text-lg">12</div>
          <div className="text-white/70 text-xs">Streak</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

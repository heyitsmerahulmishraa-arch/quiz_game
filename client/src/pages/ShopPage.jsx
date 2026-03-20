import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("powerups");
  const [userCoins, setUserCoins] = useState(2450); // Mock data - replace with actual user coins

  const categories = [
    { id: "powerups", name: "Power-Ups", icon: "⚡" },
    { id: "avatars", name: "Avatars", icon: "👤" },
    { id: "themes", name: "Themes", icon: "🎨" },
    { id: "boosters", name: "Boosters", icon: "🚀" },
  ];

  const shopItems = {
    powerups: [
      {
        id: 1,
        name: "50-50",
        description: "Remove 2 wrong answers",
        price: 150,
        icon: "🎯",
        owned: false,
      },
      {
        id: 2,
        name: "Time Freeze",
        description: "Freeze timer for 10 seconds",
        price: 200,
        icon: "⏸️",
        owned: false,
      },
      {
        id: 3,
        name: "Extra Life",
        description: "Get one more chance",
        price: 250,
        icon: "❤️",
        owned: true,
      },
      {
        id: 4,
        name: "Skip Question",
        description: "Skip difficult question",
        price: 100,
        icon: "⏭️",
        owned: false,
      },
      {
        id: 5,
        name: "Hint Master",
        description: "Get helpful hints",
        price: 180,
        icon: "💡",
        owned: false,
      },
      {
        id: 6,
        name: "Double Points",
        description: "2x points for next game",
        price: 300,
        icon: "✨",
        owned: false,
      },
    ],
    avatars: [
      {
        id: 7,
        name: "Ninja Avatar",
        description: "Look like a quiz ninja",
        price: 500,
        icon: "🥷",
        owned: false,
      },
      {
        id: 8,
        name: "Crown Avatar",
        description: "Show your royalty",
        price: 800,
        icon: "👑",
        owned: false,
      },
      {
        id: 9,
        name: "Wizard Avatar",
        description: "Magical appearance",
        price: 600,
        icon: "🧙",
        owned: true,
      },
      {
        id: 10,
        name: "Robot Avatar",
        description: "Futuristic look",
        price: 450,
        icon: "🤖",
        owned: false,
      },
      {
        id: 11,
        name: "Unicorn Avatar",
        description: "Rare and magical",
        price: 1000,
        icon: "🦄",
        owned: false,
      },
      {
        id: 12,
        name: "Space Avatar",
        description: "Out of this world",
        price: 750,
        icon: "👨‍🚀",
        owned: false,
      },
    ],
    themes: [
      {
        id: 13,
        name: "Dark Mode",
        description: "Easy on the eyes",
        price: 300,
        icon: "🌙",
        owned: true,
      },
      {
        id: 14,
        name: "Ocean Theme",
        description: "Deep blue colors",
        price: 400,
        icon: "🌊",
        owned: false,
      },
      {
        id: 15,
        name: "Forest Theme",
        description: "Natural green tones",
        price: 400,
        icon: "🌲",
        owned: false,
      },
      {
        id: 16,
        name: "Sunset Theme",
        description: "Warm orange vibes",
        price: 450,
        icon: "🌅",
        owned: false,
      },
      {
        id: 17,
        name: "Galaxy Theme",
        description: "Cosmic experience",
        price: 600,
        icon: "🌌",
        owned: false,
      },
      {
        id: 18,
        name: "Neon Theme",
        description: "Vibrant and modern",
        price: 550,
        icon: "💫",
        owned: false,
      },
    ],
    boosters: [
      {
        id: 19,
        name: "XP Booster",
        description: "2x XP for 24 hours",
        price: 350,
        icon: "📈",
        owned: false,
      },
      {
        id: 20,
        name: "Coin Multiplier",
        description: "1.5x coins for 12 hours",
        price: 400,
        icon: "💰",
        owned: false,
      },
      {
        id: 21,
        name: "Streak Saver",
        description: "Protect your streak",
        price: 250,
        icon: "🔥",
        owned: false,
      },
      {
        id: 22,
        name: "Lucky Charm",
        description: "Better odds for 5 games",
        price: 500,
        icon: "🍀",
        owned: false,
      },
      {
        id: 23,
        name: "VIP Pass",
        description: "Premium features for 7 days",
        price: 1200,
        icon: "⭐",
        owned: false,
      },
      {
        id: 24,
        name: "Mega Bundle",
        description: "All boosters combo",
        price: 2000,
        icon: "🎁",
        owned: false,
      },
    ],
  };

  const handlePurchase = (item) => {
    if (item.owned) {
      alert("You already own this item!");
      return;
    }

    if (userCoins >= item.price) {
      setUserCoins(userCoins - item.price);
      alert(`Successfully purchased ${item.name}!`);
      // Here you'll update the item's owned status in your backend
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <div className="shopPageContainer min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="shopContent max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="pageHeader mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="backButton bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 transition-all"
              >
                <svg
                  className="w-6 h-6"
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
                <h1 className="text-white font-bold text-4xl">🛍️ Shop</h1>
                <p className="text-white/70 text-sm">
                  Purchase power-ups and customizations
                </p>
              </div>
            </div>

            {/* User Balance */}
            <div className="balanceCard bg-gradient-to-r from-yellow-500 to-orange-600 backdrop-blur-md rounded-2xl px-6 py-4 border-2 border-yellow-400/50 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-4xl">💰</div>
                <div>
                  <div className="text-white/80 text-xs font-semibold">
                    Your Balance
                  </div>
                  <div className="text-white font-bold text-2xl">
                    {userCoins.toLocaleString()} Coins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="categoriesSection mb-6">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-tab px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="itemsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {shopItems[selectedCategory].map((item) => (
            <div
              key={item.id}
              className="shopItemCard bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all hover:scale-105 transform"
            >
              <div className="flex flex-col h-full">
                {/* Item Icon */}
                <div className="itemIcon text-6xl mb-4 text-center">
                  {item.icon}
                </div>

                {/* Item Info */}
                <div className="itemInfo flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Price and Button */}
                <div className="itemFooter">
                  <div className="priceTag bg-white/10 rounded-lg p-3 mb-3 flex items-center justify-center gap-2">
                    <span className="text-yellow-400 text-2xl">💰</span>
                    <span className="text-white font-bold text-xl">
                      {item.price}
                    </span>
                    <span className="text-white/70 text-sm">coins</span>
                  </div>

                  {item.owned ? (
                    <button
                      disabled
                      className="w-full bg-green-500/50 text-white font-bold py-3 px-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Owned
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePurchase(item)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                      Purchase
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Offers */}
        <div className="featuredSection mb-6">
          <h2 className="text-white font-bold text-2xl mb-4">
            ⭐ Featured Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="offerCard bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-md rounded-2xl p-6 border-2 border-pink-400/30">
              <div className="flex items-center gap-4">
                <div className="text-6xl">🎉</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">
                    Starter Pack
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    Get 5 power-ups + 500 bonus coins
                  </p>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-2 px-6 rounded-lg transition-all">
                    Buy for 1000 coins
                  </button>
                </div>
              </div>
            </div>

            <div className="offerCard bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-400/30">
              <div className="flex items-center gap-4">
                <div className="text-6xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">
                    Premium Bundle
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    Unlock all themes + 3 exclusive avatars
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all">
                    Buy for 2500 coins
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Earn Coins */}
        <div className="earnCoinsSection bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h2 className="text-white font-bold text-2xl mb-4">
            💡 How to Earn More Coins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="earnMethod bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="text-white font-semibold mb-1">Play Games</h3>
              <p className="text-white/70 text-sm">
                Earn 50-100 coins per game based on performance
              </p>
            </div>
            <div className="earnMethod bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-white font-semibold mb-1">Daily Tasks</h3>
              <p className="text-white/70 text-sm">
                Complete tasks for bonus coins every day
              </p>
            </div>
            <div className="earnMethod bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">🏅</div>
              <h3 className="text-white font-semibold mb-1">Achievements</h3>
              <p className="text-white/70 text-sm">
                Unlock achievements to earn special rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

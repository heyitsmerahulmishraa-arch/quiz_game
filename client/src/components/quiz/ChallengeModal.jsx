import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChallengeModal = ({ onClose, friendName, friendId }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [challengeMode, setChallengeMode] = useState("real-time"); // real-time or async

  const categories = [
    { id: "general", name: "General Knowledge", icon: "🌍" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "history", name: "History", icon: "📚" },
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "entertainment", name: "Entertainment", icon: "🎬" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "geography", name: "Geography", icon: "🗺️" },
    { id: "music", name: "Music", icon: "🎵" },
  ];

  const difficulties = [
    { id: "easy", name: "Easy", color: "from-green-500 to-emerald-600" },
    { id: "medium", name: "Medium", color: "from-yellow-500 to-orange-600" },
    { id: "hard", name: "Hard", color: "from-red-500 to-rose-600" },
  ];

  const handleSendChallenge = () => {
    if (!selectedCategory || !selectedDifficulty) {
      alert("Please select category and difficulty level!");
      return;
    }

    // Get category name
    const categoryName =
      categories.find((c) => c.id === selectedCategory)?.name ||
      selectedCategory;

    // Navigate to quiz page with challenge data
    navigate("/quiz", {
      state: {
        category: categoryName,
        difficulty: selectedDifficulty,
        questionCount: numberOfQuestions,
        challengeMode: true,
        opponent: {
          name: friendName,
          id: friendId,
        },
      },
    });

    // Close modal
    onClose();
  };

  return (
    <div className="modalOverlay fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="modalContent bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar border-4 border-white/20 shadow-2xl">
        {/* Header */}
        <div className="modalHeader text-center mb-6">
          <div className="text-5xl mb-3">⚔️</div>
          <h2 className="text-white font-bold text-3xl mb-2">
            Challenge {friendName}
          </h2>
          <p className="text-white/70">
            Select quiz settings and battle it out!
          </p>
        </div>

        {/* Challenge Mode Selection */}
        <div className="challengeModeSection mb-6">
          <h3 className="text-white font-semibold text-xl mb-4">
            Challenge Mode
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setChallengeMode("real-time")}
              className={`p-4 rounded-xl border-2 transition-all ${
                challengeMode === "real-time"
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-white shadow-lg scale-105"
                  : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
              }`}
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-bold mb-1">Real-Time</div>
              <div className="text-white/70 text-xs">Play simultaneously</div>
            </button>
            <button
              onClick={() => setChallengeMode("async")}
              className={`p-4 rounded-xl border-2 transition-all ${
                challengeMode === "async"
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-white shadow-lg scale-105"
                  : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
              }`}
            >
              <div className="text-3xl mb-2">📨</div>
              <div className="text-white font-bold mb-1">Async</div>
              <div className="text-white/70 text-xs">Play when ready</div>
            </button>
          </div>
        </div>

        {/* Category Selection */}
        <div className="categorySection mb-6">
          <h3 className="text-white font-semibold text-xl mb-4">
            Select Category
          </h3>
          <div className="categoriesGrid grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`categoryButton p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 border-white shadow-lg scale-105"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
                }`}
              >
                <div className="text-3xl mb-1">{category.icon}</div>
                <div className="text-white font-semibold text-xs">
                  {category.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="difficultySection mb-6">
          <h3 className="text-white font-semibold text-xl mb-4">
            Select Difficulty
          </h3>
          <div className="difficultiesGrid grid grid-cols-3 gap-3">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`difficultyButton p-4 rounded-xl border-2 transition-all ${
                  selectedDifficulty === difficulty.id
                    ? `bg-gradient-to-br ${difficulty.color} border-white shadow-lg scale-105`
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
                }`}
              >
                <div className="text-white font-bold text-lg">
                  {difficulty.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Questions */}
        <div className="questionsSection mb-6">
          <h3 className="text-white font-semibold text-xl mb-4">
            Number of Questions
          </h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setNumberOfQuestions(Math.max(5, numberOfQuestions - 5))
              }
              className="bg-white/10 hover:bg-white/20 text-white font-bold w-12 h-12 rounded-xl border-2 border-white/20 transition-all"
            >
              -
            </button>
            <div className="flex-1 bg-white/10 rounded-xl p-4 border-2 border-white/20">
              <div className="text-white font-bold text-3xl text-center">
                {numberOfQuestions}
              </div>
            </div>
            <button
              onClick={() =>
                setNumberOfQuestions(Math.min(50, numberOfQuestions + 5))
              }
              className="bg-white/10 hover:bg-white/20 text-white font-bold w-12 h-12 rounded-xl border-2 border-white/20 transition-all"
            >
              +
            </button>
          </div>
          <div className="mt-2 text-center">
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actionButtonsSection flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold py-4 px-6 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSendChallenge}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            ⚔️ Send Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeModal;

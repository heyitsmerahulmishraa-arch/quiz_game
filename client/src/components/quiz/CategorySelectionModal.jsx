import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySelectionModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

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

  const handleStartQuiz = () => {
    if (!selectedCategory || !selectedDifficulty) {
      alert("Please select category and difficulty level!");
      return;
    }

    // Get category name
    const categoryName =
      categories.find((c) => c.id === selectedCategory)?.name ||
      selectedCategory;

    // Navigate to quiz page with state
    navigate("/quiz", {
      state: {
        category: categoryName,
        difficulty: selectedDifficulty,
        questionCount: numberOfQuestions,
      },
    });

    // Close modal
    onClose();
  };

  return (
    <div className="modalOverlay fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="modalContent bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar border-2 sm:border-4 border-white/20 shadow-2xl">
        {/* Header */}
        <div className="modalHeader flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            Start New Quiz
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl sm:text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>

        {/* Category Selection */}
        <div className="categorySection mb-4 sm:mb-6">
          <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Select Category
          </h3>
          <div className="categoriesGrid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`categoryButton p-3 sm:p-4 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 border-white shadow-lg scale-105"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
                }`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                  {category.icon}
                </div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  {category.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="difficultySection mb-4 sm:mb-6">
          <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Select Difficulty
          </h3>
          <div className="difficultiesGrid grid grid-cols-3 gap-2 sm:gap-3">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`difficultyButton p-3 sm:p-4 rounded-xl border-2 transition-all ${
                  selectedDifficulty === difficulty.id
                    ? `bg-gradient-to-br ${difficulty.color} border-white shadow-lg scale-105`
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105"
                }`}
              >
                <div className="text-white font-bold text-sm sm:text-base md:text-lg">
                  {difficulty.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Questions */}
        <div className="questionsSection mb-4 sm:mb-6">
          <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Number of Questions
          </h3>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() =>
                setNumberOfQuestions(Math.max(5, numberOfQuestions - 5))
              }
              className="bg-white/10 hover:bg-white/20 text-white font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-white/20 transition-all"
            >
              -
            </button>
            <div className="flex-1 bg-white/10 rounded-xl p-3 sm:p-4 border-2 border-white/20">
              <div className="text-white font-bold text-2xl sm:text-3xl text-center">
                {numberOfQuestions}
              </div>
            </div>
            <button
              onClick={() =>
                setNumberOfQuestions(Math.min(50, numberOfQuestions + 5))
              }
              className="bg-white/10 hover:bg-white/20 text-white font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-white/20 transition-all"
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
              className="w-full accent-green-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actionButtonsSection flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white text-sm sm:text-base font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleStartQuiz}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm sm:text-base font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionModal;

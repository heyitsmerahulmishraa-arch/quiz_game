import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminQuestionsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewQuestion, setPreviewQuestion] = useState(null);

  // Mock questions data
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      category: "Geography",
      difficulty: "easy",
      type: "multiple",
      status: "active",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
      points: 10,
      timeLimit: 15,
      createdAt: "2026-03-15",
      usageCount: 245,
    },
    {
      id: 2,
      question: "What is the chemical symbol for gold?",
      category: "Science",
      difficulty: "medium",
      type: "multiple",
      status: "active",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au",
      points: 20,
      timeLimit: 15,
      createdAt: "2026-03-14",
      usageCount: 189,
    },
    {
      id: 3,
      question: "In which year did World War II end?",
      category: "History",
      difficulty: "easy",
      type: "multiple",
      status: "active",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: "1945",
      points: 10,
      timeLimit: 15,
      createdAt: "2026-03-13",
      usageCount: 312,
    },
    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      category: "Science",
      difficulty: "easy",
      type: "multiple",
      status: "active",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correctAnswer: "Jupiter",
      points: 10,
      timeLimit: 15,
      createdAt: "2026-03-12",
      usageCount: 421,
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      category: "Arts",
      difficulty: "medium",
      type: "multiple",
      status: "active",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      correctAnswer: "Leonardo da Vinci",
      points: 20,
      timeLimit: 15,
      createdAt: "2026-03-11",
      usageCount: 276,
    },
    {
      id: 6,
      question: "What is the speed of light in vacuum?",
      category: "Science",
      difficulty: "hard",
      type: "multiple",
      status: "pending",
      options: [
        "299,792 km/s",
        "300,000 km/s",
        "299,792,458 m/s",
        "Both A and C",
      ],
      correctAnswer: "Both A and C",
      points: 30,
      timeLimit: 20,
      createdAt: "2026-03-10",
      usageCount: 0,
    },
    {
      id: 7,
      question:
        "Which programming language is known for its use in web development?",
      category: "Technology",
      difficulty: "easy",
      type: "multiple",
      status: "active",
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswer: "JavaScript",
      points: 10,
      timeLimit: 15,
      createdAt: "2026-03-09",
      usageCount: 198,
    },
    {
      id: 8,
      question: "What is the currency of Japan?",
      category: "Geography",
      difficulty: "easy",
      type: "multiple",
      status: "inactive",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      correctAnswer: "Yen",
      points: 10,
      timeLimit: 15,
      createdAt: "2026-03-08",
      usageCount: 156,
    },
  ]);

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || q.category === categoryFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || q.difficulty === difficultyFilter;
    const matchesStatus = statusFilter === "all" || q.status === statusFilter;

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesStatus
    );
  });

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedQuestions(filteredQuestions.map((q) => q.id));
    } else {
      setSelectedQuestions([]);
    }
  };

  // Handle individual selection
  const handleSelectQuestion = (id) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter((qid) => qid !== id));
    } else {
      setSelectedQuestions([...selectedQuestions, id]);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    if (window.confirm(`Delete ${selectedQuestions.length} questions?`)) {
      setQuestions(questions.filter((q) => !selectedQuestions.includes(q.id)));
      setSelectedQuestions([]);
    }
  };

  // Handle bulk status change
  const handleBulkStatusChange = (status) => {
    setQuestions(
      questions.map((q) =>
        selectedQuestions.includes(q.id) ? { ...q, status } : q,
      ),
    );
    setSelectedQuestions([]);
  };

  // Handle delete question
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((q) => q.id !== id));
    }
  };

  // Handle edit question
  const handleEdit = (question) => {
    setEditingQuestion(question);
    setShowAddModal(true);
  };

  // Handle preview
  const handlePreview = (question) => {
    setPreviewQuestion(question);
    setShowPreviewModal(true);
  };

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "inactive":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin")}
              className="p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
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
              <h1 className="text-3xl font-bold text-white mb-1">
                Questions Management
              </h1>
              <p className="text-white/60">Manage quiz questions and content</p>
            </div>
          </div>
          <button
            onClick={() => {
              setEditingQuestion(null);
              setShowAddModal(true);
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all shadow-lg"
          >
            + Add Question
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4">
            <div className="text-white/60 text-sm mb-1">Total Questions</div>
            <div className="text-2xl font-bold text-white">
              {questions.length}
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4">
            <div className="text-white/60 text-sm mb-1">Active</div>
            <div className="text-2xl font-bold text-green-400">
              {questions.filter((q) => q.status === "active").length}
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4">
            <div className="text-white/60 text-sm mb-1">Pending Review</div>
            <div className="text-2xl font-bold text-yellow-400">
              {questions.filter((q) => q.status === "pending").length}
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4">
            <div className="text-white/60 text-sm mb-1">Categories</div>
            <div className="text-2xl font-bold text-white">
              {new Set(questions.map((q) => q.category)).size}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer hover:bg-gray-750"
              style={{ colorScheme: "dark" }}
            >
              <option value="all" className="bg-gray-800 text-white">
                All Categories
              </option>
              <option value="Science" className="bg-gray-800 text-white">
                Science
              </option>
              <option value="History" className="bg-gray-800 text-white">
                History
              </option>
              <option value="Geography" className="bg-gray-800 text-white">
                Geography
              </option>
              <option value="Arts" className="bg-gray-800 text-white">
                Arts
              </option>
              <option value="Technology" className="bg-gray-800 text-white">
                Technology
              </option>
              <option value="Sports" className="bg-gray-800 text-white">
                Sports
              </option>
            </select>

            {/* Difficulty Filter */}
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer hover:bg-gray-750"
              style={{ colorScheme: "dark" }}
            >
              <option value="all" className="bg-gray-800 text-white">
                All Difficulties
              </option>
              <option value="easy" className="bg-gray-800 text-white">
                Easy
              </option>
              <option value="medium" className="bg-gray-800 text-white">
                Medium
              </option>
              <option value="hard" className="bg-gray-800 text-white">
                Hard
              </option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer hover:bg-gray-750"
              style={{ colorScheme: "dark" }}
            >
              <option value="all" className="bg-gray-800 text-white">
                All Status
              </option>
              <option value="active" className="bg-gray-800 text-white">
                Active
              </option>
              <option value="pending" className="bg-gray-800 text-white">
                Pending
              </option>
              <option value="inactive" className="bg-gray-800 text-white">
                Inactive
              </option>
            </select>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedQuestions.length > 0 && (
          <div className="rounded-2xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="text-white">
                {selectedQuestions.length} question
                {selectedQuestions.length !== 1 ? "s" : ""} selected
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleBulkStatusChange("active")}
                  className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-all"
                >
                  Mark Active
                </button>
                <button
                  onClick={() => handleBulkStatusChange("inactive")}
                  className="px-4 py-2 rounded-lg bg-gray-500/20 border border-gray-500/30 text-gray-400 hover:bg-gray-500/30 transition-all"
                >
                  Mark Inactive
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Questions Table */}
        <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedQuestions.length === filteredQuestions.length &&
                        filteredQuestions.length > 0
                      }
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    ID
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Question
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Category
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Difficulty
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Status
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Usage
                  </th>
                  <th className="p-4 text-left text-white/80 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((question) => (
                  <tr
                    key={question.id}
                    className="border-b border-white/10 hover:bg-white/5 transition-all"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedQuestions.includes(question.id)}
                        onChange={() => handleSelectQuestion(question.id)}
                        className="w-4 h-4 rounded cursor-pointer"
                      />
                    </td>
                    <td className="p-4 text-white/60">#{question.id}</td>
                    <td className="p-4 text-white max-w-md">
                      <div className="truncate">{question.question}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
                        {question.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm border capitalize ${getDifficultyColor(question.difficulty)}`}
                      >
                        {question.difficulty}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm border capitalize ${getStatusColor(question.status)}`}
                      >
                        {question.status}
                      </span>
                    </td>
                    <td className="p-4 text-white/60">{question.usageCount}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handlePreview(question)}
                          className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-all"
                          title="Preview"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleEdit(question)}
                          className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30 transition-all"
                          title="Edit"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(question.id)}
                          className="p-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all"
                          title="Delete"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredQuestions.length === 0 && (
            <div className="p-8 text-center text-white/60">
              No questions found matching your filters.
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Question Modal */}
      {showAddModal && (
        <AddEditQuestionModal
          question={editingQuestion}
          onClose={() => {
            setShowAddModal(false);
            setEditingQuestion(null);
          }}
          onSave={(questionData) => {
            if (editingQuestion) {
              // Update existing question
              setQuestions(
                questions.map((q) =>
                  q.id === editingQuestion.id ? { ...q, ...questionData } : q,
                ),
              );
            } else {
              // Add new question
              const newQuestion = {
                ...questionData,
                id: Math.max(...questions.map((q) => q.id)) + 1,
                createdAt: new Date().toISOString().split("T")[0],
                usageCount: 0,
              };
              setQuestions([...questions, newQuestion]);
            }
            setShowAddModal(false);
            setEditingQuestion(null);
          }}
        />
      )}

      {/* Preview Modal */}
      {showPreviewModal && previewQuestion && (
        <PreviewQuestionModal
          question={previewQuestion}
          onClose={() => {
            setShowPreviewModal(false);
            setPreviewQuestion(null);
          }}
        />
      )}
    </div>
  );
};

// Add/Edit Question Modal Component
const AddEditQuestionModal = ({ question, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    question: question?.question || "",
    category: question?.category || "Science",
    difficulty: question?.difficulty || "easy",
    type: question?.type || "multiple",
    status: question?.status || "active",
    options: question?.options || ["", "", "", ""],
    correctAnswer: question?.correctAnswer || "",
    points: question?.points || 10,
    timeLimit: question?.timeLimit || 15,
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.question.trim()) {
      alert("Please enter a question");
      return;
    }
    if (formData.options.some((opt) => !opt.trim())) {
      alert("Please fill all options");
      return;
    }
    if (!formData.correctAnswer) {
      alert("Please select the correct answer");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 rounded-2xl border border-white/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {question ? "Edit Question" : "Add New Question"}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Question */}
          <div>
            <label className="block text-white/80 mb-2">Question *</label>
            <textarea
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 resize-none"
              rows="3"
              placeholder="Enter your question..."
              required
            />
          </div>

          {/* Category and Difficulty */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 mb-2">Category *</label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                style={{ colorScheme: "dark" }}
              >
                <option value="Science" className="bg-gray-800 text-white">
                  Science
                </option>
                <option value="History" className="bg-gray-800 text-white">
                  History
                </option>
                <option value="Geography" className="bg-gray-800 text-white">
                  Geography
                </option>
                <option value="Arts" className="bg-gray-800 text-white">
                  Arts
                </option>
                <option value="Technology" className="bg-gray-800 text-white">
                  Technology
                </option>
                <option value="Sports" className="bg-gray-800 text-white">
                  Sports
                </option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 mb-2">Difficulty *</label>
              <select
                value={formData.difficulty}
                onChange={(e) =>
                  setFormData({ ...formData, difficulty: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                style={{ colorScheme: "dark" }}
              >
                <option value="easy" className="bg-gray-800 text-white">
                  Easy
                </option>
                <option value="medium" className="bg-gray-800 text-white">
                  Medium
                </option>
                <option value="hard" className="bg-gray-800 text-white">
                  Hard
                </option>
              </select>
            </div>
          </div>

          {/* Options */}
          <div>
            <label className="block text-white/80 mb-2">Options *</label>
            <div className="space-y-2">
              {formData.options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                  placeholder={`Option ${index + 1}`}
                  required
                />
              ))}
            </div>
          </div>

          {/* Correct Answer */}
          <div>
            <label className="block text-white/80 mb-2">Correct Answer *</label>
            <select
              value={formData.correctAnswer}
              onChange={(e) =>
                setFormData({ ...formData, correctAnswer: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
              style={{ colorScheme: "dark" }}
              required
            >
              <option value="" className="bg-gray-800 text-white">
                Select correct answer
              </option>
              {formData.options.map(
                (option, index) =>
                  option && (
                    <option
                      key={index}
                      value={option}
                      className="bg-gray-800 text-white"
                    >
                      {option}
                    </option>
                  ),
              )}
            </select>
          </div>

          {/* Points and Time Limit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 mb-2">Points</label>
              <input
                type="number"
                value={formData.points}
                onChange={(e) =>
                  setFormData({ ...formData, points: parseInt(e.target.value) })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                min="1"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2">
                Time Limit (seconds)
              </label>
              <input
                type="number"
                value={formData.timeLimit}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeLimit: parseInt(e.target.value),
                  })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500"
                min="5"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-white/80 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
              style={{ colorScheme: "dark" }}
            >
              <option value="active" className="bg-gray-800 text-white">
                Active
              </option>
              <option value="pending" className="bg-gray-800 text-white">
                Pending
              </option>
              <option value="inactive" className="bg-gray-800 text-white">
                Inactive
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all"
            >
              {question ? "Update Question" : "Create Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Preview Question Modal Component
const PreviewQuestionModal = ({ question, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 rounded-2xl border border-white/20 p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Question Preview</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Question Info */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
            {question.category}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm border capitalize ${
              question.difficulty === "easy"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : question.difficulty === "medium"
                  ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  : "bg-red-500/20 text-red-400 border-red-500/30"
            }`}
          >
            {question.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">
            {question.points} points
          </span>
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm border border-orange-500/30">
            {question.timeLimit}s
          </span>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-xl text-white font-semibold mb-4">
            {question.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                selectedAnswer === option
                  ? option === question.correctAnswer
                    ? "bg-green-500/20 border-2 border-green-500"
                    : "bg-red-500/20 border-2 border-red-500"
                  : option === question.correctAnswer && selectedAnswer
                    ? "bg-green-500/20 border-2 border-green-500"
                    : "bg-white/10 border border-white/20 hover:bg-white/20"
              }`}
            >
              <span className="text-white">{option}</span>
              {selectedAnswer && option === question.correctAnswer && (
                <span className="ml-2 text-green-400">✓ Correct</span>
              )}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default AdminQuestionsPage;

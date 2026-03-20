import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, difficulty, questionCount, challengeMode, opponent } =
    location.state || {
      category: "General Knowledge",
      difficulty: "medium",
      questionCount: 10,
      challengeMode: false,
      opponent: null,
    };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // Mock questions - replace with actual API call
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
      category: "Geography",
      difficulty: "easy",
      points: 100,
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      category: "Science",
      difficulty: "easy",
      points: 100,
    },
    {
      id: 3,
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      correctAnswer: 2,
      category: "Art",
      difficulty: "medium",
      points: 200,
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: 3,
      category: "Geography",
      difficulty: "easy",
      points: 100,
    },
    {
      id: 5,
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: 2,
      category: "History",
      difficulty: "medium",
      points: 200,
    },
    {
      id: 6,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      category: "Science",
      difficulty: "medium",
      points: 200,
    },
    {
      id: 7,
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "United Kingdom", "Russia"],
      correctAnswer: 1,
      category: "Sports",
      difficulty: "easy",
      points: 100,
    },
    {
      id: 8,
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      category: "Mathematics",
      difficulty: "medium",
      points: 200,
    },
    {
      id: 9,
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: 1,
      category: "Literature",
      difficulty: "easy",
      points: 100,
    },
    {
      id: 10,
      question: "What is the speed of light in vacuum?",
      options: [
        "299,792 km/s",
        "150,000 km/s",
        "500,000 km/s",
        "1,000,000 km/s",
      ],
      correctAnswer: 0,
      category: "Science",
      difficulty: "hard",
      points: 300,
    },
  ].slice(0, questionCount);

  // Timer
  useEffect(() => {
    if (gameOver || showFeedback) return;

    if (timeLeft === 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver, showFeedback]);

  const handleTimeout = () => {
    setShowFeedback(true);
    setAnswers([
      ...answers,
      { questionId: questions[currentQuestion].id, correct: false },
    ]);
    setStreak(0);

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleAnswerClick = (answerIndex) => {
    if (showFeedback || selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    setShowFeedback(true);

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft * 10);
      const questionPoints = questions[currentQuestion].points;
      const totalPoints = questionPoints + timeBonus;
      setScore(score + totalPoints);

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
    } else {
      setStreak(0);
    }

    setAnswers([
      ...answers,
      {
        questionId: questions[currentQuestion].id,
        correct: isCorrect,
        selectedAnswer: answerIndex,
        correctAnswer: questions[currentQuestion].correctAnswer,
      },
    ]);

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(15);
    } else {
      setGameOver(true);
    }
  };

  const handleQuit = () => {
    if (
      window.confirm(
        "Are you sure you want to quit? Your progress will be lost.",
      )
    ) {
      navigate("/");
    }
  };

  const handlePlayAgain = () => {
    navigate("/");
  };

  const getAnswerClass = (index) => {
    if (!showFeedback) {
      return "bg-white/10 hover:bg-white/20 border-white/30";
    }

    if (index === questions[currentQuestion].correctAnswer) {
      return "bg-green-500/30 border-green-500 animate-pulse";
    }

    if (
      index === selectedAnswer &&
      selectedAnswer !== questions[currentQuestion].correctAnswer
    ) {
      return "bg-red-500/30 border-red-500";
    }

    return "bg-white/10 border-white/30";
  };

  const getTimerColor = () => {
    if (timeLeft > 10) return "text-green-400";
    if (timeLeft > 5) return "text-yellow-400";
    return "text-red-400 animate-pulse";
  };

  const calculateAccuracy = () => {
    const correctAnswers = answers.filter((a) => a.correct).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const getRankGrade = () => {
    const accuracy = calculateAccuracy();
    if (accuracy >= 90)
      return { grade: "S", color: "text-yellow-400", emoji: "👑" };
    if (accuracy >= 80)
      return { grade: "A", color: "text-green-400", emoji: "⭐" };
    if (accuracy >= 70)
      return { grade: "B", color: "text-blue-400", emoji: "✨" };
    if (accuracy >= 60)
      return { grade: "C", color: "text-purple-400", emoji: "💫" };
    return { grade: "D", color: "text-red-400", emoji: "📚" };
  };

  // Game Over Screen
  if (gameOver) {
    const accuracy = calculateAccuracy();
    const correctAnswers = answers.filter((a) => a.correct).length;
    const rankInfo = getRankGrade();

    return (
      <div className="quizResultsPage min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 flex items-center justify-center">
        <div className="resultsContainer max-w-4xl w-full">
          {/* Results Header */}
          <div className="resultsHeader text-center mb-8">
            <div className="text-6xl mb-4">{rankInfo.emoji}</div>
            <h1 className="text-white font-bold text-5xl mb-2">
              {challengeMode ? "Challenge Complete!" : "Quiz Complete!"}
            </h1>
            {challengeMode && opponent && (
              <div className="text-white/90 text-xl mb-3">
                ⚔️ vs {opponent.name}
              </div>
            )}
            <div className={`text-7xl font-bold mb-4 ${rankInfo.color}`}>
              {rankInfo.grade} Rank
            </div>
            <div className="text-white/70 text-xl">
              {category} • {difficulty}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="statsGrid grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-white/70 text-sm mb-1">Score</div>
              <div className="text-white font-bold text-2xl">{score}</div>
            </div>
            <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-2">✓</div>
              <div className="text-white/70 text-sm mb-1">Accuracy</div>
              <div className="text-white font-bold text-2xl">{accuracy}%</div>
            </div>
            <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-white/70 text-sm mb-1">Correct</div>
              <div className="text-white font-bold text-2xl">
                {correctAnswers}/{questions.length}
              </div>
            </div>
            <div className="statCard bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-2">🔥</div>
              <div className="text-white/70 text-sm mb-1">Best Streak</div>
              <div className="text-white font-bold text-2xl">{maxStreak}</div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="detailedResults bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-4">
              Question Breakdown
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {questions.map((question, index) => {
                const answer = answers[index];
                return (
                  <div
                    key={index}
                    className={`questionResult rounded-xl p-4 border-2 ${
                      answer?.correct
                        ? "bg-green-500/10 border-green-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`text-2xl ${answer?.correct ? "" : "opacity-50"}`}
                      >
                        {answer?.correct ? "✓" : "✗"}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold mb-2">
                          {index + 1}. {question.question}
                        </div>
                        {!answer?.correct &&
                          answer?.selectedAnswer !== undefined && (
                            <>
                              <div className="text-red-400 text-sm mb-1">
                                Your answer:{" "}
                                {question.options[answer.selectedAnswer]}
                              </div>
                              <div className="text-green-400 text-sm">
                                Correct answer:{" "}
                                {question.options[answer.correctAnswer]}
                              </div>
                            </>
                          )}
                        {!answer?.correct &&
                          answer?.selectedAnswer === undefined && (
                            <div className="text-red-400 text-sm">
                              Time out!
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="actionButtons flex gap-4">
            <button
              onClick={handlePlayAgain}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-all"
            >
              🏠 Back to Home
            </button>
            <button
              onClick={() => navigate("/leaderboard")}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-all"
            >
              📊 View Leaderboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Gameplay Screen
  return (
    <div className="quizPage min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="quizContainer max-w-4xl mx-auto">
        {/* Header */}
        <div className="quizHeader flex justify-between items-center mb-6">
          <div className="categoryInfo">
            <div className="text-white/70 text-sm mb-1">
              {challengeMode && opponent ? (
                <span>⚔️ Challenge vs {opponent.name}</span>
              ) : (
                category
              )}
            </div>
            <div className="flex gap-2 items-center">
              {!challengeMode && (
                <span className="text-white/80 text-xs">{category}</span>
              )}
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {difficulty}
              </span>
              {streak > 0 && (
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-bold">
                  🔥 {streak} Streak
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleQuit}
            className="text-white/70 hover:text-white transition-colors font-semibold"
          >
            ✕ Quit
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progressSection mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-white font-bold text-lg">Score: {score}</span>
          </div>
          <div className="bg-white/10 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="timerSection mb-6 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-center">
              <div className="text-white/70 text-xs mb-1">Time Left</div>
              <div className={`text-4xl font-bold ${getTimerColor()}`}>
                {timeLeft}s
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="questionCard bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-6 border border-white/20 shadow-2xl">
          <div className="questionText text-white text-2xl font-bold text-center mb-8">
            {questions[currentQuestion].question}
          </div>

          {/* Answer Options */}
          <div className="answerOptions grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
                className={`answerButton p-6 rounded-2xl border-2 transition-all font-semibold text-lg text-left ${getAnswerClass(
                  index,
                )} ${
                  showFeedback
                    ? "cursor-not-allowed"
                    : "hover:scale-105 cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="optionLetter bg-white/20 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="optionText text-white flex-1">{option}</div>
                  {showFeedback &&
                    index === questions[currentQuestion].correctAnswer && (
                      <div className="text-2xl">✓</div>
                    )}
                  {showFeedback &&
                    index === selectedAnswer &&
                    selectedAnswer !==
                      questions[currentQuestion].correctAnswer && (
                      <div className="text-2xl">✗</div>
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="feedbackSection mt-6 text-center">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                <div className="correctFeedback">
                  <div className="text-4xl mb-2">🎉</div>
                  <div className="text-green-400 font-bold text-xl mb-1">
                    Correct!
                  </div>
                  <div className="text-white/70">
                    +
                    {questions[currentQuestion].points +
                      Math.floor(timeLeft * 10)}{" "}
                    points
                  </div>
                </div>
              ) : selectedAnswer !== null ? (
                <div className="incorrectFeedback">
                  <div className="text-4xl mb-2">😔</div>
                  <div className="text-red-400 font-bold text-xl">
                    Wrong Answer!
                  </div>
                </div>
              ) : (
                <div className="timeoutFeedback">
                  <div className="text-4xl mb-2">⏱️</div>
                  <div className="text-yellow-400 font-bold text-xl">
                    Time's Up!
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Points Info */}
        <div className="pointsInfo text-center text-white/60 text-sm">
          Base Points: {questions[currentQuestion].points} • Time Bonus:{" "}
          {timeLeft * 10}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

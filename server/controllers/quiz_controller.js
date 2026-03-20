import Quiz from "../models/quiz.model.js";

const createQuiz = async (req, res) => {
    try {
        const {title, description, questions, category, difficulty, points} = req.body;
        if(!title || !description || !questions || !category || !difficulty || !points){
            return res.status(400).json({message: "All fields are required"});
        }
        const newQuiz = new Quiz({title, description, questions, category, difficulty, points});
        await newQuiz.save();
        res.status(201).json({message: "Quiz created successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        if(quizzes.length === 0){
            return res.status(404).json({message: "No quizzes found"});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

export default {createQuiz, getAllQuizzes}
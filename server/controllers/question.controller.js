import Question from "../models/question.model.js";

const createQuestion = async (req, res) => {
    try {
        const {question, options, answer} = req.body;
        if(!question || !options || !answer){
            return res.status(400).json({message: "All fields are required"});
        }
        const newQuestion = new Question({question, options, answer});
        await newQuestion.save();
        res.status(201).json({message: "Question created successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        if(questions.length === 0){
            return res.status(404).json({message: "No questions found"});
        }
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

export default {createQuestion, getAllQuestions}
import express from "express";
const quizRouter = express.Router();
import quizController from "../controllers/quiz_controller.js";

quizRouter.route("/create").post(quizController.createQuiz);
quizRouter.route("/quizzes").get(quizController.getAllQuizzes);

export default quizRouter;

